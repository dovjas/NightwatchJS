const yahooCommands = {
    prepareWebsite: function (){
        //Open the page
        this.navigate()
        //Accept the cookies
            this.click('@acceptCookies')
            this.waitForElementVisible('@header',4000)
    },
    attemptSignIn:function(email){
        //Navigate to Sign In
        this.click('@signInButton')
        //Attempt to Sign In
            this.setValue('@emailField',email)
            this.click('@submitSignIn')
    },
    validateErrorMesage: function(message){
        //Validate error message
        this.assert.visible('@emailErrorMessage')
        this.assert.containsText('@emailErrorMessage',message)

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