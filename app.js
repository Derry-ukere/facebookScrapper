import puppeteer from 'puppeteer'
import Post from './models/postModels.js'
import Comment from './models/commentsModel.js'
import Link from './models/LinkModel.js'
import {
  saveToDataBase,
  getLinksFromDb,
  saveLinkToDataBase,
} from './dataBase.js'
import { v4 as uuidv4 } from 'uuid'

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
})

const page = await browser.newPage()
await page.setDefaultNavigationTimeout(0)
const navigationPromise = page.waitForNavigation({
  timeout: 0,
  waitUntil: 'domcontentloaded',
})

// Methods
async function login(email, password) {
  return new Promise(async function (resolve, reject) {
    console.log('logging in ...')
    await page.goto(
      'https://free.facebook.com/home.php?ref_component=mfreebasic_home_header&ref_page=%2Fwap%2Fhome.php&refid=7'
    )
    await navigationPromise
    await page.waitForSelector('#m_login_email')
    await page.click('#m_login_email')
    await navigationPromise
    // type in email address
    await page.type('#m_login_email', email)
    await navigationPromise
    await page.waitForSelector(
      '#login_form > ul > li:nth-child(2) > section > input'
    )
    await page.click('#login_form > ul > li:nth-child(2) > section > input')
    await navigationPromise
    // TODO : change to your password
    await page.type(
      '#login_form > ul > li:nth-child(2) > section > input',
      password
    )
    //click on login button
    await page.click('#login_form > ul > li:nth-child(3) > input')
    await navigationPromise
    await page.waitForTimeout(3000)
    await page.waitForSelector('#root')
    // ;(await page.$('button.bg'))
    // await page.click('button.bg')
    // await navigationPromise
    // await page.waitForTimeout(3000)
    console.log('redirecting!!')
    resolve()
  })
}
async function getLinks(url) {
  return new Promise(async function (res, rej) {
    try {
      await page.goto(url)
      //getting links
      console.log('fetching links...')
      const container = []
      const SeeMoreButton = await page.$(
        '#m_group_stories_container > div > a > span'
      )
      // get  links
      let x = 1
      while (true) {
        await page.click('#m_group_stories_container > div > a > span')
        console.log(`clicked  ${x} times`)
        let number = Math.floor(Math.random() * 3000) + 2000
        await page.waitForTimeout(number)
        await navigationPromise
        const links = await page.$$eval(
          'article > footer > div:nth-child(2) > a:nth-child(5)', //a:nth-child(7)
          (links) => links.map((element) => element.href)
        )
        // container.push(links)
        const newLinks = presentLinkForDataBase(links) // present links in mongodb format
        console.log('totalLinks: ', newLinks.length)
        saveLinkToDataBase(Link, newLinks) // save links to database
        x++
      }
      res()
    } catch (error) {
      console.log(error)
    }
  })
}
function convert(urls) {
  let container = []
  for (const url of urls) {
    let alink = url.link.split('')
    if (alink[8] === 'm') {
      alink[8] = 'free'
      container.push(alink.join(''))
    } else {
      urls.slice(8, 1)
    }
  }
  return container
}
function convertOne(url) {
  let alink = url.link.split('')
  alink[8] = 'free'
  let newLink = alink.join('')
  return newLink
}
async function getAllComments(urls) {
  return new Promise(async function (resolve) {
    let container = []
    let x = 1
    for (const url of urls) {
      console.log(`getting comments ${x}... `)
      const data = await getOneComment(url)
      container.push(data)
      console.log('single comment: ', data)
      x++
    }
    let data = container.reduce((store, current) => {
      return store.concat(current)
    })
    resolve(data)
    console.log('getting comments completed..')
  })
}
async function grabComments(inputTag) {
  return new Promise(async function (resolve) {
    try {
      const check = (await page.$('#see_prev_2860120224243683 > a'))
        ? true
        : false
      const Commenter = await page.$$eval(
        'div#m_story_permalink_view > div:nth-child(2) > div > div:nth-child(4) > div > div > h3',
        (comment) => comment.map((comment) => comment.textContent)
      )

      const Comment = await page.$$eval(
        'div#m_story_permalink_view > div:nth-child(2) > div > div:nth-child(4) > div > div > div:nth-child(2)',
        (commenter) => commenter.map((commenter) => commenter.textContent)
      )

      // get commenter link
      const commentersLinks = await page.$$eval(
        'div#m_story_permalink_view > div:nth-child(2) > div > div:nth-child(4) > div > div > h3 > a',
        (link) => link.map((link) => link.href)
      )
      const Poster = await page.$eval(
        'tbody h3',
        (poster) => poster.textContent
      )
      const Date = await page.$eval('abbr', (date) => date.textContent)

      const tag = inputTag
      // pass commenter link to a function and get loctions pushed to an array and return array
      // const location = await getCommentersLocation(commentersLinks)

      // map and add locations to data
      const filteredComments = Comment.filter(predicateFunc)
      const data = Commenter.map((Commenter, index) => ({
        Commenter,
        Comment: filteredComments[index],
        tag,
      }))
      resolve(data)
    } catch (error) {
      console.log('this is the error', error)
    }
  })
}
async function getOneComment(url, tag) {
  return new Promise(async function (resolve) {
    try {
      await page.goto(url)
      await navigationPromise
      let number = Math.floor(Math.random() * 3000) + 1000
      await page.waitForTimeout(number)
      // get comments
      const data = await grabComments(tag)
      console.log('single comment: ', data)
      resolve(data)
    } catch (error) {
      console.log('An error occured-- description: ', error)
    }
  })
}
const predicateFunc = (element) => {
  return (
    !element.match(/^\d/) &&
    !element.match(/reply$/) &&
    !element.match(/replies$/) &&
    element !== ''
  )
}
async function getPosts(urls) {
  return new Promise(async function (resolve) {
    const container = []
    let x = 1
    for (const url of urls) {
      console.log(`getting posts...${x} `)
      const info = await getSinglePost(url)
      container.push(info)
      console.log('single post: ', info)
      x++
    }
    console.log('getting post completed..')
    resolve(container)
  })
}

