import SignUP from '../novemberfirst_page/signUp_po';

const signup = new SignUP();

fixture('Signup_Page')
       .page('https://app-demo.novemberfirst.com/#/public/signup');

 test('error validation in signup page', async t => {
     await signup.errorHandling();
 });

 test('successfully created a account', async t => {
     await signup.createAccount();
 });
