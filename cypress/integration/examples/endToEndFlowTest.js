/// <reference types="Cypress" />
import EndtoEndFlow from "../pageObject/EndtoEndFlow";

describe("End to End Flow - Test suite", function () {
    it('Testing End to End Flow', function () {
        const endToEndFlow = new EndtoEndFlow();
        cy.visit('https://www.bewakoof.com/');
        endToEndFlow.EndtoEndFlow();
    });
});
