class ProductPage {
	/**
	 * define selectors using getter methods
	 */
	public get firstProduct() {
		return $(
			'.inventory_list .inventory_item:nth-child(1) .inventory_item_name'
		);
	}

	public get addToCartButton() {
		return $('.inventory_list .inventory_item:nth-child(1) .btn_inventory');
	}

	/**
	 * define methods to interact with the page
	 */
	public async clickFirstProduct() {
		await this.firstProduct.click();
	}

	public async addToCart() {
		await this.addToCartButton.click();
	}
}

export default new ProductPage();
