# Cypress Entry Project

This repository is my first practice project using **Cypress** as an automation tool.  
It focuses on automating tests for the demo application: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com).

## Running the Project

To run the tests locally:

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies (only the first time):
   ```bash
   npm install
4. Install dependencies (only the first time):
   ```bash
   npx cypress open

## Test Coverage
Currently, the project includes automated tests for the Login module.
More modules (employee management, logout, etc.) will be added progressively.

## Project Structure

```text
cypress/
  ├── fixtures/      # Test data (e.g., credentials, JSON data)
  ├── pages/         # Page Object Models for reusability
  ├── e2e/           # End-to-end test specifications
  └── support/       # Custom commands and global configurations
cypress.config.js    # Cypress configuration file
