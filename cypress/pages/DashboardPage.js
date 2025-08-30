class DashboardPage {

    getUserDropdown(){
        return cy.get(".oxd-userdropdown");
    }

    getPimOption(){
        return cy.xpath("//a[contains(@href, 'viewPim')]")
    }

    getLogoutOption(){
        return cy.xpath("//a[text()='Logout']")
    }


}

export default DashboardPage;