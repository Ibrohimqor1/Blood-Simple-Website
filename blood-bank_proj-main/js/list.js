const container = document.getElementById('card-container')
window.onload = loadTasks;


function loadTasks() {
    if (localStorage.getItem("accounts") == null) return container.innerHTML += '<p class="accounts-none">К Сожалению сейчас нет крови в наличии<p>';

    // Берет все данные из локалки и ковертирует в массив
    let accounts = Array.from(JSON.parse(localStorage.getItem("accounts")));

    // Loop through the tasks and add them to the list
    accounts.forEach(account => {
        const card = document.createElement('div');
        container.append(card)
        card.innerHTML =
            `<div class="card">
        <h3>${account.name}</h3>
        <p>Возраст: ${account.age} лет</p>
        <p>Группа крови: ${account.blood}</p>
        <a class="card_btn" onclick="recive(this)">Записаться</a>
    </div>`;
    });
}

const recive = (btn) => {
    btn.innerText = 'Вы записаны'
    let date = new Date().getDate()
    alert(`Приходите на прием крови ${date + 1} Октября в 13:00`);
}