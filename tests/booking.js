module.exports = {
    'Book an apointment': client =>{
        client
            //Open page
            .url('https://katalon-demo-cura.herokuapp.com/')
            //Click on toggle menu
            .click('#menu-toggle')
            //Click login
            .click("a[href*='login']")
            //Input username
            .setValue('#txt-username','John Doe')
            //Input password
            .setValue('#txt-password','ThisIsNotAPassword')
            //Click login button
            .click('#btn-login')
            //Click facility dropdown
            .click('#combo_facility')
            //Select facility
            .click("option[value='Seoul CURA Healthcare Center']")
            //Click checkbox
            .click('#chk_hospotal_readmission')
            //Click radio select
            .click('#radio_program_medicaid')
            //Set visit date
            .setValue('#txt_visit_date','02/11/2021')
            //Set comment 
            .setValue('#txt_comment','This is a test appointment')

            //Validate correct error message
            .assert.visible('#facility','Seoul CURA Healthcare Center')

        

    }
}