const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://katalon-demo-cura.herokuapp.com",
    setupNodeEvents(on, config) {},
  },
});
