# Reverse-Word-In-Sentence
Here's how the code works step by step:
const s = "This is a sunny day"; - You define a string s containing a sentence.
const str = s.split(' '); - You split the sentence into words based on space (' ') characters and store the result in an array called str. Now, str contains an array of words: ["This", "is", "a", "sunny", "day"].
You iterate over each word in the str array using a for loop:
a. let word = str[i]; - You initialize a variable word to hold the current word from the array.
b. let tempWord = ""; - You initialize an empty string tempWord to store the reversed version of the word.
c. for (let j = word.length - 1; j >= 0; j--) { - You loop through the characters of the word from the last character to the first character.
d. tempWord = tempWord + word[j]; - In each iteration of the inner loop, you add the current character to the tempWord in reverse order.
e. After the inner loop completes, you have the reversed version of the word stored in tempWord.
f. str[i] = tempWord; - You replace the original word in the str array with its reversed version.
const reversedStr = str.join(' '); - You join the array of reversed words back together into a single string, separated by spaces. This creates the reversed sentence.
console.log(reversedStr); - You log the reversed sentence to the console.
