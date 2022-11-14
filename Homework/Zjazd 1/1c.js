let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let textCopy = text
  .trim()
  .replaceAll(",", "")
  .replaceAll(".", "")
  .replaceAll("!", ""); // create text copy
let longestWord = "";

while (textCopy.length > 0) {
  // as long as there are words in text copy
  let spaceIndex = textCopy.indexOf(" "); // find next space
  let currentWord;

  if (spaceIndex === -1) {
    // if no spaces, we are at the end of sentence
    currentWord = textCopy;
    textCopy = "";
  } else {
    currentWord = textCopy.slice(0, spaceIndex); // slice current word
    textCopy = textCopy.slice(spaceIndex + 1); // remove sliced part from text copy
  }

  if (currentWord.length > longestWord.length) {
    // if current word is longer than longest
    longestWord = currentWord; // save it as longes
  }
}
console.log("Longest word is: " + longestWord);