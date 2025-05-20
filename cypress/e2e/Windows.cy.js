/// <reference types='cypress' />



describe("Windows handling",()=>{

    it('Windows handle using stub mehtod',()=>{
        cy.section('Windows handling')
        cy.once('uncaught:exception',()=>false)
        cy.visit('https://www.tutorialspoint.com/selenium/practice/browser-windows.php')

        cy.window().then((win)=>{
            // let url=win.prop('href')
            // cy.visit(url)
            cy.stub(win,'open').as('windowopened')
           
        })
        cy.get('body main button:nth-child(3)').click({force:true})

        cy.get('@windowopened').should('be.calledWith','new-window.php')
        cy.get('@windowopened').should('be.called');
        cy.get('@windowopened').then((ele)=>{

        cy.get('.mb-3.fw-normal.border-bottom.text-left.pb-2.mb-4').should('have.text','Browser Windows')
        })
        
    })

    it.only('Windows handling',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        
        cy.window().then((win)=>{
            cy.stub(win,'open').as('windowOpen')
        })
        cy.get('#openwindow').click({force:true})
       cy.get('@windowOpen').should('be.calledWith','https://www.letskodeit.com/courses')
       cy.visit('https://www.letskodeit.com/courses')
       cy.get('.dynamic-heading.margin-bottom-20').should('have.text','All Courses')
       cy.contains('Cypress.io Test Automation').click()
       cy.url().should('include','/cypress-automation-framework')
    })

})