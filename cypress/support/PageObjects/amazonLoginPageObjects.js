

class amazonLoginPageObjects {

    signIn () {
        return cy.xpath("(//a[@data-nav-role='signin'])[1]")
    }

    signIn2() {
        return cy.xpath("(//a[@data-nav-role='signin'])[2]")
    }

    enterMobileNumberOrEmail(){
        return cy.get("input#ap_email_login")
    }
}


const amazonLogin = new amazonLoginPageObjects()


Cypress.Commands.add("AmazonSignInRedirect",()=>{

    amazonLogin.signIn().should('be.visible')
    amazonLogin.signIn2().click({force:true})
    cy.url().should('include','/ap/signin?')
})

Cypress.Commands.add("EnterLoginDetails",function(){
    amazonLogin.enterMobileNumberOrEmail().clear()
    amazonLogin.enterMobileNumberOrEmail().should('be.exist')
})


export default amazonLoginPageObjects
