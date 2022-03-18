/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import VTodoEmptyItem from "./VTodoEmptyItem.vue";

it("Mounts and displays the correct text", () => {
  mount(VTodoEmptyItem);
  cy.get("p").should("contain", "No tasks for now!");
});
