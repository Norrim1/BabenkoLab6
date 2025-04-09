let s = prompt("Слова:");
let words = s.split(/\s+/).filter(word => word.trim() !== '');
let uniqueWords = [...new Set(words)];
let result = uniqueWords.join(' ');
alert(result);