var signupform = $('#signupform');
var welcome = $('#welcomemessage');
var listname = localStorage.getItem('name');
var del = $('#del');
var createform = $('#createform');
var todolist = $('#todolist');
function createList(name) {
    localStorage.setItem('name', name);
    localStorage.setItem('hasList', 'true');
    localStorage.setItem('list', JSON.stringify([]));
    window.location.replace('/views/todo.html');
}
function deleteList() {
    localStorage.clear();
    window.location.replace('/views/index.html');
}
function createToDo(todo) {
    var list = JSON.parse(localStorage.getItem('list'));
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
        JSON.parse(localStorage.getItem('list')).map(function (data) {
            var html = $("\n                <li class=\"list-group-item\">\n                    " + data.todo + "<br>\n                    <button class=\"btn btn-sm btn-success\" onclick=\"editToDo('" + data.id + "')\"><i class=\"fas fa-pen\"></i></button>\n                    <button class=\"btn btn-sm btn-danger\" onclick=\"deleteToDo('" + data.id + "')\"><i class=\"fas fa-trash\"></i></button>\n                </li>\n            ");
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
});
