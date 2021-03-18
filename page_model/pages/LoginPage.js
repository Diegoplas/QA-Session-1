import { Selector, t } from 'testcafe'

class LoginPage {
  constructor(){
    this.usernameField = Selector('input[name="user-name"]')
    this.passwordField = Selector('input[name="password"]')
    this.loginButton = Selector('.btn_action')
    this.errorMessageLoginPage = Selector('h3')
  }

  async submitLoginForm(username, password){
    await t
      .typeText(this.usernameField, username)
      .typeText(this.passwordField, password)
      .click(this.loginButton)
  }
}

export default new LoginPage()
