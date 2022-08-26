function onButtonClick() {
  const colorBlue = "newcolor";
  const textInPar = document.querySelector(".text");
  if (textInPar.classList.contains(colorBlue)) {
    textInPar.classList.remove(colorBlue);
  } else {
    textInPar.classList.add(colorBlue);
  }
};
