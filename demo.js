let productName = document.getElementById('product-name');
let remainChars = document.getElementById('remain-chars');



let maxAllowedText = productName.maxLength;

function updataRemainingCharacters(event){
  let enteredText = event.target.value;
  let enteredTextLenght = enteredText.length;

  let remainingCharacters = maxAllowedText - enteredTextLenght;
  remainChars.textContent = remainingCharacters;
}


productName.addEventListener('input', updataRemainingCharacters);






















