console.log('I\'m Konrad');


let wordsCount = 0;
let spacesCount = 0;
while (spacesCount !== -1 && text.length >0) {
    if (text[spacesCount - 1] !== " ") {
        wordsCount++;
    }
    spacesCount = text.indexOf(" ", spacesCount + 1);
    
}

