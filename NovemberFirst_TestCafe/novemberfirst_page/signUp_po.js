import { t } from 'testcafe';
import locators from '../novemberfirst_locator/alllocators';

const locator = new locators();

export default class SignUP {
    async errorHandling () {
      await t
      .click(locator.clickCreateBtn)
      .expect(locator.erroMessage).eql('Please select the checkbox to continue');
    }

    async createAccount () {
        await t
        .typeText(locator.enterCVRtxt, '39614715')
        .typeText(locator.enterFirstName, 'November')
        .typeText(locator.enterLastName, 'First')
        .typeText(locator.enterEmail, 'novemeberfirst@gmail.com')
        .typeText(locator.enterConfrimEmail, 'novemeberfirst@gmail.com')
        .typeText(locator.enterNumber, '123456789')
        .click(locator.checkBox)
        .expect(locator.erroMessage.exists).notOk()
        .click(locator.clickCreateBtn);
    }
}
