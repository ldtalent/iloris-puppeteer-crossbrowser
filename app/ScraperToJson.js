/**
  * @author Ilori Stephen A
  * @desc This is a simple web scraper in js that scrapes website, generates a json response and save it to file, generates a pdf and a screenshot of the operation.
**/
const Fs = require('fs');
const Cheerio = require('cheerio');
const Puppeteer = require('puppeteer');
const RequestPromise = require('request-promise');

class ScraperToJson {
  toJson() {
    const Options = {
      uri: 'https://www.jumia.com.ng/laptops/',
      transform: function (body) {
        return Cheerio.load(body);
      }
    };

    RequestPromise(Options)
      .then(function ($) {
       let products = [];
       let productsWrapper = $(".-pbm .col12").html();

       $(productsWrapper).find("div > article[class='prd _fb col c-prd']").each(function (i, element) {
         let currentElement = Cheerio.load(element);
         let productObject = { };

         productObject.title = currentElement('.core .info .name').text().trim() || '';
         productObject.price = currentElement('.core .info .prc').text().trim() || 0.00;
         productObject.oldPrice = currentElement('.core .info .s-prc-w .old').text().trim() || 0.00;
         productObject.discount = currentElement('.core .info .s-prc-w .tag').text().trim() || 0;
         productObject.starRatings = currentElement('.core .rev .stars_s').text().trim() || 0;
         productObject.image = currentElement('.core .img-c img').attr('data-src') || '';

         products.push(productObject);
       });

         if (products.length > 0) {
           console.log('######## Saving Your Products #########')
           Fs.writeFile('./public/json/jumia.json', JSON.stringify(products, undefined, 2), 'utf-8', (err) => {
             if (!err) {
               console.log(JSON.stringify(products, undefined, 2));
               console.log('####### Finished With ' + products.length + ' Products Saved #########');
             }

             if (err) {
               console.log(err);
               console.log('######## Oops! A Technical Error Occurred. ############');
             }
           });
         } else {
           console.log('######## Couldn\t Save Products Because The Products Array Is Empty. ############');
         }
      })
      .catch(function (err) {
        console.log(err);
        console.log('Name:', err.name);
      });
  }

  async toPng() {
    const Browser = await Puppeteer.launch({
      headless: false,
    });

    const Page = await Browser.newPage();
    await Page.goto('https://www.jumia.com.ng/laptops/');

    await Page.waitForSelector('img', {
      visible: true
    })

    await this.autoScroll(Page);

    await Page.screenshot({
      path: './public/img/' + new Date().toISOString() + '.png',
      fullPage: true
    });

    await Browser.close();
  }

  async autoScroll(page){
    await page.evaluate(async () => {
      await new Promise((resolve, reject) => {
        var totalHeight = 0;
        var distance = 100;
        var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if(totalHeight >= scrollHeight){
            clearInterval(timer);
            resolve();
          }
        }, 5000);
      });
    });
  }

  async toPdf() {
    const Browser = await Puppeteer.launch({
      headless: false,
    });

    const Page = await Browser.newPage();
    await Page.goto('https://www.jumia.com.ng/laptops/');

    await Page.waitForSelector('img', {
      visible: true
    })

    await this.autoScroll(Page);

    await Page.pdf({
      path: './public/img/' + new Date().toISOString() + '.png',
      format: 'A4'
    });

    await Browser.close();
  }
}

module.exports = new ScraperToJson();
