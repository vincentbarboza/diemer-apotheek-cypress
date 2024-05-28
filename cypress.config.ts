import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fo6gyp',
  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
    },
  },
});
