import { defineConfig } from "cypress";
require('dotenv').config();

export default defineConfig({
  projectId: process.env.CYPRESS_PROJECT_ID,
  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
    },
  },
});
