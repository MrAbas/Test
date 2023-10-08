let title = document.querySelector("title");
console.log(title);

function showAlert(event) {
  alert("Всё работает");
}

let elem = document.querySelector("#anchor");
elem.classList.toggle("styles_button");
elem.classList.toggle("styles_button2");
