import * as cheerio from 'cheerio';

declare var global: any;
// declare var cheerio_gasify: any;
global.window = []; // for cheerio

global.fetch = (): void => {
  // var cheerio: CheerioAPI = cheerio_gasify.require('cheerio');

  var response = UrlFetchApp.fetch('https://developers.google.com/apps-script/');
  var $ = cheerio.load(response.getContentText());

  var title = $('title').text();
  console.log(title);
};
