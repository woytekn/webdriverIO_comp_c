import LoginPage from '../pageobjects/login.page';
import LandingPage from '../pageobjects/landing.page';
import ProductPage from '../pageobjects/product.page';
import CartPage from '../pageobjects/cart.page';
import CheckoutPage from '../pageobjects/checkout.page';
import OrderCompletePage from '../pageobjects/orderComplete.page';
import testData from '../test.data';

describe('My Login application', () => {
	it('should login with valid credentials', async () => {
		await LoginPage.open();
		await LoginPage.login(testData.user.username, testData.user.password);
		await expect(LandingPage.appLogo).toBeDisplayed();

		// Add product to cart
		await LandingPage.clickBackpackProduct();
		await ProductPage.addToCart();
		await LandingPage.iconCartClick();

		// Open cart and click checkout
		await CartPage.clickCheckout();

		// Fill the form with information
		await CheckoutPage.fillForm(
			testData.shippingInfo.firstName,
			testData.shippingInfo.lastName,
			testData.shippingInfo.zipCode
		);

		// Click finish
		await CheckoutPage.clickFinish();

		// Assert if the order is completed
		await expect(OrderCompletePage.orderCompleteHeader).toHaveTextContaining(
			'Thank you for your order!'
		);
	});
});
