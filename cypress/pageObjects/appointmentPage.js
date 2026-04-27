export class AppointmentPage {
  static get facilitySelect() {
    return cy.get("#combo_facility");
  }

  static get readmissionCheckbox() {
    return cy.get("#chk_hospotal_readmission");
  }

  static get medicaidProgramRadio() {
    return cy.get("#radio_program_medicaid");
  }

  static get visitDateField() {
    return cy.get("#txt_visit_date");
  }

  static get commentField() {
    return cy.get("#txt_comment");
  }

  static get bookAppointmentButton() {
    return cy.get("#btn-book-appointment");
  }

  static get facilityValue() {
    return cy.get("#facility");
  }

  static get readmissionValue() {
    return cy.get("#hospital_readmission");
  }

  static get programValue() {
    return cy.get("#program");
  }

  static get visitDateValue() {
    return cy.get("#visit_date");
  }

  static get commentValue() {
    return cy.get("#comment");
  }

  static get menuToggle() {
    return cy.get("#menu-toggle");
  }

  static get sidebarWrapper() {
    return cy.get("#sidebar-wrapper");
  }

  static get noAppointmentMessage() {
    return cy.contains(".col-sm-12", "No appointment.");
  }

  static historyLink() {
    return cy.contains("#sidebar-wrapper a", "History");
  }

  static selectFacility(facilityName) {
    this.facilitySelect.select(facilityName);
  }

  static checkReadmission() {
    this.readmissionCheckbox.check({ force: true });
  }

  static selectMedicaid() {
    this.medicaidProgramRadio.check({ force: true });
  }

  static pickVisitDay(day) {
    this.visitDateField.click();

    cy.get(".datepicker-days").then(($calendar) => {
      const hasRequestedDay = $calendar
        .find(".day:not(.old):not(.new)")
        .toArray()
        .some((el) => el.textContent.trim() === String(day));

      if (!hasRequestedDay) {
        cy.get(".datepicker-days th.next").click();
      }
    });

    cy.get(".datepicker-days .day:not(.old):not(.new)")
      .contains(new RegExp(`^${day}$`))
      .click();

    return this.visitDateField.invoke("val");
  }

  static setComment(comment) {
    this.commentField.type(comment);
  }

  static bookAppointment() {
    this.bookAppointmentButton.click();
  }

  static openMenu() {
    this.menuToggle.click();
  }

  static openHistory() {
    this.historyLink().click();
  }
}

