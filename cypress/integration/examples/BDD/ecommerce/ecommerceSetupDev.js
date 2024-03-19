import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Bewkoof shoping Website", function () {
    cy.visit('https://www.bewakoof.com/');
});

// Search product category
function handleWzrkAlert() {
    cy.get('.wzrk-alert').then(($alert) => {
        if ($alert.length > 0) {
            cy.get('.wzrk-alert').within(() => {
                cy.get('#wzrk-cancel').click();
            });
        }
        // } else {
        //     cy.get('.searchInput').type('t-shirt');
        //     cy.wait(4000);
        //     cy.contains('Men').click();
        // }
    });
}
When('Search product category', () => {
    cy.wait(4000)

            handleWzrkAlert();
    cy.get('.searchInput').type('t-shirt');
        cy.wait(4000);
        cy.contains('Men').click();
        });



// Navigate to PLP
When('Navigate to PLP', () => {
    cy.contains("Men's Black Life is a Trip Graphic Printed Oversized T-shirt").should('be.visible');
    cy.contains("Men's Black Life is a Trip Graphic Printed Oversized T-shirt").click();
});

// Add product in Cart from PDP
Then('Add product in Cart from PDP', () => {
    cy.contains("Men's Black Life is a Trip Graphic Printed Oversized T-shirt").should('be.visible');
    cy.contains("Please enter a valid pincode.").should('be.visible');
    cy.get('.codCheckForm > input').type('454001');
    cy.contains('Check').click();
    cy.wait(3000);
    cy.get('#testSizes_M').click();
    cy.contains('ADD TO BAG').click();

});
