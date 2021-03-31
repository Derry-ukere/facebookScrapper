import puppeteer from 'puppeteer'
import xlxs from 'xlsx'

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

function generateName() {
  const day = new Date()
  let dayObj = {
    date: day.getDate(),
    year: day.getFullYear(),
    month: day.getMonth() + 1,
  }

  let today = `${dayObj.date}-${dayObj.month}-${dayObj.year}`
  const comments = `comments-${today}.xlsx`
  const posts = `posts-${today}.xlsx`
  return [comments, posts]
}

const names = generateName()
const commentName = names[0]
const postName = names[1]

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

async function getComments(url) {
  await page.goto(url)
  console.log('getting comments... ')
  await navigationPromise
  await page.waitForTimeout(3000)
  const comment = await page.$eval(
    'div#m_story_permalink_view > div[id="ufi_870946180304508"]',
    (comment) => comment.textContent
  )
  console.log(comment)
}
async function getOneComment(url) {
  return new Promise(async function (resolve) {
    await page.goto(url)
    console.log('getting comments... ')
    await navigationPromise
    let number = Math.floor(Math.random() * 3000) + 1000
    await page.waitForTimeout(number)
    const comment = await page.$eval(
      'div#m_story_permalink_view > div[id="ufi_870946180304508"]',
      (comment) => comment.textContent
    )
    console.log(comment)
    resolve()
  })
}

async function getPosts(urls) {
  return new Promise(async function (resolve) {
    console.log('getting posts... ')
    const container = []
    for (const url of urls) {
      try {
        await page.goto(url)
        await navigationPromise
        let number = Math.floor(Math.random() * 3000) + 1000
        await page.waitForTimeout(number)
        const Post = await page.$eval('div.bx > div', (post) => post.innerText)
        const Poster = await page.$eval(
          'tbody h3',
          (poster) => poster.innerText
        )
        const Date = await page.$eval('abbr', (date) => date.innerText)

        const info = {
          Post,
          Poster,
          Date,
        }

        container.push(info)
      } catch (error) {
        console.log('this is the error: ', error)
        return error
      }
    }
    resolve(container)
    console.log('completed..')
  })
}

async function getPost(url) {
  return new Promise(async function (resolve) {
    console.log('getting post... ')
    try {
      await page.goto(url)
      await navigationPromise
      let number = Math.floor(Math.random() * 3000) + 1000
      await page.waitForTimeout(number)
      const post = await page.$eval('div.bq > div', (post) => post.innerText)
      const poster = await page.$eval('tbody h3', (poster) => poster.innerText)
      const date = await page.$eval('abbr', (date) => date.innerText)

      const info = {
        Post,
        Poster,
        Date,
      }
      return info
    } catch (error) {
      console.log('this is the error: ', error)
      return error
    }
  })
}

function presentPosts(scrappedPosts, name) {
  try {
    console.log('creating excelsheet!!')
    const wb = xlxs.utils.book_new()
    const ws = xlxs.utils.json_to_sheet(scrappedPosts)
    xlxs.utils.book_append_sheet(wb, ws)
    xlxs.writeFile(wb, name)
    console.log('done ...')
  } catch (error) {
    console.log('customized error!!', error)
  }
}

async function main() {
  await login('ukderry@gmail.com', 'Lootingavenger101')
  await navigationPromise
  const allLinks = await getLinks(
    'https://free.facebook.com/groups/WilsonsDisease/?refid=46&__xts__%5B0%5D=12.Abp_rVK8PhMrrvkpB4HV2eygRU67cZrXFs-k-0Uk9tQp35-XLNga_Gm7WWJR86jMw5twFBNKRVcjxeKXfvgJwK8s1niE7THzqmnDi_wICuVjd0xJaNzzoYfZDGM8bvKvEH6QZet5v7t8Wc6xyXdEfwgz0N43uyzIDXCPXefYWPa7qQo-Gds8WAtWvINs0pPUYe8c8lu9aY_K5Bd_45s3dPZOVFArYRa3gNufA9MdiXubv7LecRd4UgVs6WTfDKgUZfFRGRFzYwn9MZQ-ogSIrkQA-tNbLv3zEwhWygWzZq4Wjhav2S85FCqHzrYAESRFv3KNU2XXUvpzMtKCUu3PqCVpkn4Wwz-3gfC81uP2USkfTMhpOFMkHVScLq-F0nmYDeu4PjOhq0Y2f6AzoRTyFpU6RhTTkhe4zf3bWiVxEsTBV25zqyn6ydA1nHk766_CVzEwBlwsNHhxKRzpUXurHnUvMmrS-iC18N4-PvomkHtvqDkOxc2hqUgzveVCO0NyIC2aZJTDDNlprJXTGue5O3m4NV49PqP9qUa7TK51hufDnxkr6CFumInI8uAX6Z0nAHNgtqf9-BwfqwLi6q9wd44P&_rdc=1&_rdr'
  )

  const post = await getPosts(convert(allLinks))
  presentPosts(post, postName)
  browser.close()
}
main()
