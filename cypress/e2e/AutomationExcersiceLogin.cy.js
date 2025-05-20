
describe("LoginPage Automation",function(){

beforeEach(function() {

    cy.fixture("loginPageTestData").then(function (data){

        this.data=data
      

    }) })

    it("Login to site with valid credentials",function(){
        cy.visit(this.data.baseURL)
        cy.LoginPage(this.data.userName,this.data.password)
    })

})


