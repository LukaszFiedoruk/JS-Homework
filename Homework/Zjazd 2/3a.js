let text="";
let changes;
function encrypt(text, changes)
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        let char = text[i];
        if (char.toUpperCase(text[i]))
        {
            let ch =  String.fromCharCode((char.charCodeAt(0) + changes-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((char.charCodeAt(0) + changes-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}

console.log(encrypt('Student', 1));



