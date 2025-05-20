/// <reference types="cypress" />

describe("Delete API Automaiton In Cypress",()=>{

    function generateRandomEmail(){

        const randomString=Math.random().toString(36).substring(2,10)
        const email =randomString+'@yopmaili.com'
        return email
    }

    it("Delete User",()=>{

        let emailAddress=generateRandomEmail()
        cy.log("****** EmailID is "+ emailAddress)

        let payload= {
            "name": "Test User",
            "email": emailAddress,
            "gender": "male",
            "status": "active"
    }
    cy.request({
        method: 'Post',
        url: "https://gorest.co.in/public/v2/users",
        headers:{
        Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
    },
    body:payload

    }).then((response)=>{
        expect(response.status).to.eq(201)
        expect(response.body).has.property("name","Test User")
    })

    })
})