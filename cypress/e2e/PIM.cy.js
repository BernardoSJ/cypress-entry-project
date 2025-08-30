import DashboardPage from '../pages/DashboardPage';
import PimPage from '../pages/PimPage';

describe("Module 2 - PIM", () => {
    const dashboard = new DashboardPage();
    const pim = new PimPage();
    let userName; 

    beforeEach(() => {
        cy.visit("/");
        cy.fixture("loginData.json").then(({ valid }) => {
            cy.login(valid.username, valid.password)
            dashboard.getPimOption().click()
        });

        cy.fixture("employeeData.json").then(({ valid }) => {
            userName = valid.firstname + " " +valid.lastname
        });
    })

    it("Create New Employee With Correct Values", () => {
        cy.fixture("employeeData.json").then(({ valid }) => {
            cy.createEmployee(valid.firstname, valid.lastname)
            pim.getUserTitle().should("be.visible").and("contain", valid.firstname + " " + valid.lastname)
        });
        
    })

    it("Validate Created Employee Is Showing In The List", () => {
        cy.searchUser(userName)
    })

    it("Modify Existing Employee Data", () => {
        cy.searchUser(userName)
        pim.getEditButton().click()
        cy.fixture("employeeData.json").then(({ modified }) => {
            cy.modifyUserdata(modified.firstname, modified.lastname)
        });
    })

    it("Create Employee Without Name And Validate Error Message", () => {
        cy.fixture("employeeData.json").then(({ invalid }) => {
            cy.createEmployee(invalid.firstname, invalid.lastname)
            pim.getErrorMessage().should("be.visible").and('contain', 'Required')
        });
    })
})