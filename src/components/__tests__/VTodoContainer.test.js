import { mount } from "@vue/test-utils";
import VTodoContainer from "../VTodoContainer.vue";

const wrapper = mount(VTodoContainer);

describe("VTodoContainer unit test", async () => {
  test("Makes sure the componet has been mounted correctly");
  expect(VTodoContainer).toBeTruthy;
});
