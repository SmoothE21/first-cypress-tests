//"Passing test" example
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    })
})

//"Failing test" example
describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(false)
    })
})

//"Visit a page" and "query element" example
describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
})

//"Click an element" example
describe('My First Test', () => {
    it('clicks the link "type"', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    })
})

//"Make an assertion" example
describe('My First Test', () => {
    it('clicking "type" navigation to a new url', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    })
})

//"Gets, types, and asserts" example
describe('My First Test', () => {
    it('Gets, types, and asserts', () => {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com')
    })
})

//"Pause" example
describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})