import { BasePage } from "./basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/";
  }

  static get makeAppointmentButton() {
    return cy.get("#btn-make-appointment");
  }

  static clickMakeAppointment() {
    this.makeAppointmentButton.click();
  }
}
