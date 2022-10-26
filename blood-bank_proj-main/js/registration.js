// On app load, get all tasks from localStorage
window.onload = loadTasks;

// On form submit add task
let regBtn = document.getElementById("button")
regBtn.addEventListener("click", e => {
    addTask();
    location.href = '../pages/login.html'
});

function loadTasks() {
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("accounts") == null) return;

    // Get the tasks from localStorage and convert it to an array
    let accounts = Array.from(JSON.parse(localStorage.getItem("accounts")));

    // Loop through the tasks and add them to the list
    accounts.forEach(account => {
        console.log(account.name);
    });
}

function addTask() {
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const blood = document.getElementById("blood");
    // const list = document.querySelector("ul");
    // return if task is empty
    if (name.value === "" || age.value === "" || blood.value === "") {
        alert("Заполните все поля!");
        return false;
    }

    // add task to local storage
    localStorage.setItem("accounts", JSON.stringify([...JSON.parse(localStorage.getItem("accounts") || "[]"), { name: name.value, age: age.value, blood: blood.value }]));
    //clear input
    name.value = ''
    age.value = ''
    blood.value = ''
}