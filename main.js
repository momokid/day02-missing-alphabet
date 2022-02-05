const btnFindAlphabet = document.getElementById("btnFindAlphabet");
const txtString = document.getElementById("textLetter");
const lblDisplay = document.getElementById("display");

btnFindAlphabet.addEventListener("click", (e) => {
  e.preventDefault();

  if (txtString.value.length == 0) {
    alert("Cannot process empty string");
    txtString.style.borderColor="red";
    txtString.focus();
  } else {
    let missing = fearNotLetter(txtString.value);

    missing == undefined
      ? (display.innerText = "No missing alphabet")
      : (display.innerText = `${missing.toUpperCase()}/${missing.toLowerCase()}`);
  }
});

function fearNotLetter(str) {
  for (let i = str.charCodeAt(0); i < str.charCodeAt(str.length - 1); i++) {
    if (str.indexOf(String.fromCharCode(i)) === -1) {
      return String.fromCharCode(i);
    }
  }
}
