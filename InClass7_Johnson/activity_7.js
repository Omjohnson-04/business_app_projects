const button = document.getElementById("myBtn")
const headerInput = document.getElementById("myText")
const header = document.getElementById("header")

button.addEventListener("click", () => {
    header.textContent = headerInput.value;
})