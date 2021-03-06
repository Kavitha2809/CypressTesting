describe('index.spec.cy.js', () => {

  it('saucedemo test', () => {

    //login to the application
    cy.visit('https://www.saucedemo.com/')

    //provide the standard username and password
    cy.get('input[name="user-name"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()

    // verify first item name and price
    cy.xpath("//div[normalize-space()='Sauce Labs Backpack']").then(function (text1) {
      cy.log(text1.text())
    })

    cy.xpath("//div[normalize-space()='$29.99']").then(function (text2) {
      cy.log(text2.text())
    })

    //add first eitem to cart
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    
    //navigate to cart page
    cy.get('.shopping_cart_link').click()

    //verify the item name and price
    cy.xpath("//div[@class='inventory_item_name']").then(function (text3) {
      cy.log(text3.text())
    })

    cy.xpath("//div[@class='inventory_item_price']").then(function (text4) {
      cy.log(text4.text())
    })

    // navigate to home page
    cy.get('#continue-shopping').click()

    // verify second item name and price
    cy.xpath("//div[normalize-space()='Sauce Labs Bike Light']").then(function (text5) {
      cy.log(text5.text())
    })

    cy.xpath("//div[normalize-space()='$9.99']").then(function (text6) {
      cy.log(text6.text())
  })

    //add second item to cart
    cy.get('#add-to-cart-sauce-labs-bike-light').click()

    //navigate to cart page and verify the item name and price
    cy.get('.shopping_cart_link').click()
    cy.xpath("//div[normalize-space()='Sauce Labs Bike Light']").then(function (text7) {
      cy.log(text7.text())
    })

    cy.xpath("//div[normalize-space()='$9.99']").then(function (text8) {
      cy.log(text8.text())
    })

    //logout
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()

    //lockout user login and error message validation
    cy.get('input[name="user-name"]').type('locked_out_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('input[type="submit"]').click()
    cy.xpath("//h3[contains(text(),'Epic sadface: Sorry, this user has been locked out')]").then(function (text9) {
      cy.log(text9.text())
    })
    

    
  })
})