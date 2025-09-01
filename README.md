# Cypress Entry Project

This repository is my first practice project using **Cypress** as an automation tool.  
It focuses on automating tests for the demo application: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com).

## 🚀 Running the Project

To run the tests locally:

1. Clone or download this repository.
2. Open a terminal in the project folder.
3. Install dependencies (only the first time):
   ```bash
   npm install
   ```
4. Run tests in interactive mode:
   ```bash
   npx cypress open
   ```
5. Run tests in headless mode (with report generation):
   ```bash
   npm run cy:full
   ```

## 📊 Test Reports

The project uses Mochawesome for generating test reports.

After running:
   
Reports will be available under:
   ```bash
   cypress/reports
   ```
Each report is generated with a **timestamped folder** to keep executions separate, It will include an individual report combining all the modules tested.

Example:

<img width="1427" height="773" alt="image" src="https://github.com/user-attachments/assets/a5b65621-3841-4185-a1bc-f3b46e2d645b" />


## ⚙️ GitHub Actions CI

This project includes a GitHub Actions workflow to run Cypress tests in CI/CD.

* Workflow name: Cypress Tests
* Trigger: Manual (workflow_dispatch)
* Outputs:
   * Test results
   * Combined **Mochawesome HTML report** (uploaded as an artifact)

## ✅ Test Coverage

Currently automated modules:
* **Login**
* **Employee Management (PIM)**
     * Add Employee
     * Verify Employee in List
     * Edit Employee Data
     * Validation for missing mandatory fields
* **Logout**

More modules can be added progressively (e.g., Admin, Dashboard)


## 📂 Project Structure

```text
cypress/
  ├── fixtures/      # Test data (e.g., credentials, JSON data)
  ├── pages/         # Page Object Models for reusability
  ├── e2e/           # End-to-end test specifications
  └── support/       # Custom commands and global configurations
cypress.config.js    # Cypress configuration file
```

## 📌 Future Improvements

This project is always evolving. Upcoming updates include:
* GitHub Pages reports: View the latest test reports directly in your browser.
* Expanded test coverage: More system modules will be tested.
* CI/CD integration: Easier tracking and monitoring of test runs.
