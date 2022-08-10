const discordCommands = {
    prepareWebsite: function () {
      this.navigate();
      this.waitForElementVisible('@componentsSection')
    },
    countComponents: function (count) {
      return this.api.elements('css selector', '@mainComponents', result => {
        const components = result.value
        const compontentsCount = components.length
  
        this.assert.deepStrictEqual(count, compontentsCount)
      })
    },
    verifyServiceStatus: function (status) {
      return this.api.elements('css selector', '@componentStatus', result => {
        const statusElements = result.value
        let componentStatuses = []
  
        statusElements.forEach(element => {
          componentStatuses.push(Object.values(element)[0])
        })
        console.log(componentStatuses);
  
        componentStatuses.forEach(component => {
          this.api.elementIdText(component, result => {
            const text = result.value
            console.log(text)
  
            this.verify.deepStrictEqual(status, text)
          })
        })
      })
    }
  }
  
  module.exports = {
    url: 'https://discordstatus.com/',
    commands: [discordCommands],
    elements: {
      componentsSection: 'div.container',
      mainComponents: 'div.component-container',
      componentStatus: '.showcased span.component-status, span.component-status.tool'
    }
  }