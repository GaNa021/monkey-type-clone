function compareData(compareText) {
  let inputText = document.getElementById("inputText").value;

  let _inputText = inputText.split("");
  let _compareText = compareText.split("");

  for (var i = 0; i < inputText.length; i++) {
    if (inputText.charAt(i) !== compareText.charAt(i)) {
      _inputText[i] = " ";
      _compareText[i] = `<span class="text-red-500">${compareText.charAt(
        i
      )}</span>`;
    } else {
      _compareText[i] = `<span class="text-white">${compareText.charAt(
        i
      )}</span>`;
    }
  }

  document.getElementById("compareText").innerHTML = _compareText.join("");
  document.getElementById("inputText").value = _inputText.join("");
}

export default compareData;
