module.exports = new class HomePage {

    get searchBar(){
        return $('#twotabsearchtextbox');
    }
    get searchBarMagnifier(){
        return $('#nav-search-submit-button')
    }

    async searchForGivenKeyWord(keyword){

        await this.searchBar.setValue(keyword);
        await this.searchBarMagnifier.click();

    }

}