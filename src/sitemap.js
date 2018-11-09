var sm = require('sitemap')
    , fs = require('fs');
var urls = [
  {
    "url": "/"
  },
  {
    "url": "/404"
  },
  {
    "url": "/offres"
  },
  {
    "url": "/fonctionnalites"
  },
  {
    "url": "/monnaielocale"
  },
  {
    "url": "/monkeymoney"
  },
  {
    "url": "/contactez_nous"
  }
]

function createSiteMap(path){
  var sitemap = sm.createSitemap({
      hostname: path,
      cacheTime: 600000,  //600 sec (10 min) cache purge period
      urls: urls
  });
  fs.writeFileSync("build/sitemap.xml", sitemap.toString());
  return true
}
exports.createSiteMap = createSiteMap
