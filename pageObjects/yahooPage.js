const yahooCommands = {
    prepareWebsite: function (){
        //Open the page
        this.navigate()
        //Accept the cookies
            this.click('@acceptCookies')
            this.waitForElementVisible('@header',4000)
    },
    attemptSignIn:function(){
        //Navigate to Sign In
        this.click('@signInButton')
        //Attempt to Sign In
            this.setValue('@emailField','nodemoemail.com')
            this.click('@submitSignIn')
    },
    validateErrorMesage: function(){
        //Validate error message
        this.assert.visible('@emailErrorMessage')
        this.assert.containsText('@emailErrorMessage',"Sorry, we don't recognize this email")

    }

}

module.exports = {
    url: 'https://www.yahoo.com/',
    commands: [yahooCommands],
    elements:{
        acceptCookies:"button[name='agree']",
        header:'#Header',
        signInButton:"div[role='toolbar'] a[href*='login']",
        emailField: '#login-username',
        submitSignIn:'#login-signin',
        emailErrorMessage:'#username-error'
    }
}