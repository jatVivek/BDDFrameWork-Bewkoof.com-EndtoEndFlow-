class PDP{
    ValidatingProductName(){
        return cy.contains("Men's Blue Pirate Crew Graphic Printed Oversized T-shirt").should('be.visible');
    }
    ValidatingPincodeError(){
        return cy.contains("Please enter a valid pincode.").should('be.visible');
    }
    PinCode(){
        return cy.get('.codCheckForm > input');
    }
    CheckButton(){
        return cy.contains('Check');
    }
    ValidatingEnteredPincode(){
        return cy.contains('Delivering to');
    }
    ChangeButton(){
        return cy.get('button.changeLabelText');
    }
    SizeButton(){
        return cy.get('#testSizes_M');
    }
    Rating(){
        return cy.get('span.rtng');
    }
    AddToBagButton(){
        return cy.contains('ADD TO BAG');
    }
    BagButton(){
        return cy.get('i.icon_bag');
    }

}
export default PDP;