import { Test } from 'mocha';

interface User {
	username: string;
	password: string;
}

interface ShippingInfo {
	firstName: string;
	lastName: string;
	zipCode: string;
}
interface TestGetirData {
	careerGetirUrl: string;
	jobPosition: string;
	taxTeamLeadLocator: string;
}

interface TestData {
	user: User;
	shippingInfo: ShippingInfo;
	testGetirData: TestGetirData;
}

const testData: TestData = {
	user: {
		username: 'standard_user',
		password: 'secret_sauce',
	},
	shippingInfo: {
		firstName: 'John',
		lastName: 'Doe',
		zipCode: '12345',
	},
	testGetirData: {
		careerGetirUrl: 'https://career.getir.com/',
		jobPosition: 'Tax',
		taxTeamLeadLocator: 'div[name="Tax Team Lead"]',
	},
};

export default testData;
