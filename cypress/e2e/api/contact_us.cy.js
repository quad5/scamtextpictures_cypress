import { generateRandomStrings } from "../../libs/utils"

describe('Contact Us Spec', () => {
    it('creates contact us successfully via API', () => {
        const description = generateRandomStrings(5)
        const summary = generateRandomStrings(8)
        const data = {
            'description': description,
            'summary': summary
        }

        cy.request('POST', 'api/jira/createTask', data).then(
            (response) => {
                console.log("__response", response)
                expect(response.status).to.eq(200)
            })
    })
})