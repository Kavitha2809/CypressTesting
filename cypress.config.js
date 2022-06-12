const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 3000,
    chromeWebSecurity: false,
    viewportHeight: 900,
    viewportWidth: 1400,
    waitForAnimations: true,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
