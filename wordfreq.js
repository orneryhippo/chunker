"use strict";
// wordfreq.js
function wordFreq(words) {
    const wordFreqs = {};
    
    for (const word of words) {
        if (wordFreqs[word]) {
            wordFreqs[word]++;
        }
        else {
            wordFreqs[word] = 1;
        }
    }
    return wordFreqs;
}
// wordfreq.js
function countWordTuples(words, n) {
    const wordTuples = {};
  
    for (let i = 0; i <= words.length - n; i++) {
      const tuple = words.slice(i, i + n).join(' ');
      if (wordTuples[tuple]) {
        wordTuples[tuple]++;
      } else {
        wordTuples[tuple] = 1;
      }
    }
  
    return wordTuples;
}
function displayWordFreqs() {
    const inputText = document.getElementById("inputText").value;
    const wordsPerTuple = Number(document.getElementById("wordsPerTuple").value);
    const words = inputText.toLowerCase().match(/\b\w+\b/g) || [];
    let wordFreqs = {};
    if (wordsPerTuple == 1) {
        wordFreqs = wordFreq(words);
    } else {
        wordFreqs = countWordTuples(words, wordsPerTuple);
    }
    const outputDiv = document.getElementById("output");
    const prettyPrintedWordCounts = JSON.stringify(wordFreqs, null, 2);
    outputDiv.innerHTML = `<pre>${prettyPrintedWordCounts}</pre>`;
}


