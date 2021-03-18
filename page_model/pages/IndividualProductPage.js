import {Selector} from 'testcafe'

class IndividualProductPage{
  constructor(){
    this.addToCartButton = Selector('.btn_primary.btn_inventory')
    this.backToProductsButton = Selector('.inventory_details_back_button')
  }
}

export default new IndividualProductPage()
