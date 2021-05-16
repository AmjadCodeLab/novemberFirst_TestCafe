import SignIN from '../novemberfirst_page/signIn_po';

const signin = new SignIN();

fixture('Signin_Page')
       .page('https://app-demo.novemberfirst.com/#/public');

test('successful login into application', async t => {
    await signin.login();
});
