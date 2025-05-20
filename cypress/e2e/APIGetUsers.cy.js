
/// <reference types="cypress" />

describe("Cypress API Automation",()=>{

    it('Get All users details',()=>{
        cy.section("Get the All user Details")
        cy.request({
            method: 'Get',
            url: 'https://gorest.co.in/public/v2/users',
            Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
        }).then((response)=>{
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
        })
    })

    it("Get single user details",()=>{
        cy.section("Get the Single user Details")
        cy.request({
            method:'Get',
            url:'https://gorest.co.in/public/v2/users/7749942',
            Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45',
           
        }).then((response)=>{
            //This well dispaly the response details in test runner
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal(7749942)
            expect(response.body.gender).to.eq('female')
        })
    })

    it("Get User-invalid user",()=>{
        cy.section("Verify the Invalid user Details")
        cy.request({
            method:'Get',
            url:'https://gorest.co.in/public/v2/users/123',
            headers: {
                 Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
             },
            failOnStatusCode: false
        }).then((response)=>{
            //This well dispaly the response details in test runner
            cy.log(JSON.stringify(response))
            expect(response.status).to.equal(404)
            
        })
    })

    
})