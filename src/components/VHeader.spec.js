/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import VHeader from "./VHeader.vue";

it("Mounts", () => {
  mount(VHeader);
});
