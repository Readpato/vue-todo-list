/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import VTodoContainer from "./VTodoContainer.vue";

it("Mounts", () => {
  mount(VTodoContainer);
});
