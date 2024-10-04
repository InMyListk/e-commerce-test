import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// USER TRIES TO ADD FIRST ITEM TO CART
Given("User navigate to home page", () => {
  cy.visit("/");
});

When("User select first Item", () => {
  cy.wait(2000);
  cy.get("[data-testid=nike-slim-shirt]").click();
});

When("User should be redirected to Item page", () => {
  cy.url().should("eq", "http://192.168.1.4:5173/product/nike-slim-shirt");
});

When("User press addToCart button", () => {
  cy.get("[name=addToCart]").click();
});

Then("User should be redirected to cart page", () => {
  cy.url().should("eq", "http://192.168.1.4:5173/cart");
});
