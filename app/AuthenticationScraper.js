/**
  * @author Ilori Stephen A
  * @desc This is a simple web scraper in js that scrapes website, generates a json response and save it to file, generates a pdf and a screenshot of the operation.
**/
const Puppeteer = require('puppeteer');

class AuthenticationScraper {
  async login() {
    const Browser = await Puppeteer.launch({
      headless: false,
    });

    const Page = await Browser.newPage();
    await Page.goto('https://www.codelighters.com/login');

    await Page.type("#email", "YOUR-EMAIL-ADDRESS");
    await Page.type("#password", "YOUR-CODELIGHTERS-PASSWORD");

    await Promise.all([
      Page.click('.btn-primary'),
    ]);

    await Page.waitForNavigation({ waitUntil: 'networkidle0' })

    await Page.screenshot({
      path: './public/img/' + new Date().toISOString() + '.png',
      fullPage: true
    });

    await Browser.close();
  }
}

module.exports = new AuthenticationScraper();
