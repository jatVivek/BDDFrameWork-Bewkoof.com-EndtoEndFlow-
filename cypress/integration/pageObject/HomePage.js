class HomePage{
    GettingSearchButton(){
        return cy.get('form.searchContainer');
    }
    GettingProducts(){
        return cy.contains('Men');
    }
}
export default HomePage;