import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// USER TRIES TO SIGNIN WITH VALID DATA
Given("User navigate to the Sign-in page", () => {
  cy.visit("/signin");
});

When("User entered a valid data in the form", () => {
  cy.get("[data-testid=email]")
    .clear({ force: true })
    .type("admin@example.com");
  cy.get("[data-testid=password]").clear({ force: true }).type("123456");
});

When("click on the Sign In button", () => {
  cy.get("[name=submit]").click();
});

Then("User should be redirected to home page", () => {
  cy.url().should("eq", "http://192.168.1.4:5173/");
});

// USER SIGNED OUT

When("User click on button that it's name is user username", () => {
  cy.get("[data-testid=username-dropdown]").click();
});
When("click on Sign out", () => {
  cy.get("[data-testid=signout]").click();
});

Then("User should be redirected to home page signout", () => {
  cy.url().should("eq", "http://192.168.1.4:5173/#signout");
});

// USER TRIES TO SIGNIN WITH INVALID DATA
When("User entered an invalid data in the form", () => {
  cy.get("[data-testid=email]")
    .clear({ force: true })
    .type("admin@example.com1");
  cy.get("[data-testid=password]").clear({ force: true }).type("123456");
});

When("click on the Sign In button also", () => {
  cy.get("[name=submit]").click();
});

Then("User should be see error message", () => {
  cy.get("div").should("contain", "Invalid email or password");
});
