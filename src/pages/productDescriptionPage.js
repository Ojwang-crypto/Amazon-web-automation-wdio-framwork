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
        let allWindowHandles = await browser.getWindowHandles();
        for(let i = 0; i< allWindowHandles.length;i++){
            if(allWindowHandles[i]!= parentWindowId){
                await browser.switchToWindow(allWindowHandles[i]);
                break;
            }
        }

        let price = await this.productPrice.getText();
        await this.addCartButton.click();
        return price;
    }

    async navigateToCart(){
        (await this.goToCartButton).click();
    }
}