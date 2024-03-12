class Cart{
    FirstFreeDeliveryMessage(){
        return cy.contains('Yay! You get FREE delivery on this order');
    }
    YouMayAlsoLikeSection(){
        return cy.get('div.atbw-wrap');
    }
    PriceBeforeDiscount(){
        return cy.contains(1299);
    }
    RemoveButton(){
        return cy.get('#testRemoveCart');
    }
    EmptyBagMessage(){
        return cy.contains('Nothing in the bag');
    }
    AddAddressButton(){
        return cy.contains('Add Address');
    }
}
export default Cart;