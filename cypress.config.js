const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  projectId: 'aomfpx',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    env:
    {
      home_page:"https://openweathermap.org/",
      resultInDetail_page:"https://openweathermap.org/city/"
    }
  }
},
);
