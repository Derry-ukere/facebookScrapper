import puppeteer from 'puppeteer'

const createFile = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage()

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://facebook.com/')
  await navigationPromise

  await page.waitForSelector('input[type="text"]')
  await page.click('input[type="text"]')

  await navigationPromise

  //   //TODO : change to your email
  await page.type('input[type="text"]', 'ukderry@gmail.com')

  // await page.waitForSelector('#pass')
  // await page.click('#pass')

  // await page.waitFor(500)

  await page.waitForSelector('input[type="password"]')
  await page.click('input[type="password"]')
  await page.waitFor(500)

  //   //TODO : change to your password
  await page.type('input[type="password"]', 'Lootingavenger101')

  await page.waitForSelector('input[type="submit"]')
  await page.click('input[type="submit"]')

  await navigationPromise

  await browser.close()
}

export { createFile }
