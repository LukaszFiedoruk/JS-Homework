let height = 8;
for ( let i =1; i <= height; i++) {
    let spacesCount = height - i;
    let hashesCount = i;
    let output = "";
    for (let j = 0; j <= spacesCount; j++) {
        output = output + " ";
    }
    for (let k = 1; k <= hashesCount; k++) {
        output += "#";
    }
    console.log(output);
}
   