import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
