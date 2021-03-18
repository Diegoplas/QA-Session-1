import {Selector, t} from 'testcafe'

class CheckoutOverviewPage{
  constructor(){
    this.checkoutOverviewTitle = Selector('.subheader').withExactText('Checkout: Overview')
    this.finishCheckoutButton = Selector('.cart_button')
    this.backpackInOverview = Selector('.inventory_item_name').withExactText("Sauce Labs Backpack")
  }
}

export default new CheckoutOverviewPage()
