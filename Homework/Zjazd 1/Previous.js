let sentence = "This is an example";

let sentenceSecond = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                       consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                       dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                       proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
// 1. Count how many words it contains

function countWord(sentence) {
  return sentence.split(" ").length;
}

console.log(countWord(sentence));

function countWord(sentenceSecond) {
  return sentenceSecond.split(" ").length;
}

console.log(countWord(sentenceSecond));
/* Can I connect two in one, function countWord(str) and show
            using only one command of console.log ?
            I tried do like below but display a return of one, first one sentence.

            Example:
            function countWord (sentence, sentenceSecond) {
            return sentence.split (" ").length;
            return sentenceSecond.split (" ").length;
        }
            console.log(countWord (sentence, sentenceSecond));*/

// 2. Count how many letter “A”  is in it.

let quantity = /[a-z]/;
let quantityBig = /[A-Z]/;
console.log(sentence.search(quantity));
console.log(sentence.search(quantityBig));

//   Why doesn't display 1 in second line in console ?

let quantitySecond = /[a-z]/;
let quantitySecondBig = /[A-Z]/;
console.log(sentenceSecond.search(quantitySecond));
console.log(sentenceSecond.search(quantitySecondBig));

//   Documentation shows that it's has to be work but in big letters doesn't ok.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

let count = 0;
let position = sentence.indexOf("A");

while (position !== -1) {
  count++;
  position = sentence.indexOf("A", position + 1);
}

console.log(count);

let positionSecond = sentenceSecond.indexOf("t");

while (positionSecond !== -1) {
  count++;
  positionSecond = sentenceSecond.indexOf("t", positionSecond + 1);
}
console.log(count);

/*   I found as well this method but I can't figure out the way of logic of
     condition in statement 'while'. Why we need compare postionSecond, as the 
     fact of existence letter "t", with equality operator of value "-1" ? And then
     in arguments of function there is + 1. I dont get it :(
     */

// 3. Display longest word

       function longestWord(string) {
        let str = string.split(" ");
        let longest = 0;
        for (let i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }
      console.log(longestWord(sentence));

      function longestWord(string) {
        let str = string.split(" ");
        let longest = 0;
        for (let i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }
      console.log(longestWord(sentenceSecond));

 
// 4. Display how many words of length same as the longest is in the string
 function longestWord(string) {
        let str = string.split(" ");
        let longest = 0;
        for (let i = 0; i < str.length; i++) {
            if (longest < str[i].length) {
                longest = str[i].length;
                word = str[i];
            }
        }
        return word;
    }
        function num(string) {
          let str = string.split(" ");
          let anyWord = str.length;
          for ( i = 0; i < word.length; i++) {
              if ( anyWord == i);{
                 finalNum = i + anyWord;
              }
          }
          return finalNum;
        }
        console.log(num(sentenceSecond));
/* In general it's works but the finalNum it's 191. I didn't count the words but I know
that it isn't true. For sure I did mistake and I think the problem it's in method 'for' 
because it's working and working around but I dont know how to stop after whole sentence.
*/
      


// Question:
/* How can I make the vertical, white lines on the left can disappear ? 
 It's so annoying. */
