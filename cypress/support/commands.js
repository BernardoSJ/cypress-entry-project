// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import PimPage from '../pages/PimPage';

const loginPage = new LoginPage();
const pimPage = new PimPage();
const dashboardPage = new DashboardPage();


Cypress.Commands.add("login", (user, password) => {
    loginPage.visit()
    loginPage.getUsernameField().type(user)
    loginPage.getPasswordField().type(password)
    loginPage.getButton().click()
})

Cypress.Commands.add("createEmployee", (firstName, lastName) => {
    pimPage.getAddButton().click()
    if(firstName != ""){
        pimPage.getFirstNameField().type(firstName)
    }
    pimPage.getLastNameField().type(lastName)
    pimPage.getSubmitButton().click()
})

Cypress.Commands.add("searchUser", (user) => {
    dashboardPage.getPimOption().click()
    pimPage.getSearchUserName().type(user)
    cy.wait(5000)
    pimPage.getSubmitButton().click()
    pimPage.getFirstTableRow().should("be.visible")
})

Cypress.Commands.add("modifyUserdata", (firstName, lastName) => {
    pimPage.getFirstNameField().clear()
    pimPage.getFirstNameField().type(firstName)
    pimPage.getLastNameField().clear()
    pimPage.getLastNameField().type(lastName)
    pimPage.getSubmitButton().click()
    cy.wait(5000)
    cy.searchUser(firstName + " " + lastName)
    pimPage.getCellFirstName().should("contain", firstName)
    pimPage.getCellLastName().should("contain", lastName)

    //Since we are not using this data anymore we can delete it
    pimPage.getDeleteButton().click()
    pimPage.getYesDeleteButton().click()
    pimPage.getFirstTableRow().should("not.exist")
})

Cypress.Commands.add("logOut", () => {
    dashboardPage.getUserDropdown().click()
    cy.wait(5000)
    dashboardPage.getLogoutOption().click()
    loginPage.getUsernameField().should("be.visible")
})