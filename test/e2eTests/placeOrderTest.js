const homePage = require('../../src/pages/homePage');
const basePage = require('../../src/pages/basePage');
const resultPage = require('../../src/pages/resultsPage');
const productDescriptioPage = require('../../src/pages/productDescriptionPage');
const cartPage = require('../../src/pages/cartPage')

describe('Place Order journey', async ()=>{

    it('should be able to  search product and place an order', async()=>{
        
        await basePage.navigateToUrl();
        await homePage.searchForGivenKeyWord('Bean bag');
        //await browser.pause(3000);
        let parentWindowId = await resultPage.selectProduct();
        let price = await productDescriptioPage.addProductToCart(parentWindowId);
        await productDescriptioPage.navigateToCart();
        //await cartPage.valiadtePriceInCartWithPdp(price);

        await browser.pause(3000);
    }); 

});