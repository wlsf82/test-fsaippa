const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://cbs-qa.na.westcongrp.com:8002/#!/',
    //setupNodeEvents(on, config){
      //config.env = config.env || {}
   //   on('after:run', (results) => {
   //     console.log(results);})              
          }}
        )
        
      
    
