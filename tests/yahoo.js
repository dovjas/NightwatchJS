module.exports = {
    // 'Sign in - Enter invalid email': client => {
    //     let yahooPage = client.page.yahooPage();
       
    //     yahooPage.prepareWebsite();
    //     yahooPage.attemptSignIn('nodemoemail.com');
    //     yahooPage.validateErrorMesage("Sorry, we don't recognize this email.");
    // },
    'Sign up - Leave Last name empty': client => {
        let yahooPage = client.page.yahooPage();
        const personData = {
            firstName: 'John',
            email: 'test758492',
            password: '4673857Ajsdhdbf',
            year: '1990'
        }
    
        yahooPage.prepareWebsite();
        yahooPage.attemptRegistration(personData);
        yahooPage.validateErrorMessage('@lastNameErrorMessage', 'This is required');
    }
}
