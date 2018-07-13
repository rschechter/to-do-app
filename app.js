function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    newLi.classList.add("mdl-button mdl-js-button mdl-button--raised");
    newLi.classList.add("mdl-textfield mdl-js-textfield mdl-textfield--floating-label");
    newLi.classList.add("mdl-textfield__label");
    newLi.classList.add("mdl-textfield__input");
    newLi.classList.add("mdl-layout__content");

    // attach the checkbox to the Li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    // empty the input
    newToDoText.value = '';

    // create delete button
    let deleteButton = document.createElement('button');

    //set button text
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    //attach delete button to newLi
    newLi.appendChild(deleteButton);
  });


window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
