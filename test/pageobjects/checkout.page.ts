class CheckoutPage {
	/**
	 * define selectors using getter methods
	 */
	public get firstNameField() {
		return $('#first-name');
	}

	public get lastNameField() {
		return $('#last-name');
	}

	public get zipCodeField() {
		return $('#postal-code');
	}

	public get continueButton() {
		return $('#continue');
	}

	public get finishButton() {
		return $('#finish');
	}

	/**
	 * define methods to interact with the page
	 */
	public async fillForm(firstName: string, lastName: string, zipCode: string) {
		await this.firstNameField.setValue(firstName);
		await this.lastNameField.setValue(lastName);
		await this.zipCodeField.setValue(zipCode);
		await this.continueButton.click();
	}

	public async clickFinish() {
		await this.finishButton.click();
	}
}

export default new CheckoutPage();