function grabPostInfo(url, inputTag) {
  return new Promise(async function (resolve) {
    try {
      await page.goto(url)
      await navigationPromise
      let number = Math.floor(Math.random() * 3000) + 1000
      await page.waitForTimeout(number)
      const Post = await page.$eval(
        '#m_story_permalink_view > div > div > div > div',
        (post) => post.textContent
      )
      const Poster = await page.$eval(
        'tbody h3',
        (poster) => poster.textContent
      )
      const Date = await page.$eval('abbr', (date) => date.textContent)

      // const PostersLink = await page.$eval('tbody h3 a', (link) => link.href)
      // const location = await getOneLocation(PostersLink)
      const tag = inputTag
      const info = {
        Post,
        Poster,
        Date,
        // location,
        tag,
      }
      resolve(info)
    } catch (error) {
      console.log('this is the error: ', error)
      return error
    }
  })
}
async function getSinglePost(url, tag) {
  return new Promise(async function (resolve) {
    const info = await grabPostInfo(url, tag)
    console.log('single post: ', info)
    resolve(info)
  })
}
// async function getOneLocation(url) {}
async function getCommentersLocation(urls) {
  return new Promise(async function (resolve) {
    const container = []
    for (const url of urls) {
      try {
        await page.goto(url)
        await navigationPromise
        let number = Math.floor(Math.random() * 3000) + 1000
        await page.waitForTimeout(number)
        let location = ''
        const checkLocationOne = await page.$('#living > div > div > div')
        const checkLocationTwo = await page.$(
          '#root div div div:nth-child(2) span'
        )

        if (checkLocationOne) {
          location = await page.$eval(
            '#living > div > div > div  ',
            (link) => link.innerText
          )
        } else if (checkLocationTwo) {
          location = await page.$eval(
            '#root div div div:nth-child(2) span',
            (link) => link.innerText
          )
        }
        if (!location) {
          location = 'details not available'
        }
        container.push(location)
      } catch (error) {
        console.log(error)
      }
    }
    resolve(container)
  })
}

async function getOneLocation(url) {
  return new Promise(async function (resolve) {
    try {
      await page.goto(url)
      await navigationPromise
      let number = Math.floor(Math.random() * 3000) + 2000
      await page.waitForTimeout(number)
      let location
      const checkLocationOne = await page.$('#living > div > div > div')
      const checkLocationTwo = await page.$(
        '#root div div div:nth-child(2) span'
      )

      if (checkLocationOne) {
        location = await page.$eval(
          '#living > div > div > div  ',
          (link) => link.innerText
        )
      } else if (checkLocationTwo) {
        location = await page.$eval(
          '#root div div div:nth-child(2) span',
          (link) => link.innerText
        )
      }
      if (!location) {
        location = 'details not available'
      }

      resolve(location)
    } catch (error) {
      console.log(error)
    }
  })
}
function presentLinkForDataBase(links) {
  const mapfunc = (link) => ({
    link: link,
  })
  return links.map(mapfunc)
}

async function fetchAndSaveData(url, tag) {
  return new Promise(async function (resolve) {
    try {
      //get post and save to db
      const post = await getSinglePost(url, tag)
      saveToDataBase(Post, [post])

      //get comments and save to db
      const comments = await getOneComment(url, tag)
      saveToDataBase(Comment, comments)
      resolve()
    } catch (error) {
      console.log('error occured: ', error)
    }
  })
}

async function attachTagAndSaveToDb(urls) {
  try {
    return new Promise(async function (resolve) {
      let x = 3000
      for (const url of urls) {
        let id = uuidv4()
        await fetchAndSaveData(url, id)
        console.log(`submitted  link ${x}..`)
        x++
        resolve()
      }
    })
  } catch (error) {
    console.log('error occured: ', error)
  }
}

export async function runFunc() {
  return new Promise(async (resolve) => {
    await login('avenger.looting@gmail.com', 'Mudiaga101')
    await navigationPromise

    // Get links from group
    // await getLinks(
    //   'https://free.facebook.com/groups/104299046279187/?refid=27&_rdc=1&_rdr'
    // )

    // Share links into batches
    const Dblinks = await getLinksFromDb()
    const firstRun = Dblinks.slice(3000, 3200)
    // const secondRun = Dblinks.slice(5, 8)

    await attachTagAndSaveToDb(convert(firstRun))
    resolve()
  })
}

// GRAB DATA
await runFunc()
// TODO !!
// set download status
