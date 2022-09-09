"use strict";
const todoForm = document.forms.todo;
const taskList = document.querySelector(".taskList");
const errorClass = "error";

const tasksArray = [];

function createErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("errorText");
  errorMsg.textContent = message;
  return errorMsg;
}

function addErrorMessage(inputElemnt, message) {
  if (inputElemnt.classList.contains(errorClass)) return;
  inputElemnt.classList.add(errorClass);
  const error = createErrorElement(message);
  inputElemnt.closest("#fieldWrapper").before(error);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!todoForm.elements.task.value.trim().length) {
    addErrorMessage(todoForm.elements.task, "Field mustn't be empty!");
    return;
  }

  const newTask = {
    id: tasksArray.length === 0 ? 0 : tasksArray[tasksArray.length - 1].id + 1,
    name: todoForm.elements.task.value,
    isDone: false,
  };

  tasksArray.push(newTask);
  console.log(tasksArray);

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");
  taskWrapper.setAttribute("data-id", newTask.id);

  const text = document.createElement("p");
  text.setAttribute("class", "taskText");
  text.textContent = todoForm.elements.task.value.trim();

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", "isDone");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btnDelete");
  btnDelete.innerText = "Delete task";

  const btnEdit = document.createElement("button");
  btnEdit.setAttribute("class", "btnEdit");
  btnEdit.innerText = "Edit";

  taskWrapper.append(checkbox);
  taskWrapper.append(text);
  taskWrapper.append(btnDelete);
  taskWrapper.append(btnEdit);

  taskList.append(taskWrapper);

  checkbox.addEventListener("change", function () {
    const wrapper = this.closest(".taskWrapper");
    const id = wrapper.getAttribute("data-id");

    const task = tasksArray.find((taskItem) => taskItem.id == id);
    task.isDone = this.checked;

    if (task.isDone) {
      wrapper.querySelector("p").classList.add("doneTask");
    } else {
      wrapper.querySelector("p").classList.remove("doneTask");
    }
  });

  btnDelete.addEventListener("click", function () {
    const wrapper = this.closest(".taskWrapper");
    const id = wrapper.getAttribute("data-id");
    const task = tasksArray.find((taskItem) => taskItem.id == id);
    const index = tasksArray.indexOf(task);
    tasksArray.splice(index, 1);
    taskWrapper.remove();
    console.log(tasksArray);
  });
  todoForm.elements.task.value = "";
});

todoForm.querySelectorAll("input").forEach(function (input) {
  input.addEventListener("input", function () {
    this.classList.remove(errorClass);
    this.closest("#todo")
      .querySelectorAll(".errorText")
      .forEach((error) => error.remove());
  });
});

const filter = document.querySelector(".mySelect");
filter.addEventListener("change", filterTodo);

function filterTodo(e) {
  const filterElement = taskList.querySelectorAll("p");
  console.log(filterElement);
  filterElement.forEach(function (element) {
    const targetElement = element.parentElement;
    switch (e.target.value) {
      case "all":
        targetElement.style.display = "";
        break;

      case "done":
        if (element.classList.contains("doneTask")) {
          targetElement.style.display = "";
        } else {
          targetElement.style.display = "none";
        }
        break;

      case "inProgres":
        if (element.classList.contains("doneTask")) {
          targetElement.style.display = "none";
        } else {
          targetElement.style.display = "";
        }
        break;
    }
  });
}
