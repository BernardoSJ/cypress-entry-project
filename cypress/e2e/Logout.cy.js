describe("Module 3 - Logout", () => {


    beforeEach(() => {
        cy.visit("/");
        cy.fixture("loginData.json").then(({ valid }) => {
            cy.login(valid.username, valid.password)
        });

    })

    it("Logout And Validate It Comes Back To Login Page", () => {
        cy.logOut()
    })

    it("Validate After Logout User Is Not Able To Access To Internal Pages", () => {
        cy.logOut()
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
        cy.url().should('not.contain', "/dashboard/index")
    })

})