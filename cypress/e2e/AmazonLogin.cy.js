
describe("AmazonLoginAutomation",function(){

    it("AmazonLogin",function(){

        cy.visit("https://www.amazon.in/")
        cy.AmazonSignInRedirect()

    })

    it("Pass login Details",function(){
        cy.visit("https://www.amazon.in/")
        cy.AmazonSignInRedirect()
        cy.EnterLoginDetails()
    })
})