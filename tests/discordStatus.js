module.exports = {
    'Discord Status - All services Operational': client => {
      let discordPage = client.page.discordPage();
  
      discordPage.prepareWebsite();
      discordPage.countComponents(6);
      discordPage.verifyServiceStatus('Operational');
    }
  }