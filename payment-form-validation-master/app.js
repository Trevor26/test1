document.addEventListener("DOMContentLoaded", function() {

	document
		.getElementById("payment-form")
		.addEventListener("submit", function(event) {
			event.preventDefault();

			
			var firstName = document
			.getElementById("firstname")
			.value;

			var lastName = document
			.getElementById("lastname")
			.value;

			var cc = document
			.getElementById("credit-card")
			.value;

			var expiration = document
			.getElementById("expiration")
			.value;

			var cvc = document
			.getElementById("cvc")
			.value;

			if (firstName === "" || lastName === "") {
				alert("Please enter a first name and a last name!");
				return;
			} 

			if (cc.length !== 16) {
				alert("Invalid credit card number");
				return;
			}

			var ccdNum = parseInt(cc);

			if (isNaN(ccNum)) {
				alert("Please enter only numbers for credit card");
				return;
			}

			if (cvc.length !== 3) {
				alert("Invalid CVC");
				return;
			}

			var cvcNum = parseInt(cvc);

			if (isNaN(cvcNum)) {
				alert("Please enter only numbers for CVC");
				return;
			}

			var exArray = expiration.split("/");

			var exMonth = exArray [0];
			var exDay = exArray [1];

			if (exMonth.length !== 2 || exDay.length !== 2) {
				alert("Please enter your expiration in format MM/DD");
				return;
			}

			var exMonthInt = parseInt(exMonth);
			var exDayInt = parseInt(exDay);

			if (isNaN(exMonthInt) || isNaN(exDayInt)) {
				alert("Please enter only numbers for expiration date");
				return;
			}
		});



});