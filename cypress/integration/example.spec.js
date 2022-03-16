// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:5050/vue-todo-list/");
    cy.contains("h1", "You did it!");
  });
});
