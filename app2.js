import puppeteer from 'puppeteer'
import xlxs from 'xlsx'

const browser = await puppeteer.launch({
  headless: false,
  defaultViewport: null,
})

const page = await browser.newPage()
// const pageTwo = await browser.newPage()

const navigationPromise = page.waitForNavigation({
  waitUntil: 'networkidle2',
})

class FacebookScraper {
  // methods
  static async login(email, password, url) {
    return new Promise(async function (resolve, reject) {
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
      await navigationPromise

      //click on login button
      await page.click('#login_form > ul > li:nth-child(3) > input')
      // await this.delay(5000)
      // await Promise.all([page.waitForNavigation()])
      // await page.waitForSelector('.bp9cbjyn.j83agx80.byvelhso.l9j0dhe7')
      // await navigationPromise
      await page.goto(
        'https://free.facebook.com/groups/123421681723632/?refid=27&_rdc=1&_rdr'
      )
    })
  }

  static async fetchData(links, component) {
    await page.goto(links)

    await page.waitForSelector(
      '#root > div.bv > header > table > tbody > tr > td.bg > a > table > tbody > tr > td.bj.ca.bg > h1 > div'
    )

    // testing to get single node
    const comment = await page.$eval(component, (element) => element.innerHTML)
    console.log(comment)
    //   const commentsTest = await page.$$eval(component, (element) =>
    //   element.map((eachElement) => eachElement.innerHTML)
    // )

    // awaiting next refactor!!
    // await navigationPromise
    // console.log('test display:')
    // const commentstwo = await page.$$eval(
    //   'div[data-pagelet="GroupFeed"] > div[role="feed"] > div.rq0escxv.l9j0dhe7.du4w35lb.qmfd67dx.hpfvmrgz.gile2uim.buofh1pr.g5gj957u.aov4n071.oi9244e8.bi6gxh9e.h676nmdw.aghb5jc5 > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div > div.cwj9ozl2.tvmbv18p > ul > li > div > div > div.g3eujd1d.ni8dbmo4.stjgntxs.hv4rvrfc > div > div.q9uorilb.bvz0fpym.c1et5uql.sf5mxxl7 > div > div > div > div > div > span > div > div',
    //   (comm) => comm.map((f) => f.innerHTML)
    // )
    // await navigationPromise
    // console.log('test display two:', commentstwo)
  }
  static async getCommentLinks(url) {
    return new Promise(async function (resolve, reject) {
      await page.goto(url)
      await page.waitForSelector(
        '#root > div.bv > header > table > tbody > tr > td.bg > a > table > tbody > tr > td.bj.ca.bg > h1 > div'
      )
      // testing to get single node
      const comment = await page.$eval(
        '#u_0_f_tP > footer > div:nth-child(2) > a.et',
        (element) => element.innerHTML
      )
      console.log(comment)
      resolve()
    })
  }
  static delay(time) {
    return new Promise(function (res, rej) {
      setTimeout(res, time)
    })
  }
  static async getComments() {
    await this.login(
      'ukderry@gmail.com',
      'Lootingavenger101',
      'https://free.facebook.com/groups/123421681723632/?refid=27&_rdc=1&_rdr'
    )
  }
}

FacebookScraper.getComments()
