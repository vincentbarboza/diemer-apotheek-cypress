import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '${{ secrets.PROJECT_ID }}',
  e2e: {
    baseUrl: 'https://diemerapotheek.nl/',
    setupNodeEvents(on, config) {
    },
  },
});
