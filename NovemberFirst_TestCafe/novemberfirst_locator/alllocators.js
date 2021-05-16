import { Selector } from 'testcafe';

export default class locators {
    constructor() {
        // Regd Country DropDown
        this.clickRegdCountry = Selector('#countryCode');
        this.selectRegdCountry = Selector('span.mat-option-text');

        // Common Error Handling Locator
        this.erroMessage = Selector('span.ng-star-inserted');
        
        // Company CVR
        this.enterCVRtxt = Selector('input[name="registration-number"]');

        // First Name and Last Name
        this.enterFirstName = Selector('input[name="first-name"]');
        this.enterLastName = Selector('input[name="last-name"]');

        // Email and Confirmation Email
        this.enterEmail = Selector('input[name="email"]');
        this.enterConfrimEmail = Selector('input[formcontrolname="emailConfirmation"]');

        //Phone Number
        this.enterNumber = Selector('input[name="phone-number"]');

        // Check Box
        this.checkBox = Selector('span.mat-checkbox-inner-container');

        // Create Account
        this.clickCreateBtn = Selector('button[type="submit"]');

        //Customer Number
        this.enterCustomerNumber = Selector('input[name="customer-number"]');

        // Password 
        this.enterPassword = Selector('input[name="password"]');

        // Login
        this.clickLoginBtn = Selector('button[type="submit"]');
    }
    
}
