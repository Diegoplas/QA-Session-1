import {Selector} from 'testcafe'

class FinishPage{
  constructor(){
    this.finishPageTitle = Selector('.subheader').withExactText('Finish')
  }
}

export default new FinishPage()
