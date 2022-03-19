/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import VHeader from "../VHeader.vue";

test("Mount component", async () => {
  expect(VHeader).toBeTruthy();

  const wrapper = mount(VHeader, {
    props: {
      title: "This is a header",
    },
  });

  expect(wrapper.text()).toContain("This is a header");
});
