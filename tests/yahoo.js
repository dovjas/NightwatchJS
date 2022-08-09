module.exports = {
    'Sign in - Enter invalid email': client => {
        client

        //Open the page
            .url('https://www.yahoo.com/')
        //Accept the cookies
            .click("button[name='agree']")
            .waitForElementVisible('#Header',4000)
        //Navigate to Sign In
            .click("div[role='toolbar'] a[href*='login']")
        //Attempt to Sign In
            .setValue('#login-username','noemail')
            .click('#login-signin')
        //Validate error message
            .assert.visible('#username-error')
            .assert.containsText('#username-error',"Sorry, we don't recognize this email")
    }
}