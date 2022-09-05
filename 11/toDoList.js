"use strict";
const todoForm = document.forms.todo;
const taskList = document.querySelector(".taskList");
const errorClass = "error";

function getErrorElement(message) {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("errorText");
  errorMsg.textContent = message;
  return errorMsg;
}

function addErrorMessage(inputElemnt, message) {
  inputElemnt.classList.add(errorClass);
  const error = getErrorElement(message);
  inputElemnt.closest("#fieldWrapper").before(error);
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!todoForm.elements.task.value.trim().length) {
    addErrorMessage(todoForm.elements.task, "Field mustn't be empty!");
    return;
  }

  const taskWrapper = document.createElement("div");
  taskWrapper.classList.add("taskWrapper");

  const text = document.createElement("p");
  text.setAttribute("class", "taskText");
  text.textContent = todoForm.elements.task.value.trim();

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("value", "isDone");

  const btnDelete = document.createElement("button");
  btnDelete.setAttribute("class", "btnDelete");
  btnDelete.innerText = "Delete task";

  taskWrapper.append(checkbox);
  taskWrapper.append(text);
  taskWrapper.append(btnDelete);

  taskList.append(taskWrapper);

  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.closest(".taskWrapper").querySelector("p").classList.add("doneTask");
    } else {
      this.closest(".taskWrapper")
        .querySelector("p")
        .classList.remove("doneTask");
    }
  });

  btnDelete.addEventListener("click", function () {
    text.remove();
    checkbox.remove();
    btnDelete.remove();
    taskWrapper.remove();
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
