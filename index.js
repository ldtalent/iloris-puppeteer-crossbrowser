//Node Modules....
const Yargs = require('yargs');

//Custom Modules....
const BasicScraper = require('./app/BasicScraper');
const ScraperToJson = require('./app/ScraperToJson');
const AuthenticationScraper = require('./app/AuthenticationScraper');

//App Initialization...
const YargsArgV = Yargs
  .command('scrapeBasic', 'Scrapes a website without headers passed in. However, be sure to Hack the Js file in app/BasicScraper!')
  .command('scrapeWithHeaders', 'Scrapes a website with headers. Be sure to Hack the Js File in app/BasicScraper!')
  .command('toJson', 'Scrapes a website and saves the result to a json file. Be sure to Hack the Js File in app/ScraperToJson!')
  .command('toPng', 'Scrapes a website and saves some screenshot of the Webpage. Be sure to Hack the Js File in app/ScraperToJson!')
  .command('login', 'Logs a user in to codelighters.com using their credentials!')
  .help().argv;

//Fetch cli command...
const Command = YargsArgV._[0];

//Cli commands...
(async () => {
  if (Command === 'scrapeBasic') {
      BasicScraper.scrape();
  } else if (Command === 'scrapeWithHeaders') {
      BasicScraper.scrapeWithHeaders();
  } else if (Command === 'toJson') {
      ScraperToJson.toJson();
  } else if (Command === 'toPng') {
    await ScraperToJson.toPng();
  } else if (Command == 'login') {
    await AuthenticationScraper.login();
  } else {
    console.log('Command not found...');
  }
})();
