describe("Module 1 - Authentication", () => {
 
  beforeEach(() => {
    cy.visit("/auth/login")
  })

  it("Validate Login using correct credentials", () => {
    cy.login("Admin", "admin123")
    cy.url().should('contain', "/dashboard/index")
    cy.get('.oxd-userdropdown').should("be.visible")
  })

  it("Validate Login using incorrect credentials", () => {
    cy.login("Admin1", "admin123")
    cy.url().should('not.contain', "/dashboard/index")
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").contains("Invalid credentials")
  })

  it("Validate Required Files in Login Form", () => {
    cy.get('.oxd-button').click()
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").eq(0).should("be.visible")
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").eq(1).should("be.visible")
  })

  it("Validate Forgot Password Link Works", () => {
    cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
    cy.url().should('contain', "/auth/requestPasswordResetCode")
    cy.xpath("//button[@class='oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset']").should("be.visible")
  })

})