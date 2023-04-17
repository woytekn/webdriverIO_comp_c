class LandingPage {
	/**
	 * define selectors using getter methods
	 */
	public get appLogo() {
		return $('.app_logo');
	}

	public get cartIcon() {
		return $('#shopping_cart_container');
	}

	get btnAddToCartBackpack() {
		return $('#button#add-to-cart-sauce-labs-backpack');
	}

	public get productItems() {
		return $$('.inventory_item');
	}

	public async clickBackpackProduct() {
		(await this.btnAddToCartBackpack).click();
	}

	public async iconCartClick() {
		(await this.cartIcon).click();
	}
}

export default new LandingPage();
