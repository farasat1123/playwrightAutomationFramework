# Playwright Automation Framework

This project contains automated tests for file downloads using Playwright with Behavior-Driven Development (BDD) practices and Cucumber.

## Project Structure

The project is organized as follows:

playwright-project/ ├── features/ │ ├── download.feature │ └── step_definitions/ │ └── download.steps.js │ └── locators/ │ └── downloadLocator.js ├── playwright.config.js ├── package.json ├── package-lock.json ├── reporter.config.js ├── cucumber.js


- **features/**: Contains BDD feature files and corresponding step definitions.
  - **download.feature**: BDD feature file describing the test scenarios for file downloads.
  - **step_definitions/**: Contains JavaScript files defining the step implementations for the scenarios in the feature files.
    - **download.steps.js**: Step definitions for the file download scenarios.
  - **locators/**: Contains locator files used in the step definitions.
    - **downloadLocator.js**: Locators for identifying elements on the page.
- **playwright.config.js**: Configuration file for Playwright.
- **package.json**: Contains project dependencies and scripts.
- **package-lock.json**: Ensures consistent dependency versions.
- **reporter.config.js**: Configuration file for the test reporter.
- **cucumber.js**: Configuration file for Cucumber.

## Installing Dependencies

To get started with the project, follow these steps:

### Install Node.js

- Download the latest version of Node.js from [Node.js official website](https://nodejs.org/).
- Install Node.js, which will also install `npm` (Node Package Manager).

### Clone the Repository

Clone the project repository using the following command:

```bash
git clone https://github.com/farasat1123/playwrightAutomationFramework.git
cd playwrightAutomationFramework
```

### Installing Project Dependencies

Navigate to the project directory and install the required npm packages:

```bash
npm install
```

This command will install Playwright, Cucumber, and other dependencies specified in package.json.

### Install Playwright Browsers
Playwright requires browser binaries to be installed. Run the following command to install them:
```
npx playwright install
```

### Necessary Cucumber Libraries
- @cucumber/cucumber: This is the core Cucumber library for defining and running tests.
- @cucumber/pretty-formatter: Provides a more readable format for test output.
- @playwright/test: Playwright’s own testing framework which integrates well with Cucumber.
- @cucumber/cucumber-html-reporter: For generating HTML reports from Cucumber test results.

### Installation Instructions
Add the following dependencies to your package.json file or install them directly using npm:
```
npm install @cucumber/cucumber @cucumber/pretty-formatter @playwright/test @cucumber/cucumber-html-reporter
```

### Set Up VS Code
- Open VS Code.
- Navigate to File > Open Folder and select the project directory.
### Install VS Code Extensions
For a better development experience, install the following VS Code extensions:
- JavaScript (ES6) code snippets: Provides code snippets for JavaScript.
- Cucumber (Gherkin) Full Support: Provides syntax highlighting and autocompletion for Cucumber feature files.
- Playwright Test for VS Code: Adds support for Playwright testing.

### Running the Tests
You can run the tests and generate reports using the following command:
```
npm run test:full
```

This command will execute all tests and generate both JSON and HTML reports.

### Viewing Test Reports
After running the tests, you can find the generated reports in the reports directory:
```
JSON Reports: reports/cucumber_report.json
HTML Reports: reports/cucumber_report.html
You can open the HTML report in a web browser to view detailed test results.
```

### Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Ensure that your changes are well-tested and documented.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contact
For any questions or feedback, please contact Farasat Ali Aziz.
