import {Selector} from 'testcafe'

class CartPage{
  constructor(){
    this.cartPageTitle = Selector('.subheader')
    this.checkoutButton = Selector('.btn_action.checkout_button')
    this.itemInCart = Selector('.cart_item')
    this.backpackInCart = Selector('.inventory_item_name').withExactText("Sauce Labs Backpack")
    this.backpackTextInCart = Selector('.cart_item_label > a > .inventory_item_name')
  }
}

export default new CartPage()
