
class loginPageObjects {
//xpath value of username
userEmail(){
    return  cy.xpath("//input[@data-qa='login-email']")
}

userPassword(){
    return cy.get("input[data-qa='login-password']")
}

loginButton(){
    return cy.get("button[data-qa='login-button']")
}


}

const loginPage=new loginPageObjects()

Cypress.Commands.add('LoginPage',(email,password)=>{

    loginPage.userEmail().should('be.visible')

    loginPage.userEmail().type(email,{log:false})
    
    loginPage.userPassword().should('be.visible')

    loginPage.userPassword().type(password,{type:0})

    loginPage.loginButton().should('exist')

    loginPage.loginButton().click({force:true})

    cy.url().should('include','//automationexercise.com/')
})



export default loginPageObjects

