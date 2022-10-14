const input = document.getElementById("input");
const checkBtn = document.getElementById("check");
const target = document.getElementById("target");
const vowels = ["a", "i", "u", "e", "o"];
let words,
  count = 0;

checkBtn.addEventListener("click", () => {
  words = input.value.toLowerCase();
  for (let i = 0; i < words.length; i++) {
    if (vowels.indexOf(words[i]) != -1) {
      count++;
    }
  }
  target.innerHTML =
    count == 1
      ? `There is <strong>${count}</strong> vowel`
      : `There are <strong>${count}</strong> vowels`;
  count = 0;
});
