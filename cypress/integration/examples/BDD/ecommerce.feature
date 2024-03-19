Feature: End to End validation on Bewkoof


    
    application Regression

    Scenario: Products delivery on Bewkoof
    Given I open Bewkoof shoping Website
    When Search product category
    And Navigate to PLP
    Then Add product in Cart from PDP
    