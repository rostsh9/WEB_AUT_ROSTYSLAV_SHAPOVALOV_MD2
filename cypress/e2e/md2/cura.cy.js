import { HomePage } from "../../pageObjects/homePage";
import { LoginPage } from "../../pageObjects/loginPage";
import { AppointmentPage } from "../../pageObjects/appointmentPage";

describe("CURA Healthcare Service", () => {
  const username = "John Doe";
  const password = "ThisIsNotAPassword";

  context("Scenario 1 - Make an Appointment", () => {
    it("Books an appointment and validates entered values", () => {
      const appointmentData = {
        facility: "Seoul CURA Healthcare Center",
        readmission: "Yes",
        program: "Medicaid",
        comment: "CURA Healthcare Service",
      };

      HomePage.visit();
      HomePage.clickMakeAppointment();
      LoginPage.login(username, password);

      AppointmentPage.selectFacility(appointmentData.facility);
      AppointmentPage.checkReadmission();
      AppointmentPage.selectMedicaid();

      AppointmentPage.pickVisitDay(30).then((selectedDate) => {
        AppointmentPage.setComment(appointmentData.comment);
        AppointmentPage.bookAppointment();

        AppointmentPage.facilityValue.should("have.text", appointmentData.facility);
        AppointmentPage.readmissionValue.should("have.text", appointmentData.readmission);
        AppointmentPage.programValue.should("have.text", appointmentData.program);
        AppointmentPage.visitDateValue.should("have.text", selectedDate);
        AppointmentPage.commentValue.should("have.text", appointmentData.comment);
      });
    });
  });

  context("Scenario 2 - Appointment history empty", () => {
    it("Shows empty appointment history", () => {
      HomePage.visit();
      HomePage.clickMakeAppointment();
      LoginPage.login(username, password);

      AppointmentPage.openMenu();
      AppointmentPage.sidebarWrapper.should("have.class", "active");
      AppointmentPage.openHistory();
      AppointmentPage.noAppointmentMessage.should("be.visible");
    });
  });
});

