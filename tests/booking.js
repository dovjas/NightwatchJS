module.exports = {
    'Book an apointment': client =>{
        client
            //Open page
            .url('https://katalon-demo-cura.herokuapp.com/')
            //Click on toggle menu
            .click('#menu-toggle')
           
            //Login
            .click("a[href*='login']")
            .setValue('#txt-username','John Doe')
            .setValue('#txt-password','ThisIsNotAPassword')
            .click('#btn-login')

            //Book an appoitment
            .click('#combo_facility')
            .click("option[value='Seoul CURA Healthcare Center']")
            .click('#chk_hospotal_readmission')
            .click('#radio_program_medicaid')
            .setValue('#txt_visit_date','02/11/2021')
            .setValue('#txt_comment','This is a test appointment')
            .click('#btn-book-appointment')
            
            //Validate appointment data
            .assert.containsText('#facility','Seoul CURA Healthcare Center')
            .assert.containsText('#hospital_readmission','Yes')
            .assert.containsText('#facility','Seoul CURA Healthcare Center')
            .assert.containsText('#program','Medicaid')
            .assert.containsText('#visit_date','02/11/2021')
            .assert.containsText('#comment','This is a test appointment')
  
            //Logout
            .click('#menu-toggle')
            .click("a[href*='logout']")

            //validate that app info is no longer displayed
            .assert.not.elementPresent('#facility','Seoul CURA Healthcare Center')
            .assert.not.elementPresent('#hospital_readmission','Yes')
            .assert.not.elementPresent('#facility','Seoul CURA Healthcare Center')
            .assert.not.elementPresent('#program','Medicaid')
            .assert.not.elementPresent('#visit_date','02/09/2021')
            .assert.not.elementPresent('#comment','This is a test appointment')



        

    }
}