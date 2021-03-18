import {Selector, t} from 'testcafe'

class CheckoutInformationPage{
  constructor(){
    this.firstnameField = Selector('#first-name')
    this.lastnameField = Selector('#last-name')
    this.postalcodeField = Selector('#postal-code')
    this.continueOrderButton = Selector('.btn_primary.cart_button')
    this.errorMessageCheckoutPage = Selector('h3')
  }
  async submitBuyerData(firstName, lastName, zipCode){
    await t
      .typeText(this.firstnameField, firstName)
      .typeText(this.lastnameField, lastName)
      .typeText(this.postalcodeField, zipCode)
      .click(this.continueOrderButton)
  }
}

export default new CheckoutInformationPage()
