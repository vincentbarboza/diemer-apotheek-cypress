import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'a7bq2k',
  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
    },
  },
});
