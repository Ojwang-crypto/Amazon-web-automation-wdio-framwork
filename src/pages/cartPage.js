const expectChai = require('chai').expect;
module.exports = new class CartPage{

    get totalPriceFromCart(){
        return $("span[id='sc-subtotal-amount-buybox'] span[class='a-size-medium a-color-base sc-price sc-white-space-nowrap']");

    }

    async valiadtePriceInCartWithPdp(priceFromPdp){
        await expect(this.totalPriceFromCart).toHaveValue(priceFromPdp);
        //expectChai(await this.totalPriceFromCart.getText().to.equal(priceFromPdp));

    }

}