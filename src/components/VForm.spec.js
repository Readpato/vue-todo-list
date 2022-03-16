/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import VForm from "./VForm.vue";

it("Type new task and emit it to parent element ", () => {
  mount(VForm);
  const newTask = "Master Vue and Cypress!";
  cy.get("label").should("contain", "Create new task");
  cy.get("input:text").type(newTask);
  cy.get("svg")
    .click()
    .vue()
    .then((wrapper) => {
      const emittedTask = wrapper.emitted("emitNewTask")[0][0];
      expect(newTask).to.equal(emittedTask);
    });
});
