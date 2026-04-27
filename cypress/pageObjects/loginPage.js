export class LoginPage {
  static get usernameField() {
    return cy.get("#txt-username");
  }

  static get passwordField() {
    return cy.get("#txt-password");
  }

  static get loginButton() {
    return cy.get("#btn-login");
  }

  static login(username, password) {
    this.usernameField.type(username);
    this.passwordField.type(password);
    this.loginButton.click();
  }
}


