import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import VTodoList from "../VTodoList.vue";

const wrapper = mount(VTodoList);

describe("Unit tests for VTodoList", () => {
  it("Exist", () => {
    expect(VTodoList).toBeTruthy;
  });
});
