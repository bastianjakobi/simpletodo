let signupform: JQuery = $('#signupform');
let welcome: JQuery = $('#welcomemessage');
let listname: string = localStorage.getItem('name');
let del: JQuery = $('#del');
let createform: JQuery = $('#createform');
let todolist = $('#todolist');

function createList(name) {
    localStorage.setItem('name', name);
    localStorage.setItem('hasList', 'true');
    localStorage.setItem('list', JSON.stringify([]));
    window.location.replace('/todo.html');
}
function deleteList() {
    localStorage.clear();
    window.location.replace('/index.html');
}
function createToDo(todo) {
    let list = JSON.parse(localStorage.getItem('list'));
    list.push(todo);
    localStorage.setItem('list', JSON.stringify(list));
    createform.trigger('reset');
    renderList();
}
function editToDo(id) {
    alert('Request to edit ' + id);
}
function deleteToDo(id) {
    alert('Request to delete ' + id);
}
function renderList() {
    todolist.empty();
    if (localStorage.getItem('list')) {
        JSON.parse(localStorage.getItem('list')).map((data) => {
            let html = $(`
                <li class="list-group-item">
                    ${data.todo}<br>
                    <button class="btn btn-sm btn-success" onclick="editToDo('${data.id}')"><i class="fas fa-pen"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteToDo('${data.id}')"><i class="fas fa-trash"></i></button>
                </li>
            `);
            todolist.append(html);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderList();
    signupform.on('submit', (e) => {
        e.preventDefault();
        let name = $('#listname').val().toString();
        createList(name);
    });

    welcome.text(listname + "'s List");

    del.on('click', () => {
        deleteList();
    });

    createform.on('submit', (e) => {
        e.preventDefault();
        let id = 'todo' + Date.now();
        let todo = $('#todo').val().toString();
        let payload = {
            id: id,
            todo: todo,
        };
        createToDo(payload);
    });
});
