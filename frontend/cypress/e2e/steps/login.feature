Feature: User want to login into the site with valid data and Invalid data

  Background:
    Given User navigate to the Sign-in page

  Scenario: User try to sign-in with valid data
    When User entered a valid data in the form
    And click on the Sign In button
    Then User should be redirected to home page
    When User click on button that it's name is user username
    And click on Sign out
    Then User should be redirected to home page signout

  Scenario: User try to sign-in with invalid data
    When User entered an invalid data in the form
    And click on the Sign In button also
    Then User should be see error message
