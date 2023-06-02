module.exports = new class ResultsPage{

    get products(){
        return $("//span[normalize-space()='Kushuvi 4XL Bean Bag with Footrest with Cushion Ready to Use with Beans (Faux Leather) (Navy Blue - XXXXL)']");
    }

    async selectProduct(){
        let parentWindowId = await browser.getWindowHandle();
        await this.products.click();
        return parentWindowId;

    }

}