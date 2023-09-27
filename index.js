"use strict";

const generateBtn = document.getElementById("generateBtn");
const textField = document.getElementById("textField");

generateBtn.addEventListener("click", generateJoke);

async function generateJoke() {
  const jokes = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const jokeData = await jokes.json();
  const joke = jokeData.joke;

  textField.textContent = joke;
  textField.classList.add("speech-bubble");

  textField.addEventListener(
    "animationend",
    function () {
      textField.classList.remove("speech-bubble");
    },
    { once: true }
  );
}
