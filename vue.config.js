
const fs = require('fs')
module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  },
    // devServer: {  
    //   https: true,
    //   port: 8080,
    //   key: fs.readFileSync('./data/cert/dev.scribble.key'),
    //   cert: fs.readFileSync('./data/cert/dev.scribble.crt')
    // } 
};
