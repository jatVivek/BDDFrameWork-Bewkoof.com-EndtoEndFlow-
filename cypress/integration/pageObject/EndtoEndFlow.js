import HomePage from "../pageObject/HomePage";
import PLP from "../pageObject/PLP";
import PDP from "../pageObject/PDP";
import Alert from "../pageObject/Alert";
import Cart from "../pageObject/Cart";
import Login from "../pageObject/Login";
class EndtoEndFlow{
    EndtoEndFlow(){
        const homePage = new HomePage();
        const plpPage = new PLP();
        const pdPage = new PDP();
        const alertPage = new Alert();
        const cartPage = new Cart();
        const loginPage = new Login();
        homePage.GettingSearchButton().type('t-shirt');
        alertPage.Wait();
        alertPage.Alert();
        alertPage.Wait();
        homePage.GettingProducts().click();
        plpPage.ValidatingProduct();
        plpPage.GettingProduct().click();
        pdPage.ValidatingProductName();
        pdPage.ValidatingPincodeError();
        pdPage.PinCode().type('454001'); 
        pdPage.CheckButton().click();
        alertPage.Wait();
        pdPage.ValidatingEnteredPincode().should('be.visible').then(() => {
            pdPage.ChangeButton().click();
        });
        pdPage.SizeButton().click();
        pdPage.AddToBagButton().click();
        pdPage.BagButton().should('be.visible').then(() => {
            pdPage.BagButton().click();
        })
        cartPage.FirstFreeDeliveryMessage().should('be.visible');
        cartPage.YouMayAlsoLikeSection().should('be.visible');
        // cartPage.RemoveButton().click();
        // cartPage.EmptyBagMessage().should('be.visible');
        cartPage.AddAddressButton().click().then(()=>{
        loginPage.VerifyingLoginPage().should('be.visible');
        })
    }
}
export default EndtoEndFlow;