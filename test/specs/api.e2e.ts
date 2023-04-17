const mockResponse = require('../mocks/mocks.json');
import GetirPage from '../pageobjects/getir.page';
import testData from '../test.data';

describe('GET Request Test', () => {
	it('should return the correct object', async () => {
		browser.url('https://jsonplaceholder.typicode.com/todos/1/');
		const response = await browser.execute(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/todos/1/');
			return {
				status: res.status,
				data: await res.json(),
			};
		});
		console.log(response);
		expect(response.status).toEqual(200);
		expect(response.data).toEqual({
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: false,
		});
	});
	it('should return the correct mocked object', async () => {
		browser.url('https://jsonplaceholder.typicode.com/todos/1/');
		const response = await browser.execute(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/todos/1/');
			return {
				status: res.status,
				data: {
					userId: 5,
					id: 5,
					title: 'mocked data',
					completed: false,
				},
			};
		});
		console.log(response);
		expect(response.status).toEqual(200);
		expect(response.data).toEqual(mockResponse);
	});

	it('should not display the Tax Team Lead position when mock data is used', async () => {
		await browser.url('https://getir.com/us');
		const taxTeamLeadDiv = await browser.$(
			testData.testGetirData.taxTeamLeadLocator
		);
		const mockCareerPage = await browser.mock(
			'**/v1/boards/getir/departments?render_as=tree'
		);
		await GetirPage.clickJoinTheTeamButton();
		const currentUrl = await browser.getUrl();
		expect(currentUrl).toEqual(testData.testGetirData.careerGetirUrl);
		mockCareerPage.respond(mockResponse);
		await GetirPage.searchAndPressEnter(testData.testGetirData.jobPosition);
		expect(await taxTeamLeadDiv.isDisplayed()).toBeFalsy();
	});
});
