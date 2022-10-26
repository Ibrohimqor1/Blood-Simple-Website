const btnOfGender = document.querySelectorAll(".gender");
const btnConfirm = document.querySelector(".btn_confirm");
const nameOfUser = document.getElementById("name");
const niknameOfUser = document.getElementById("nikname");
const ageOfUser = document.getElementById("age");
const healthOfUser = document.getElementById("health"),
  recepientCheck = document.querySelector('recepient-check');




function information() {
  btnConfirm.addEventListener("click", (e) => {
    // localStorage.setItem(`usernameOfUser${++i}`, nameOfUser.value),
    // localStorage.setItem(`niknameOfUser${i}`, niknameOfUser.value),
    // localStorage.setItem(`bithdateOfUser${i}`, birthOfUser.value),
    // localStorage.setItem(`ageOfUser${i}`, ageOfUser.value),
    // localStorage.setItem(`healthOfUser${i}`, healthOfUser.value),
    // localStorage.setItem(`bloodTypeOfUser${i}`, btnOfBloodType.value),
    // localStorage.setItem(`genderOfUser${i}`, btnOfGender.value),
    let accounts = {
      'nameOfUser': nameOfUser.value,
      'niknameOfUser': niknameOfUser.value,
      'ageOfUser': ageOfUser.value,
      'healthOfUser': healthOfUser.value,
      // 'bloodOfUser': 
    }

    localStorage.setItem('accounts', JSON.stringify(accounts))
  })
}
information()
