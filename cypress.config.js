const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,  
  video:false,
  e2e: {
    baseUrl: "http://stsbmtesmax3:8080/login/auth", 
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    saoPablo: 'http://stsbmtesmax3:8080/login/auth',
    lyon: 'http://stsbmtesmax2:8080/login/auth',
    BMC: 'http://stsbmcesmax2:8080/login/auth'
  }
});
