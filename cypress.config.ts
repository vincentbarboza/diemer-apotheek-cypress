import { defineConfig } from "cypress";
const { cloudPlugin } = require("cypress-cloud/plugin");

export default defineConfig({
  defaultCommandTimeout: 10000,

  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
    },
  },
});
