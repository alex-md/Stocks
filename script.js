const submitButton = document.querySelector('#submit-button');
const symbolElement = document.querySelector('#symbol');

submitButton.addEventListener('click', function () {
	// Get the value of the input element
	const inputValue = document.querySelector('input').value;

	// Set the text content of the #symbol element to the input value
	symbolElement.textContent = inputValue;

	// Set the visibility of the #symbol element to visible
	symbolElement.style.visibility = 'visible';
});