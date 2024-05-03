
// Contact us form
const form = document.getElementsByTagName("form")[0];

// Popup (success)
const popup = document.getElementById("popup");

// Close popup button
const closePopupButton = document.getElementById("close");

// When the button is clicked.....
closePopupButton.addEventListener("click", () => {
	// ...Hide the popup
	popup.style.display = "none";
})

// Function to be called when the contact us form is submitted
const submitForm = (e) => {
		// Prevent the form from reseting all inputs when submission is succesfull
		e.preventDefault();

		// Calling the emailjs Send function to send an email
		emailjs.sendForm("service_ok97ds6", "template_r1rduz8", form).then(response => {
			// Show the success popup
			popup.style.display = "block";
		}, e => console.log(e))
}

form.addEventListener('submit', submitForm)