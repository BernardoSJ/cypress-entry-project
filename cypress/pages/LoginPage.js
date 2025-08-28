class LoginPage {
    
    visit(){
        cy.visit("/");
    }

    getUsernameField() {
        return cy.xpath("//input[@name='username']");
    }

    getPasswordField(){
        return cy.xpath("//input[@name='password']");
    }

    getButton(){
        return cy.get(".oxd-button");
    }

    getErrorMessage(){
        return cy.xpath("//*[contains(@class, 'error-message') or contains(@class,'alert-content-text')]")
    }

    getForgotPasswordLink(){
        return cy.xpath("//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']")
    }

}

export default LoginPage;