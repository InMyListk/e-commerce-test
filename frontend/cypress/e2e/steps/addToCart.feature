Feature: User want to add Items to Cart

  Scenario: User try to add item to cart
    Given User navigate to home page
    When User select first Item
    Then User should be redirected to Item page
    When User press addToCart button
    Then User should be redirected to cart page
