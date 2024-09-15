Feature: CSV Download

  Scenario: Download a CSV file
    Given I am on the table data download demo page
    When I click the CSV download button
    Then the file should be downloaded successfully
    And the file content should be correct
