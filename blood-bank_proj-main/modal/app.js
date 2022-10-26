const input = document.querySelector(".input"),
  result = document.querySelector("p");
  let words;

input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    words = e.target.value.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    words.unshift("#");
    let hashtag = words.join("");
    modal.style.display = "flex";
    result.innerText = hashtag;
  }
});

const modal = document.querySelector(".modal");

const none = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    none();
  }
};
