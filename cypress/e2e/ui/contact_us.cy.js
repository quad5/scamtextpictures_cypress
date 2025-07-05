import { generateRandomStrings } from "../../libs/utils"

describe('Contact Us Spec', () => {

  it('submits contact us form successfully', () => {
    const description = generateRandomStrings(5)
    const summary = generateRandomStrings(8)
    cy.visit('/contact-us')
    cy.get('.description').type(description)
    cy.get('.summary').type(summary)
    cy.get('.submit').click()
    cy.get('.success_alert')
  })
})