import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VTodoItem from "../VTodoItem.vue";

const wrapper = mount(VTodoItem, {
  props: { task: "Master Vue!", id: 1 },
});

describe("Functionality", () => {
  test("Assure component has been mounted correctly", async () => {
    expect(VTodoItem).toBeTruthy;

    const divElement = wrapper.find("div");
    expect(divElement.attributes().id).toBe("1");

    const liElement = wrapper.find("li");
    expect(liElement.text()).toBe("Master Vue!");
  });

  test("Add striketrough to li element when checkbox is clicked", async () => {
    const checkbox = wrapper.find("input");
    const liElement = wrapper.find("li");

    await checkbox.trigger("click");

    expect(liElement.classes()).toContain("line-through");
  });

  test("Emit an event when the SVG is clicked", async () => {
    const SVGElement = wrapper.find("svg");

    await SVGElement.trigger("click");

    expect(wrapper.emitted().emitDeleteTask).toBeTruthy();
  });
});
