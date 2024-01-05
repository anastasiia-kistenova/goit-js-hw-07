const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (event) => {
const inputValue = event.currentTarget.value.trim();
output.textContent = inputValue || "Anonymous";
});