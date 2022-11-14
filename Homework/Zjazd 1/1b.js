let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

let soughtLetter = "a";
let soughtCounter = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i].toLowerCase() === soughtLetter.toLowerCase()) {
    soughtCounter++;
  }
}
console.log(soughtLetter + " number is text is: " + soughtCounter);
