/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import VTodoItem from "../VTodoItem.vue";

it("Recieve a task prop in string and display it", () => {
  mount(VTodoItem, {
    props: { task: "New task recieved!", id: Math.random() },
  });
  cy.get("li").should("contain", "New task recieved!");
});

it("Strikes through the text when checkbox is clicked", () => {
  mount(VTodoItem, { props: { task: "New Task!", id: Math.random() } });
  cy.get("input:checkbox").click();
  cy.get("li").should("have.class", "line-through");
});

it("Emits the delete task event when the 'X' icon is clicked", () => {
  mount(VTodoItem, { props: { task: "New Task!", id: Math.random() } });
  cy.get("svg")
    .click()
    .vue()
    .then((wrapper) => {
      const emittedId = wrapper.emitted("emitDeleteTask")[0][0];
      const taskId = Number(
        document.querySelector("div .flex").getAttribute("id")
      );
      expect(emittedId).to.equal(taskId);
    });
});
