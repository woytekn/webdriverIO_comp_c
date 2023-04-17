class OrderCompletePage {
	/**
	 * define selectors using getter methods
	 */
	public get orderCompleteHeader() {
		return $('#checkout_complete_container > .complete-header');
	}
}

export default new OrderCompletePage();
