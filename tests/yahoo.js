module.exports = {
    // 'Sign in - Enter invalid email': client => {
    //     let yahooPage = client.page.yahooPage();
       
    //     yahooPage.prepareWebsite();
    //     yahooPage.attemptSignIn('nodemoemail.com');
    //     yahooPage.validateErrorMesage("Sorry, we don't recognize this email.");
    // },
    'Sign up - Leave Last name empty': client => {
        let yahooPage = client.page.yahooPage();
    
        yahooPage.prepareWebsite();
        yahooPage.attemptRegistration();
        yahooPage.validateErrorMessage('@lastNameErrorMessage', 'This is required');
    }
}
