var signupform = $('#signupform');
var welcome = $('#welcomemessage');
var listname = localStorage.getItem('name');
var del = $('#del');
var createform = $('#createform');
var todolist = $('#todolist');
var editmodal = $('#edittodomodal');
var editInput = $('#editedToDo');
var editId = $('#editId');
var saveChanges = $('#saveChanges');
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
    var list = JSON.parse(localStorage.getItem('list'));
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
    var list = JSON.parse(localStorage.getItem('list'));
    var elem = list[list.findIndex(function (e) { return e.id == id; })];
    showEditModal(elem);
}
function saveEdit(id, changedTodo) {
    var list = JSON.parse(localStorage.getItem('list'));
    var newElem = {
        id: id,
        todo: changedTodo
    };
    var elem = list[list.findIndex(function (e) { return e.id == id; })];
    list[list.indexOf(elem)] = newElem;
    localStorage.setItem('list', JSON.stringify(list));
    renderList();
}
function deleteToDo(id) {
    var list = JSON.parse(localStorage.getItem('list'));
    list.splice(list.findIndex(function (e) { return e.id == id; }), 1);
    localStorage.setItem('list', JSON.stringify(list));
    renderList();
}
function renderList() {
    todolist.empty();
    if (localStorage.getItem('list')) {
        JSON.parse(localStorage.getItem('list')).map(function (data) {
            var html = $("\n                <li class=\"list-group-item\">\n                    " + data.todo + "<br>\n                    <button class=\"btn btn-sm btn-success\" onclick=\"editToDo('" + data.id + "')\">Edit</button>\n                    <button class=\"btn btn-sm btn-danger\" onclick=\"deleteToDo('" + data.id + "')\">Delete</i></button>\n                </li>\n            ");
            todolist.append(html);
        });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    renderList();
    signupform.on('submit', function (e) {
        e.preventDefault();
        var name = $('#listname').val().toString();
        createList(name);
    });
    welcome.text(listname + "'s List");
    del.on('click', function () {
        deleteList();
    });
    createform.on('submit', function (e) {
        e.preventDefault();
        var id = 'todo' + Date.now();
        var todo = $('#todo').val().toString();
        var payload = {
            id: id,
            todo: todo
        };
        createToDo(payload);
    });
    saveChanges.on('click', function () {
        var id = editId.val();
        var changedTodo = editInput.val();
        saveEdit(id, changedTodo);
    });
});
