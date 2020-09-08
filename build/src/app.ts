let signupform: JQuery = $('#signupform');
let welcome: JQuery = $('#welcomemessage');
let listname: string = localStorage.getItem('name');
let del: JQuery = $('#del');
let createform: JQuery = $('#createform');
let todolist = $('#todolist');
let editmodal = $('#edittodomodal');
let editInput = $('#editedToDo');
let editId = $('#editId');
let saveChanges = $('#saveChanges');

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
function showEditModal(elem) {
    editInput.val(elem.todo);
    editId.val(elem.id);
    editmodal.modal((show = true));
}
function editToDo(id) {
    let list = JSON.parse(localStorage.getItem('list'));
    let elem = list[list.findIndex((e) => e.id == id)];
    showEditModal(elem);
}
function saveEdit(id, changedTodo) {
    let list = JSON.parse(localStorage.getItem('list'));
    let newElem = {
        id: id,
        todo: changedTodo,
    };
    let elem = list[list.findIndex((e) => e.id == id)];
    list[list.indexOf(elem)] = newElem;
    localStorage.setItem('list', JSON.stringify(list));
    renderList();
}
function deleteToDo(id) {
    let list = JSON.parse(localStorage.getItem('list'));
    list.splice(
        list.findIndex((e) => e.id == id),
        1
    );
    localStorage.setItem('list', JSON.stringify(list));
    renderList();
}
function renderList() {
    todolist.empty();
    if (localStorage.getItem('list')) {
        JSON.parse(localStorage.getItem('list')).map((data) => {
            let html = $(`
                <li class="list-group-item">
                    ${data.todo}<br>
                    <button class="btn btn-sm btn-success" onclick="editToDo('${data.id}')">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteToDo('${data.id}')">Delete</i></button>
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
    saveChanges.on('click', () => {
        let id = editId.val();
        let changedTodo = editInput.val();
        saveEdit(id, changedTodo);
    });
});
