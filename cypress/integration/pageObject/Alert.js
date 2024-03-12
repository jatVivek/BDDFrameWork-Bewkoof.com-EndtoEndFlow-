class Alert{
    Alert(){
        return cy.get('.wzrk-alert').within(() => {
            cy.get('#wzrk-cancel').click(); // Click the wzrk-cancel button
        });
    }
    Wait(){
        return cy.wait(4000);
    }
}
export default Alert;