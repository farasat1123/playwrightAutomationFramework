const { Given, When, Then, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const parse = require('csv-parse/sync').parse;

let page, browser, context;
const downloadPath = 'C:/Users/FarasatAliAziz/Downloads';
const expectedFileName = 'Selenium Grid Online  Run Selenium Test On Cloud.csv';

Given('I am on the table data download demo page', { timeout: 120000 }, async function () { // Increased timeout
  try {
    console.log('Launching browser...');
    browser = await chromium.launch({ headless: false }); // Launch browser in non-headless mode for debugging
    context = await browser.newContext({ 
      acceptDownloads: true
    });
    page = await context.newPage();
    console.log('Navigating to the page...');
    await page.goto('https://www.lambdatest.com/selenium-playground/table-data-download-demo', { timeout: 60000 }); // Increased timeout to 60 seconds
    console.log('Page loaded successfully.');
  } catch (error) {
    console.error('Error during browser setup or navigation:', error);
    throw error;
  }
});

When('I click the CSV download button', { timeout: 30000 }, async function () { // Increased timeout
  try {
    console.log('Setting up download listener...');
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.locator('css=#example_wrapper > div.dt-buttons > a.dt-button.buttons-csv.buttons-html5').click()
    ]);
    const filePath = path.join(downloadPath, expectedFileName);
    console.log('Saving downloaded file to:', filePath);
    await download.saveAs(filePath);
    console.log('File saved successfully.');
  } catch (error) {
    console.error('Error during file download:', error);
    throw error;
  }
});

Then('the file should be downloaded successfully', function () {
  try {
    const filePath = path.join(downloadPath, expectedFileName);
    if (fs.existsSync(filePath)) {
      console.log('File downloaded successfully:', filePath);
    } else {
      throw new Error('File not found!');
    }
  } catch (error) {
    console.error('Error checking file download:', error);
    throw error;
  }
});

Then('the file content should be correct', function () {
  try {
    const filePath = path.join(downloadPath, expectedFileName);
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath);
      // Parse CSV file content
      const records = parse(fileContent, {
        columns: true, // Assuming your CSV has headers
        skip_empty_lines: true
      });
      console.log('File content preview:', records);
      // Add validation logic here to check the content
    } else {
      throw new Error('File not found!');
    }
  } catch (error) {
    console.error('Error checking file content:', error);
    throw error;
  }
});

After(async function () {
  try {
    if (browser) {
      console.log('Closing browser...');
      await browser.close();
      console.log('Browser closed successfully.');
    }
  } catch (error) {
    console.error('Error closing browser:', error);
    throw error;
  }
});
