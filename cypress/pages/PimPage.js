class PimPage {

    getAddButton(){
        return cy.xpath("//button[text()=' Add ']");
    }

    
}

export default PimPage;