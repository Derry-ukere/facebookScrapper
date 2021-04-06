import puppeteer from 'puppeteer'
import Post from './models/postModels.js'
import Comment from './models/commentsModel.js'
import { saveToDataBase } from './dataBase.js'

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

// methods
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
    console.log('redirecting to page ...')
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
      let x = 0
      while (x < 41) {
        await page.click('#m_group_stories_container > div > a > span')
        console.log(`clicked  ${x} times`)
        let number = Math.floor(Math.random() * 3000) + 1000
        await page.waitForTimeout(number)
        const links = await page.$$eval(
          'footer > div > a:nth-child(7)',
          (links) => links.map((element) => element.href)
        )
        container.push(links)
        x++
      }
      let allLinks = container.reduce((store, current) => {
        return store.concat(current)
      })
      console.log(allLinks)
      res(allLinks)
    } catch (error) {
      console.log(error)
    }
  })
}

function convert(urls) {
  let container = []
  for (const url of urls) {
    let alink = url.split('')
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
  let alink = url.split('')
  alink[8] = 'free'
  let newLink = alink.join('')
  return newLink
}

async function getAllComments(urls) {
  return new Promise(async function (resolve) {
    let container = []
    for (const url of urls) {
      const data = await getOneComment(url)
      container.push(data)
    }
    let data = container.reduce((store, current) => {
      return store.concat(current)
    })
    resolve(data)
  })
}
async function grabComments() {
  return new Promise(async function (resolve) {
    try {
      const Commenter = await page.$$eval(
        'div#m_story_permalink_view > div:nth-child(2) > div > div:nth-child(4) > div > div > h3',
        (comment) => comment.map((comment) => comment.textContent)
      )

      const Comment = await page.$$eval(
        'div#m_story_permalink_view > div:nth-child(2) > div > div:nth-child(4) > div > div > div',
        (commenter) => commenter.map((commenter) => commenter.textContent)
      )

      const filteredComments = Comment.filter(predicateFunc)

      const data = Commenter.map((Commenter, index) => ({
        Commenter,
        Comment: filteredComments[index],
      }))
      resolve(data)
    } catch (error) {
      console.log('this is the error', error)
    }
  })
}
async function getOneComment(url) {
  return new Promise(async function (resolve) {
    try {
      await page.goto(url)
      console.log('getting comments... ')
      await navigationPromise
      let number = Math.floor(Math.random() * 3000) + 1000
      await page.waitForTimeout(number)
      // get comments
      const data = await grabComments()
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
    console.log('getting posts... ')
    const container = []
    for (const url of urls) {
      const info = await getPost(url)
      container.push(info)
    }
    resolve(container)
    console.log('completed..')
  })
}

function grabPost(url) {
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

      const info = {
        Post,
        Poster,
        Date,
      }
      resolve(info)
    } catch (error) {
      console.log('this is the error: ', error)
      return error
    }
  })
}
async function getPost(url) {
  return new Promise(async function (resolve) {
    console.log('getting post... ')
    const info = await grabPost(url)
    resolve(info)
  })
}

export async function fetchData() {
  return new Promise(async (resolve) => {
    await login('ukderry@gmail.com', 'Lootingavenger101')
    await navigationPromise
    const allLinks = await getLinks(
      'https://free.facebook.com/groups/WilsonsDisease/?refid=46&__xts__%5B0%5D=12.Abp_rVK8PhMrrvkpB4HV2eygRU67cZrXFs-k-0Uk9tQp35-XLNga_Gm7WWJR86jMw5twFBNKRVcjxeKXfvgJwK8s1niE7THzqmnDi_wICuVjd0xJaNzzoYfZDGM8bvKvEH6QZet5v7t8Wc6xyXdEfwgz0N43uyzIDXCPXefYWPa7qQo-Gds8WAtWvINs0pPUYe8c8lu9aY_K5Bd_45s3dPZOVFArYRa3gNufA9MdiXubv7LecRd4UgVs6WTfDKgUZfFRGRFzYwn9MZQ-ogSIrkQA-tNbLv3zEwhWygWzZq4Wjhav2S85FCqHzrYAESRFv3KNU2XXUvpzMtKCUu3PqCVpkn4Wwz-3gfC81uP2USkfTMhpOFMkHVScLq-F0nmYDeu4PjOhq0Y2f6AzoRTyFpU6RhTTkhe4zf3bWiVxEsTBV25zqyn6ydA1nHk766_CVzEwBlwsNHhxKRzpUXurHnUvMmrS-iC18N4-PvomkHtvqDkOxc2hqUgzveVCO0NyIC2aZJTDDNlprJXTGue5O3m4NV49PqP9qUa7TK51hufDnxkr6CFumInI8uAX6Z0nAHNgtqf9-BwfqwLi6q9wd44P&_rdc=1&_rdr'
    )
    const comments = await getAllComments(convert(allLinks))
    const posts = await getPosts(convert(allLinks))
    resolve([posts, comments])
    browser.close()
  })
}

const [posts, comments] = await fetchData()
saveToDataBase(Post, posts)
saveToDataBase(Comment, comments)
