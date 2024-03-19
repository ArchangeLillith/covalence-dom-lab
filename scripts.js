//Event listener to make sure the body is loaded
document.addEventListener("DOMContentLoaded", () => {
	let squareCounter = 1;

	// Create the button
	const button = document.createElement("button");
	//Make the text and add it to the button
	const buttonText = document.createTextNode("Add Square");
	button.appendChild(buttonText);
	//Add the button to the dom
	document.body.appendChild(button);

	//Make the holder for all the squares
	let container = document.createElement("div");
	//Add styling for the container
	container.classList.add("square-container");
	//Add the container to the page if it's the first time
	document.body.appendChild(container);

	//Give the button an onclick
	button.addEventListener("click", () => {
		//Make the div that is the square
		let div = document.createElement("div");
		//Style the div
		div.style.backgroundColor = randomColor();
		div.style.color = "white";
		div.style.height = "50px";
		div.style.width = "50px";
		div.style.margin = ".5%";
		div.style.class = "square";
		div.style.display = "flex";
		div.style.alignItems = "center";
		div.style.justifyContent = "center";
		div.classList.add("square");
		div.setAttribute("id", squareCounter);
		//Make it change color on click
		div.addEventListener(
			"click",
			() => (div.style.backgroundColor = randomColor())
		);
		div.addEventListener("dblclick", () => {
			if (div.id % 2 === 0) {
				document.getElementById(parseInt(div.id) + 1).remove();
			} else {
				document.getElementById(parseInt(div.id) - 1).remove();
			}
		});
		//Add listener to display the number within the square when the mouse enters
		const innerHtml = document.createTextNode(div.id);
		div.addEventListener("mouseenter", () => {
			div.appendChild(innerHtml);
		});

		div.addEventListener("mouseout", () => {
			div.removeChild(innerHtml);
		});

		//Add the square to the container
		container.appendChild(div);
		//Incriment the counter to ensure the next box has the correct number
		squareCounter++;
	});
});

function randomColor() {
	var o = Math.round,
		r = Math.random,
		s = 255;
	return (
		"rgba(" +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		o(r() * s) +
		"," +
		r().toFixed(1) +
		")"
	);
}
