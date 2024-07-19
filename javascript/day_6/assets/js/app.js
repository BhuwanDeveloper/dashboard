function addEventListener() {
    document.querySelector("#addBtn").addEventListener("click", handleAddNew);
    document.querySelector("#view_all").addEventListener("click", toggleView);
  }
  const toDoItems = [];
  function handleAddNew(event) {
    event.preventDefault();
    const inputItem = document.querySelector("input");
    const todoItem = inputItem.value;
    if (todoItem !== "") {
      toDoItems.unshift(todoItem);
      populateToDoItems(toDoItems.slice(0, 5));
      showTotalCount();
      inputItem.value = "";
  
      const bodyElement = document.querySelector("body");
      const bodyHeight = window.innerHeight;
      const wrapperHeight = document.querySelector(".wrapper").offsetHeight;
  
      if (wrapperHeight > bodyHeight) {
        bodyElement.classList.add("fix-todo-center");
      } else {
        bodyElement.classList.remove("fix-todo-center");
      }
    }
  }
  function showTotalCount() {
    document.querySelector("#total").innerHTML = toDoItems.length;
  }
  
  function populateToDoItems(toDoItems) {
    let list = "";
    for (value of toDoItems) {
      list += `<div><span>${value}</span> <input type="checkbox" ></div>`;
    }
    document.querySelector(".list").innerHTML = list;
    const allCheckboxes = document.querySelectorAll("input[type='checkbox']");
    allCheckboxes.forEach((checkbox, index) => {
      checkbox.addEventListener("click", (event) => removeToDoItem(event, index));
    });
  }
  function removeToDoItem(event, index) {
    if (event.target.checked) {
      toDoItems.splice(index, 1);
      populateToDoItems(toDoItems.slice(0, 5));
      showTotalCount();
    }
  }
  function toggleView(){
    const textContent = document.querySelector("#view_all").textContent;
    if(textContent === 'View all') {
        populateToDoItems(toDoItems);
    }
      populateToDoItems(toDoItems);
      if(toDoItems.length > 5) {
        document.querySelector("#view_all").textContent = "View less";
      }
      
  }
  addEventListener();
  
  
  
  
  
  
  
  