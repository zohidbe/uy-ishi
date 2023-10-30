var chances = 5;
var randomNumber = Math.floor(Math.random() * 100) + 1; 

alert("Men o'ylagan raqamni toping (1 dan 100 gacha), 5 ta imkoniyatingiz bor.");

function guessNumber() {
  var userGuess = prompt("Raqamni kiriting:");
  var guess = parseInt(userGuess);

  if (isNaN(guess)) {
    alert("Siz noto'g'ri kiritdingiz. Faqat raqamni kiriting.");
  } else if (guess === randomNumber) {
    alert("Tabriklayman! Siz to'g'ri topdingiz. O'ylagan raqam: " + randomNumber);  } else {    chances--;    if (chances > 0) {      var message = "Noto'g'ri! Yana urinib ko'ring. " + chances + " ta imkoniyatingiz qoldi.";      if (guess < randomNumber) {        message += " Raqam katta.";      } else {        message += " Raqam kichik.";      }      alert(message);      guessNumber();    } else {      alert("Siz 5 ta imkoniyatingizni bajardingiz. O'ylagan raqam: " + randomNumber);    }  }}guessNumber();