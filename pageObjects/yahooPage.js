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
    validateErrorMessage: function(element,message){
        //Validate error message
        this.assert.visible(element)
        this.assert.containsText(element,message)
    },
    attemptRegistration: function () {
        this.click('@signInButton')
        this.click('@createAccButton')
        this.setValue('@firstName', 'John')
        this.setValue('@email', 'test758492')
        this.setValue('@password', '4673857Ajsdhdbf')
        this.setValue('@birthYear', '1990')
        this.click('@submitRegistration')
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
        emailErrorMessage:'#username-error',
        createAccButton: '#createacc',
        firstName: '#usernamereg-firstName',
        email: '#usernamereg-userId',
        password: '#usernamereg-password',
        birthYear: '#usernamereg-birthYear',
        submitRegistration: '#reg-submit-button',
        lastNameErrorMessage: '#reg-error-lastName'
    }
}
