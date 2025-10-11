const button = document.getElementById("myBtn")
const sloganInput = document.getElementById("myText")
const slogan = document.getElementById("slogan")

button.addEventListener("click", () => {
    slogan.textContent = sloganInput.value;
})