import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutInformationPage from '../pages/CheckoutInformationPage'
import CheckoutOverviewPage from '../pages/CheckoutOverviewPage'
import FinishPage from '../pages/FinishPage'
import IndividualProductPage from '../pages/IndividualProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login featur testing')
  .page `https://www.saucedemo.com/`

test('1. Login with a valid user', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t.expect(ProductsPage.productsPageTitle.exists).ok()
})

test('2. Login with an invalid user', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.errorMessageLoginPage.exists).ok()
})

test('3. Logout from products page', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.burgerButton)
    .click(ProductsPage.logoutButton)

  await t.expect(LoginPage.loginButton.exists).ok()
})

test('4. Navigate to shopping cart', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.cartButton)

  await t.expect(CartPage.cartPageTitle.exists).ok()
})

test('5. Add a single item to the shopping cart', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.backpackUrl)
    .click(IndividualProductPage.addToCartButton)
    .click(IndividualProductPage.backToProductsButton)
    .click(ProductsPage.cartButton)

  await t.expect(CartPage.itemInCart.count).eql(1)
})

test('6. Add multiple items to the shopping cart', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.backpackUrl)
    .click(IndividualProductPage.addToCartButton)
    .click(IndividualProductPage.backToProductsButton)
    .click(ProductsPage.onesieUrl)
    .click(IndividualProductPage.addToCartButton)
    .click(ProductsPage.cartButton)

  await t.expect(CartPage.itemInCart.count).eql(2)
})

test('7. Continue with missing mail information', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.cartButton)
    .click(CartPage.checkoutButton)
    .typeText(CheckoutInformationPage.firstnameField, 'Juan')
    .typeText(CheckoutInformationPage.lastnameField, 'Perez')
    .click(CheckoutInformationPage.continueOrderButton)

  await t.expect(CheckoutInformationPage.errorMessageCheckoutPage.exists).ok()
})

test('8. Fill users information', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.cartButton)
    .click(CartPage.checkoutButton)
  await CheckoutInformationPage.submitBuyerData('Juan', 'Perez', '33142')

  await t.expect(CheckoutOverviewPage.checkoutOverviewTitle.exists).ok()
})

test('9. Complete a purchase', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.backpackUrl)
    .click(IndividualProductPage.addToCartButton)
    .click(ProductsPage.cartButton)
    .click(CartPage.checkoutButton)
  await CheckoutInformationPage.submitBuyerData('Juan', 'Perez', '33142')
  await t.expect(CheckoutOverviewPage.backpackInOverview.innerText).eql("Sauce Labs Backpack")
  //Was not able to confirm the expect of two different variables as the comment below Error: "deeply equal{Object...}"
  //await t.expect(CartPage.backpackInCart.innerText).eql(CheckoutOverviewPage.backpackInOverview.innerText)
})

test('10. Complete a purchase', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(ProductsPage.cartButton)
    .click(CartPage.checkoutButton)
  await CheckoutInformationPage.submitBuyerData('Juan', 'Perez', '33142')
  await t.click(CheckoutOverviewPage.finishCheckoutButton)

  await t.expect(FinishPage.finishPageTitle.exists).ok()
})
// testcafe chrome '.\page_model\test\Login.Test.js'
