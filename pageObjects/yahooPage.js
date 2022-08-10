module.exports = {
    url: 'https://www.yahoo.com/',
    elements:{
        acceptCookies:"button[name='agree']",
        header:'#Header',
        signInButton:"div[role='toolbar'] a[href*='login']",
        emailField: '#login-username',
        submitSignIn:'#login-signin',
        emailErrorMessage:'#username-error'
    }
}