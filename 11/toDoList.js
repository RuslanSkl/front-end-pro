"use strict";
const lineThrough = "checkbtn";
document.querySelector("#addTask").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("You didn't fill in the field!");
  } else {
    document.querySelector("#newTasks").innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector("#newtask input").value}
              </span>
              <button class="delete">
                  Delete
              </button>
              <input type=checkbox class="check"></input>
          </div>
      `;
    let currentTasks = document.querySelectorAll(".delete");
    for (let i = 0; i < currentTasks.length; i++) {
      currentTasks[i].onclick = function () {
        this.parentNode.remove();
      };

      let check = document.querySelectorAll(".check");
      check.addEventListener("change", function () {
          this.parentNode.classList.toggle(lineThrough);
        });
      
    }
  }
}
