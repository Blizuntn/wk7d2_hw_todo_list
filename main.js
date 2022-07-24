console.log("hello");

let todosEl = document.getElementById("todos");
let formEl = document.getElementById("todoForm");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (todoInput.value !== " ") {
    let todoInput = document.getElementById("todoInput");
    let todosHTML = `
  <div class="card" id="card_1">
        <div class="card-body">
          <h4 class="card-title">${todoInput.value}</h4>
        </div>
    </div>
  `;
    todosEl.innerHTML += todosHTML;
    todoInput.style.backgroundColor = "white";
    todoInput.value = " ";
  } else {
    todoInput.style.backgroundColor = "red";
  }
});
let clearbutton = document.getElementById("clearbutton");
clearbutton.addEventListener("click", (event) => {
  event.preventDefault();
  todosEl.innerHTML = " ";
});
