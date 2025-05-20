/// <reference types="cypress" />

import payload from '../Config/payload.json'

describe("API Post Method Automation",()=>{

    function generateRandomEmail(){

        const randomString=Math.random().toString(36).substring(2,10)
        const email =randomString+'@yopmaili.com'
        return email
    }

    it('Post Method with JSON data',()=>{
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

    it("Post Method With Fixture data",()=>{

        let emailAddress=generateRandomEmail()
        cy.log("****** EmailID is "+ emailAddress)

        cy.fixture('users').then((responseData)=>{

            responseData.email=generateRandomEmail()

            cy.request({
                method: 'Post',
                url: "https://gorest.co.in/public/v2/users",
                headers:{
                Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
            },
            
            body: responseData

            }).then((response)=>{
                expect(response.status).to.eq(201)
                expect(response.body).has.property("name","Test User")
            })
        })       
    })

    it.only("Post method with Config file",()=>{

        payload.email=generateRandomEmail()
    
        cy.request({
            method: 'Post',
            url: "https://gorest.co.in/public/v2/users",
            headers:{
            Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
        },
        
        body: payload

        }).then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).has.property("name","Test User")
            expect(response.body).has.property('gender','male')
        })
    })
})