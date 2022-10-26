const login = document.getElementById('login')
const loginBtn = document.getElementById('login-btn')
window.onload = loadTasks;


function loadTasks() {
    // check if localStorage has any tasks
    // if not then return
    if (localStorage.getItem("accounts") == null) return;

    // Берет все данные из локалки и ковертирует в массив
    let accounts = Array.from(JSON.parse(localStorage.getItem("accounts")));

    // Loop through the tasks and add them to the list
    loginBtn.addEventListener('click', () => {
        accounts.forEach(account => {
            if (login.value === account.name) {
                location.href = '../pages/list.html'
            } else {
                console.log(account.name);
            }
        });
    })
}

