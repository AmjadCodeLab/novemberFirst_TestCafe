import { t } from 'testcafe';
import locators from '../novemberfirst_locator/alllocators';

const locator = new locators();

export default class SignIN {

    async login () {
        await t
        .typeText(locator.enterCustomerNumber, '39614715')
        .typeText(locator.enterEmail, 'novemeberfirst@gmail.com')
        .typeText(locator.enterPassword, 'password@1')
        .expect(locator.erroMessage.exists).notOk()
        .click(locator.clickLoginBtn);
    }
}
