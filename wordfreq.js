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
    const sortedWordFrequencies = sortByFrequency(wordFreqs);
    // const prettyPrintedWordCounts = JSON.stringify(wf, null, 2);
    // outputDiv.innerHTML = `<pre>${prettyPrintedWordCounts}</pre>`;
    
    const tableHTML = createTable(sortedWordFrequencies);
    outputDiv.innerHTML = tableHTML;
}
function sortByFrequency(wordTuples) {
    const sortedTuples = Object.entries(wordTuples).sort((a, b) => b[1] - a[1]);
    return sortedTuples;
  }
  function createTable(sortedWordFrequencies) {
    let table = '<table border="0" cellspacing="0" cellpadding="5"><tr><th>Word Tuple</th><th>Frequency</th></tr>';
    sortedWordFrequencies.forEach(([wordTuple, frequency]) => {
      table += `<tr><td>${wordTuple}</td><td>${frequency}</td></tr>`;
    });
    table += '</table>';
    return table;
  }
  

