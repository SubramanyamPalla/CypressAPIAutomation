/// <reference types='cypress' />

describe("API PUT Call Automation",()=>{

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
          Cypress.stop()
        }
      })

    it('Post call',()=>{
        cy.section("Post call example")

         function generatEmail(){

            const randomstring=Math.random().toString(36).substring(2,10)
            const emailID =randomstring+'@gmail.com'
            return emailID

        }

        function randomStringResult(){
            const randomString= Math.random().toString(36).substring(2,7);
            return randomString
        }

        cy.fixture('users').then((userinputs)=>{

            userinputs.email=generatEmail()
            cy.section("Create Users with Post method")
           
            cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",

            headers :{
                Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
            },
            body: userinputs

         }).then((response)=>{
            expect(response.status).to.equal(201)

            let userid=response.body.id

            cy.log(userid)

            cy.section("Update User with PUT method by taking First reqest response as input")
            cy.request({

                method:'PUT',
                url:"https://gorest.co.in/public/v2/users/"+userid,

                headers :{
                    Authorization:'Bearer a08ad01ca347b6972e9686c9306bb5497379d715388a0c4d603f0483b27cba45'
                },
                body: {
                    "name": randomStringResult(),
                    "email": generatEmail()
                }

            }).then((response)=>{
                //Cypress.stop()
                expect(response.status).to.equal(200)

                expect(response.body.name).to.not.be.null

                expect(response.body.email).to.not.be.null
            })

        })
    })

 })

})