module.exports = {
    'Sign in - Enter invalid email': client => {
        let yahooPage = client.page.yahooPage();
       
        yahooPage
        //Open the page
            .navigate()
        //Accept the cookies
            .click('@acceptCookies')
            .waitForElementVisible('@header',4000)
        //Navigate to Sign In
            .click('@signInButton')
        //Attempt to Sign In
            .setValue('@emailField','nodemoemail.com')
            .click('@submitSignIn')
        //Validate error message
            .assert.visible('@emailErrorMessage')
            .assert.containsText('@emailErrorMessage',"Sorry, we don't recognize this email")
    },


    // 'Sign Up - Leave Last name empty': client =>{
    //     client
    //     //Open the page
    //       .url('https://www.yahoo.com/')
    //     //Accept cookies
    //         .click("button[name='agree']")
    //         .waitForElementVisible('#Header',4000)
    //     //Navigate to Sign In
    //         .click("div[role='toolbar'] a[href*='login']")  
    //     //Navigate to account creation
    //         .click('#createacc')
    //     //Fill in the fields
    //         .setValue('#usernamereg-firstName','Jonas')
    //         .setValue('#usernamereg-userId','test')
    //         .setValue('#usernamereg-password','Jonas10203040')
    //         .setValue('#usernamereg-birthYear','1999')
    //         .click('#reg-submit-button')
    //     //Validate correct error message
    //     .assert.visible('reg-error-lastName')
    //     .assert.containsText('#reg-error-lastName','This is required')



    // }
}