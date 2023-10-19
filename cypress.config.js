const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://url-qa.com:8080/#!/',
    //setupNodeEvents(on, config){
      //config.env = config.env || {}
   //   on('after:run', (results) => {
   //     console.log(results);})              
          }}
        )
        
      
    
