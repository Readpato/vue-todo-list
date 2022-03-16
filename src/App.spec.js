/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import AppVue from "./App.vue";

it("shows the app", () => {
  mount(AppVue);
});
