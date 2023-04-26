"use strict";
// wordfreq.js
function wordFreq(text) {
    const wordFreqs = {};
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
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
function displayWordFreqs() {
    const inputText = document.getElementById("inputText").value;
    const wordFreqs = wordFreq(inputText);
    const outputDiv = document.getElementById("output");
    const prettyPrintedWordCounts = JSON.stringify(wordFreqs, null, 2);
    outputDiv.innerHTML = `<pre>${prettyPrintedWordCounts}</pre>`;
}
