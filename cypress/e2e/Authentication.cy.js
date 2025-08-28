import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';


describe("Module 1 - Authentication", () => {
  const login = new LoginPage();
  const dashboard = new DashboardPage();

  beforeEach(() => {
    cy.visit("/")
  })

  it("Validate Login using correct credentials", () => {
    cy.fixture("loginData.json").then(({ valid }) => {
      cy.login(valid.username, valid.password)
      cy.url().should('contain', "/dashboard/index")
      dashboard.getUserDropdown().should("be.visible")
    });
  })

  it("Validate Login using incorrect credentials", () => {
    cy.fixture("loginData.json").then(({ invalid }) => {
      cy.login(invalid.username, invalid.password)
      cy.url().should('not.contain', "/dashboard/index")
      login.getErrorMessage().should("be.visible").and('contain', 'Invalid credentials')
    });

  })

  it("Validate Required Files in Login Form", () => {
    login.getButton().click()
    login.getErrorMessage().should("be.visible").and('contain', 'Required')
  })

  it("Validate Forgot Password Link Works", () => {
    login.getForgotPasswordLink().click()
    cy.url().should('contain', "/auth/requestPasswordResetCode")
    cy.xpath("//button[@class='oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset']").should("be.visible")
  })

})