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
        return cy.get('.oxd-button');
    }

    getErrorMessage(){
        return cy.get('.error-message');
    }

}