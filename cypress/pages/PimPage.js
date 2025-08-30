class PimPage {

    getAddButton(){
        return cy.xpath("//button[text()=' Add ']");
    }

    getFirstNameField(){
        return cy.xpath("//input[@name='firstName']");
    }

    getLastNameField(){
        return cy.xpath("//input[@name='lastName']");
    }

    getSubmitButton(){
        return cy.xpath("(//button[@type='submit'])[1]");
    }

    getUserTitle(){
        return cy.xpath("//div[@class='orangehrm-edit-employee-name']");
    }

    getSearchUserName(){
        return cy.xpath("(//input[@placeholder='Type for hints...'])[1]");
    }

    getFirstTableRow(){
        return cy.xpath("//div[@class='oxd-table-card']");
    }

    getEditButton(){
        return cy.xpath("//button/i[contains(@class, 'bi-pencil')]");
    }

    getDeleteButton(){
        return cy.xpath("//button/i[contains(@class, 'bi-trash')]");
    }

    getYesDeleteButton(){
        return cy.xpath("//button[contains(@class, 'label-danger')]");
    }

    getErrorMessage(){
        return cy.xpath("//span[contains(@class,'field-error')]");
    }

    getCellFirstName(){
        return cy.xpath("//div[@class='oxd-table-cell oxd-padding-cell'][3]");
    }

    getCellLastName(){
        return cy.xpath("//div[@class='oxd-table-cell oxd-padding-cell'][4]");
    }

}

export default PimPage;