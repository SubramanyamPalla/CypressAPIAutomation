/// <reference types='cypress'/>
//import add_TO_Cart from '../Config/add_TO_Cart.json'
import addnewaddress from '../Config/addNewAddress.json'

//import deleteAddressPayload from '../Config/deleteAddressPayload.json'

describe("API automation",()=>{

        beforeEach(function (){
            cy.wrap('auth').as("bearerTocken")
           
        })

    it("Login API Automation",()=>{

        let payload=
            {
                "email": "test114@yopmail.com",
                "password": "Test@123"
            }
        cy.request({
            method: 'POST',
            url: 'https://interflora-uk-tst.interflorabeta.co.uk/api/auth/login/customer',

            headers:{
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmMmI5YjdhMC00ZmQ2LTRiZDItODMxMi0yMTg5YTU2YjRkYmUiLCJhbm8iOmZhbHNlLCJybGUiOiJhY2NvdW50IiwidGtuIjoiV2FpSTdUWmhKQWhJT001MGE4cHBtZDUzS3YyTGhVOVAiLCJleHAiOjE3NDE3NzIyNzYsImlhdCI6MTc0MTU5OTUzNn0.w5gwAkucckcgIaxZG7RyyTfaaY9F7yBtLUIe_VDkgrI'
            },

            body:payload
                
        }).then((response)=>{
            let auth=response.body.authToken
            //cy.wrap('auth').as("bearerTocken")
            cy.log(JSON.stringify(auth))
            expect(response.status).to.equal(200)

            cy.request({
                method: 'POST',
                url: 'https://interflora-uk-tst.interflorabeta.co.uk/api/graphql',

                headers:{
                    Authorization: 'Bearer ' + auth
                },

                body: addnewaddress
            }).then((response)=>{
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.equal(200)
                let addressID=response.body.data.addAddress.addressId
                cy.log(addressID)
                expect(response.body.data.addAddress.addressId).to.exist
                expect(response.body.data.addAddress.addressId).to.equal(addressID)

          
    cy.fixture('deleteAddressPayload').then((deleteaddress)=>{
      
        deleteaddress.variables.input.addressId= addressID
        cy.log(addressID)

            cy.request({
                method: 'POST',
                url: "https://interflora-uk-tst.interflorabeta.co.uk/api/graphql",
                headers:{
                    Authorization: 'Bearer ' + auth
                },
                body: deleteaddress
            }).then((response)=>{
                const deleteAddressID=response.body.data.removeAddress.id

                expect(response.body.data.removeAddress.id).not.null

            })
        })

        })
     })
    })

})

