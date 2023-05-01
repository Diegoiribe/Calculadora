const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
	item.onclick = () => {
		if (item.id == "clear") {
			display.innerText = "";
		} else if (item.id == "backspace") {
			let string = display.innerText.toString();
			display.innerText = string.substr(0, string.length - 1);
		} else if (display.innerText != "" && item.id == "equal") {
			display.innerText = eval(display.innerText);
		} else if (display.innerText == "" && item.id == "equal") {
			display.innerText = "Null";
			setTimeout(() => (display.innerText = ""), 2000);
		} else if (display.innerText != "" && item.id == "marleny") {
			display.innerText;
		} else if (display.innerText == "" && item.id == "marleny") {
			display.innerText = "Yo siempre puedo con tal de verte, te quiero <3";
			setTimeout(() => (display.innerText = ""), 5000);
		} else {
			display.innerText += item.id;
		}
	};
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;

themeToggleBtn.onclick = () => {
	calculator.classList.toggle("dark");
	themeToggleBtn.classList.toggle("active");
	isDark = !isDark;
};
