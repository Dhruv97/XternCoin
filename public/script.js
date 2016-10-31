$(document).ready(function(){

	
	var coins = 0;
	var target = Math.floor(Math.random() * 10); 
	function handleGuess() {


		if(target == $("#guess").val()) {


			return true;

		}

		return false;

	}

	function getCoins() {


		return coins;
	}


	function startGuessing() {


		if(handleGuess() == true) {
			alert("Correct!");
			coins++;
			$("#coins").text(getCoins());
			target = Math.floor(Math.random() * 10); 
		} else {

			alert("Incorrect! Try again!");
		}

	}

	$("#btnEarnCoins").click(function() {


		startGuessing();
		

	});



});