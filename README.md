# Diemer Apotheek Cypress

This repository contains end-to-end tests for the Diemer Apotheek project using Cypress.

## Cypress

We always use the latest version of Cypress to ensure we have the latest features and bug fixes.

## Integrations

- **GitHub Actions**: Tests are automatically run on each push or pull request.
- **Cypress Cloud**: Detailed test results are available on Cypress Cloud.

## Configuration

### ESLint

Specific rule for Cypress:
- `"cypress/no-pause": "error"`

### TypeScript

Key configuration:
- Target: `es5`
- Libraries: `dom`, `es5`, `es2015`
- Types: `cypress`
- Strict settings enabled

## Installation

- **Clone the repository**:
  ```bash
  git clone https://github.com/vincentbarboza/diemer-apotheek-cypress.git
  cd diemer-apotheek-cypress

- **Install dependencies**:
  ```bash
  npm install

## Scripts

- **Open Cypress**:
  ```bash
  npm run cypress-open

- **Run Cypres headlesss**:
  ```bash
  npm run cypress-headless

- **Run eslint**:
  ```bash
  npm run eslint-cypress


