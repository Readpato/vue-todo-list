/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import VHeader from "./VHeader.vue";

it("Mounts and displays a the correct text in the header", () => {
  mount(VHeader, { props: { title: "This is a header" } });
  cy.get("nav h2").should("contain", "This is a header");
});
