module.exports = new class ProductDescriptionPage{

    get productPrice(){
        return $("//span[normalize-space()='2,299']");
    }

    get addCartButton(){
        return $('#add-to-cart-button');
    }

    get goToCartButton(){
        return $("//a[@href='/cart?ref_=sw_gtc']");
    }

    async addProductToCart(parentWindowId){
        
        var allWindowHandles = await browser.getWindowHandles();
            for(var i = 0; i<allWindowHandles.length;i++){
                 if(allWindowHandles[i] != parentWindowId){
                     await browser.switchToWindow(allWindowHandles[i]);
                     break;
                 }   
            }
            await browser.pause(1000);
            await this.addCartButton.click();
            
     
        }

    async navigateToCart(){
        await this.goToCartButton.click();
    }
}