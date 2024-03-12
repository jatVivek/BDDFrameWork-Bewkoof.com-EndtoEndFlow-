class PLP{
    GettingProduct(){
        return cy.get('a[href="/p/mens-blue-pirate-crew-graphic-printed-oversized-t-shirt"]');
    }
    ValidatingProduct(){
        return cy.contains("Men's Blue Pirate Crew Graphic Printed Oversized T-shirt").should('be.visible');
    }
    GenderDropdown(){
        return cy.contains('gender');
    }
}
export default PLP;