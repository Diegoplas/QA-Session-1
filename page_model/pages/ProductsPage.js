import {Selector} from 'testcafe'

class ProductsPage{
  constructor(){
    this.productsPageTitle = Selector('.product_label')
    this.burgerButton = Selector('.bm-burger-button')
    this.logoutButton = Selector('#logout_sidebar_link')
    this.cartButton = Selector('#shopping_cart_container')
    this.backpackUrl = Selector('.inventory_item_name').withExactText("Sauce Labs Backpack")
    this.onesieUrl = Selector('.inventory_item_name').withExactText("Sauce Labs Onesie")
  }
}

export default new ProductsPage()
