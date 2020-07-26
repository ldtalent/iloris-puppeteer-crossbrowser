/**
  * @author Ilori Stephen A
  * @desc This is a simple web scraper in js that scrapes website without and with headers.
**/
const Cheerio = require('cheerio');
const RequestPromise = require('request-promise');

class BasicScraper {
  scrape() {
    const Options = {
      uri: 'https://webscraper.io/test-sites/e-commerce/static/computers/tablets',
      transform: function (body) {
        return Cheerio.load(body);
      }
    };

    RequestPromise(Options)
      .then(function ($) {
       let products = [];
       let productsWrapper = $("div[class=wrapper] .test-site .col-md-9").html();
         $(productsWrapper).find('.row > div').each(function (i, element) {
           let currentElement = Cheerio.load(element);
           let productObject = { };
           productObject.img = currentElement('img').attr('src') || '';
           productObject.price = currentElement('.caption .price').text().trim() || '';
           productObject.title = currentElement('.caption .title').text().trim() || '';
           productObject.description = currentElement('.description').text().trim() || '';
           productObject.reviews = currentElement('.ratings .pull-right').text().trim() || '';
           productObject.starRatings = currentElement('.ratings').children().last().attr('data-rating') || '';

           products.push(productObject);
         });

         if (products.length > 0) {
           console.log('######## Loading Your Products #########')
           setTimeout(() => {
             console.log(JSON.stringify(products, undefined, 2));
             console.log('####### Finished With ' + products.length + ' Products #########');
           }, 2000);
         } else {
           console.log('######## Couldn\t Load Products. ############');
         }
      })
      .catch(function (err) {
        console.log('Name:', err.name);
      });
  }

  scrapeWithHeaders() {
    const Options = {
      uri: 'https://webscraper.io/test-sites/e-commerce/static/computers/tablets',
      headers: {
        "authority": "webscraper.io",
        "method": "GET",
        "path": "/test-sites/e-commerce/static/computers/tablets",
        "scheme": "https",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "cookie": "_ga=GA1.2.182665369.1595533827; _gaexp=GAX1.2.H8H5n7DNQUKlX-eOkZuIBg.18490.0; _gid=GA1.2.1669011134.1595667938",
        "dnt": 1,
        "pragma": "no-cache",
        "referer": "https://webscraper.io/test-sites/e-commerce/static/computers",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": 1,
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36",
      },
      gzip: true,
      transform: function (body) {
        return Cheerio.load(body);
      }
    };

    RequestPromise(Options)
      .then(function ($) {
       let products = [];
       let productsWrapper = $("div[class=wrapper] .test-site .col-md-9").html();
         $(productsWrapper).find('.row > div').each(function (i, element) {
           let currentElement = Cheerio.load(element);
           let productObject = { };
           productObject.img = currentElement('img').attr('src') || '';
           productObject.price = currentElement('.caption .price').text().trim() || '';
           productObject.title = currentElement('.caption .title').text().trim() || '';
           productObject.description = currentElement('.description').text().trim() || '';
           productObject.reviews = currentElement('.ratings .pull-right').text().trim() || '';
           productObject.starRatings = currentElement('.ratings').children().last().attr('data-rating') || '';

           products.push(productObject);
         });

         if (products.length > 0) {
           console.log('######## Scraping With Headers!!! #########')
           console.log('######## Loading Your Products #########')
           setTimeout(() => {
             console.log(JSON.stringify(products, undefined, 2));
             console.log('####### Finished With ' + products.length + ' Products #########');
           }, 2000);
         } else {
           console.log('######## Couldn\t Load Products. ############');
         }
      })
      .catch(function (err) {
        console.log('Name:', err.name);
      });
  }
}

module.exports = new BasicScraper();
