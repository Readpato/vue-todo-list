import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import VTodoEmptyItem from "../VTodoEmptyItem.vue";

describe("Functionality", () => {
  const wrapper = mount(VTodoEmptyItem);

  test("Mount component", async () => {
    expect(VTodoEmptyItem).toBeTruthy();
  });

  test("Expect paragraph to have specific text", () => {
    const pElement = wrapper.find("p");

    expect(pElement.text()).toBe("No tasks for now!");
  });
});
