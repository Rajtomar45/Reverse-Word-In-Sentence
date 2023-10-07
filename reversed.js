const s = "This is a sunny day";
const str = s.split(' ');
for(let i = 0; i < str.length; i++){
    let word = str[i];
    let tempWord = "";
    for(let j = word.length - 1; j >= 0; j--){
        tempWord = tempWord + word[j];
    }
     str[i] = tempWord;
}
const reversedStr = str.join(' ');
console.log(reversedStr);