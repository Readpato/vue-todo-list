import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import VTodoList from "../VTodoList.vue";

const wrapper = mount(VTodoList, {
  data() {
    return {
      tasks: [],
    };
  },
});

const deleteTask = vi.fn((taskIndex) => {
  let storedTasks = JSON.parse(localStorage.getItem("storedTasks"));
  storedTasks.splice(taskIndex, 1);
  localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  wrapper.vm.tasks.splice(taskIndex, 1);
});

const createNewtask = vi.fn((newTask) => {
  let newKey = Date.now();
  let storedTasks = [];
  storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];
  storedTasks.push({ task: newTask, key: newKey });
  localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  wrapper.vm.tasks = storedTasks;
});

describe("Unit tests for VTodoList", () => {
  it("Makes sure the component exists", () => {
    expect(VTodoList).toBeTruthy;
    expect(wrapper.exists()).toBe(true);
  });

  it("Adds a new task to the data property tasks", () => {
    createNewtask("Hello world!");
    createNewtask("Learn how to unit test properly!");
    expect(createNewtask).toHaveBeenCalled(2);
    expect(wrapper.vm.tasks).toHaveLength(2);
  });

  it("Adds tasks and deletes one of them", () => {
    deleteTask(1);
    expect(deleteTask).toHaveBeenCalled(1);
    expect(wrapper.vm.tasks).toHaveLength(1);
  });

  it("Check if the computed property returns a correct boolean", () => {
    const activeTasks = vi.fn(() => {
      return wrapper.vm.tasks.length > 0 ? true : false;
    });

    activeTasks();
    expect(activeTasks).toHaveBeenCalled(1);
    expect(activeTasks).toReturn(true);
    deleteTask(0);
    expect(activeTasks).toReturn(false);
  });
});
