Disable eslint rules
You can disable specific rules per file, for a portion of a file, or for a single line.

Disable the cypress/no-unnecessary-waiting rule for the entire file by placing this at the start of the file:

/* eslint-disable cypress/no-unnecessary-waiting */
Disable the cypress/no-unnecessary-waiting rule for only a portion of the file:

it('waits for a second', () => {
  ...
  /* eslint-disable cypress/no-unnecessary-waiting */
  cy.wait(1000)
  /* eslint-enable cypress/no-unnecessary-waiting */
  ...
})
Disable the cypress/no-unnecessary-waiting rule for a specific line:

it('waits for a second', () => {
  ...
  cy.wait(1000) // eslint-disable-line cypress/no-unnecessary-waiting
  ...
})
You can also disable a rule for the next line:

it('waits for a second', () => {
  ...
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(1000)
  ...
})
For more, see the ESLint rules documentation.