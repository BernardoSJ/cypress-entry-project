class DashboardPage {

    getUserDropdown(){
        return cy.get(".oxd-userdropdown");
    }

    getPimOption(){
        return cy.xpath("//a[contains(@href, 'viewPim')]")
    }

}

export default DashboardPage;