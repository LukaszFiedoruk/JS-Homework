let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

text = text.trim().replaceAll(",", "").replaceAll(".", "").replaceAll("!", ""); 
let wordsCount = 0;
let spaceIndex = 0;

while (spaceIndex !== -1 && text.length > 0) {
  if (text[spaceIndex - 1] !== " ") {
    wordsCount++; 
  }
    spaceIndex = text.indexOf(" ", spaceIndex + 1); 
}
console.log("Words in text: ", wordsCount);