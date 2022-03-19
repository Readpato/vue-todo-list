/* eslint-disable no-undef */
/// <reference types="cypress" />

const URL = "http://localhost:5050/vue-todo-list/";

context("Todo List", () => {
  before(() => {
    cy.visit(URL);
  });
  describe("Layout", () => {
    it("Assess the titles has been correctly loaded", () => {
      cy.get("h2:first").should("contain", "My todo");
      cy.get("h2:last").should("contain", "Today tasks");
    });
    it("Assess the form has been correctly rendered", () => {
      cy.get("form").should("exist");
      cy.get("form label").should("exist").and("contain", "Create new task");
      cy.get("form input")
        .should("exist")
        .and("have.attr", "placeholder", "Write here");
      cy.get("form svg").should("exist");
    });
    it("Assess the empty task item has been rendered correctly", () => {
      cy.get("p.text-textColor")
        .should("exist")
        .and("contain", "No tasks for now!");
    });
  });
  describe("Functionality", () => {
    it("Create a task from the form and submits it", () => {
      const task = "Writing Cypress tests!";
      cy.get("form input").type(task);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("p.text-textColor").should("not.exist");
      cy.get("ul li").should("contain", `${task}`);
    });
    it("Add a second task to the list and confirms that they co-exist", () => {
      const firstTask = "Write Cypress tests";
      const secondTask = "Master Vue!";
      cy.get("form input").type(firstTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("form input").type(secondTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("li").eq(0).should("exist").and("contain", `${firstTask}`);
      cy.get("li").eq(1).should("exist").and("contain", `${secondTask}`);
    });
    it("Delete one of the existing tasks and the assess that the other tasks remain", () => {
      const firstTask = "Write Cypress tests";
      const secondTask = "Master Vue!";
      const thirdTask = "Become a fulltime developer!";
      const tasks = [];
      cy.get("form input").type(firstTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("form input").type(secondTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("form input").type(thirdTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("li").eq(0).should("exist").and("contain", `${firstTask}`);
      cy.get("li").eq(1).should("exist").and("contain", `${secondTask}`);
      cy.get("li").eq(2).should("exist").and("contain", `${thirdTask}`);
      cy.get("ul div>li").then((liElement) => {
        liElement.each((index, element) => {
          tasks.push(element.textContent);
        });
      });
      cy.get("ul>div").eq(0).children("svg").click();
      cy.get("ul div").should("have.length", "2");
      cy.get("ul div>li").then((liElement) => {
        const newTasks = [];
        liElement.each((index, element) => {
          newTasks.push(element.textContent);
        });
        expect(newTasks).to.not.include(firstTask);
      });
    });
    it("Creates tasks and reloads page to assure that task are kept in localStorage", () => {
      const firstTask = "Write Cypress tests";
      const secondTask = "Master Vue!";
      const thirdTask = "Become a fulltime developer!";
      cy.get("form input").type(firstTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("form input").type(secondTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("form input").type(thirdTask);
      cy.get("form svg").click();
      cy.get("form input").should("have.value", "");
      cy.get("li").should("have.length", "3");
      cy.get("li").eq(0).should("exist").and("contain", `${firstTask}`);
      cy.get("li").eq(1).should("exist").and("contain", `${secondTask}`);
      cy.get("li").eq(2).should("exist").and("contain", `${thirdTask}`);
      cy.reload();
      cy.get("li").should("have.length", "3");
      cy.get("li").eq(0).should("exist").and("contain", `${firstTask}`);
      cy.get("li").eq(1).should("exist").and("contain", `${secondTask}`);
      cy.get("li").eq(2).should("exist").and("contain", `${thirdTask}`);
    });
  });
});
