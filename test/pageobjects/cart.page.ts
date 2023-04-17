class CartPage {
	/**
	 * define selectors using getter methods
	 */
	public get checkoutButton() {
		return $('#checkout');
	}

	/**
	 * define methods to interact with the page
	 */
	public async clickCheckout() {
		await this.checkoutButton.click();
	}
}

export default new CartPage();
