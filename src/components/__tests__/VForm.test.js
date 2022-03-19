/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import VForm from "../VForm.vue";

const wrapper = mount(VForm);

describe("Unit tests for VForm comoponent", () => {
  test("Assure the component has been mounted correctly", async () => {
    expect(VForm).toBeTruthy;

    const label = wrapper.find("label");
    expect(label.text()).toBe("Create new task");
  });

  test("Check if it correctly emits an event while clicking on SVG", async () => {
    const input = wrapper.find("input");
    const SVGElement = wrapper.find("svg");
    await input.setValue("Learn Vitest!");
    await SVGElement.trigger("click");
    expect(wrapper.emitted().emitNewTask).toBeTruthy();
  });
  test("Check if it correctly emits an event while clicking on SVG", async () => {
    const input = wrapper.find("input");
    await input.setValue("Learn Vitest!");
    await input.trigger("keyup.enter");
    expect(wrapper.emitted().emitNewTask).toBeTruthy();
  });
});
