/*jshint esversion:6*/

const ToDoApp = {
  rootElement: '#app',
  todos: [],

  start: function(){
    this.cacheDOM();
    this.bindEvents();
    this.render();
  },
  cacheDOM: function(){
    this.root = document.querySelector(this.rootElement);
    this.createForm = this.root.querySelector('.create-form');
    this.taskInput = this.root.querySelector('.task-input');
    this.todoList = this.root.querySelector('.todo-list');
  },
  bindEvents: function(){
    this.createForm.addEventListener('submit', (event) => this.addTodo(event));
  },
  addTodo: function(event){
    event.preventDefault();
    const taskValue = this.taskInput.value;
    if(!taskValue){
      return;
    }

  const todo = {
    task: taskValue,
    isComplete: false,
  };

  this.todos.push(todo);
  this.render();
  this.taskInput.value = '';
  },
  cacheDeleteButtons: function(){
    this.deleteButtons = this.root.querySelectorAll('.delete');
  },
  bindDeleteEvents: function(){
    this.deleteButtons.forEach((button, index) => {
      button.addEventListener('click', () => this.deleteTodo(index));
    });
  },
  deleteTodo: function(index){
    this.todos.splice(index, 1);
    this.render();
  },
  addLi: function(todo) {
    const li = document.createElement('li');
    const liContent = `${todo.task}`;
    li.textContent = liContent;
    return li;
  },
  render: function() {
    const lis = this.todos.map(todo => this.addLi(todo));
    this.todoList.innerHTML = '';
    lis.forEach(li => this.todoList.appendChild(li));
    this.cacheDeleteButtons();
    this.bindDeleteEvents();

}

};
ToDoApp.start();

 // const lis = this.todos
 //            .map(todo => `<li>${todo.task}<button class="delete">X</button></li>`)
 //            .join('');
 // this.todoList.innerHTML = lis;
