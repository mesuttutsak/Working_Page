const form = document.querySelector('#addForm');
const addBtn = document.querySelector('#addTodo');
const removeBtn = document.querySelector('#removeTodo');
const filter = document.querySelector('#filter');
const todoList = document.querySelector('#todoList');
var liItems = document.querySelector('#todoList').getElementsByTagName('li');
// const todoListAll = document.querySelectorAll('#todoList li');

addBtn.addEventListener('click', (e) => {
    if (getFormValue() !== "") {
        newTodo(getFormValue())
        form.value = "";
    };
});

function newTodo(text) {
    // 'li' Elementi ekleme
    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-group-item-action d-flex flex-row";

    // 'li'nin' içine 'span' ekleme
    const listItemText = document.createElement("span");
    listItemText.className = "me-auto";
    listItemText.innerText = text;
    listItem.appendChild(listItemText);

    // 'li'nin' içine iconlar için div ekleme
    const listItemIconWrapper = document.createElement("div");
    listItemIconWrapper.className = "d-flex align-items-center";
    listItem.appendChild(listItemIconWrapper);

    // 'div'in' içine IconButton  ekle

    //  Plus Icon
    const listItemIconButton1 = document.createElement("button");
    listItemIconButton1.className = "btn btn-default btn-xs pull-right";
    listItemIconButton1.innerHTML = "<i class='fa fa-plus-circle'></i>";
    listItemIconWrapper.appendChild(listItemIconButton1);

    listItemIconButton1.addEventListener('click', (e) => {
        newTodo(text)
    })

    //  Delete Icon
    const listItemIconButton2 = document.createElement("button");
    listItemIconButton2.className = "btn btn-default btn-xs pull-right";
    listItemIconButton2.innerHTML = "<i class='fa fa-minus-circle'></i>";
    listItemIconWrapper.appendChild(listItemIconButton2);

    listItemIconButton2.addEventListener('click', (e) => {
        deleteTodo(listItem)
    })

    todoList.appendChild(listItem);
};

function deleteTodo(selectItem) {
    todoList.removeChild(selectItem)
};

removeBtn.addEventListener('click', (e) => {
    let listLenght = todoList.children.length;
    for (i = 0; i < listLenght; i++) {
        todoList.removeChild(todoList.children[0]);
    }
});

filter.addEventListener('keyup', function (ev) {
    var text = ev.target.value;
    var pattern = new RegExp(text, 'i');
    for (var i = 0; i < liItems.length; i++) {
        var item = liItems[i];
        if (pattern.test(item.innerText)) {
            item.classList.remove("hidden");
            console.log("remove => \ntext =" +item.innerText + "\nclasslist = " + item.classList);
        }
        else {
            item.classList.add("hidden");
            console.log("add => \ntext =" +item.innerText + "\nclasslist = " + item.classList);
        }
    
    }
});

function getFormValue() {
    return form.value.trim();
}
