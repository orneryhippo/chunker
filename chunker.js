"use strict";
function processText() {
    const inputText = document.getElementById("inputText").value;
    const jsonKey = document.getElementById("json-key").value;
    const wordsPerChunk = document.getElementById("wordsPerChunk").value;
    const jsonTextArray = JSON.parse(`[${inputText}]`);
    const extractedValues = extractValuesFromJsonArray(jsonTextArray, jsonKey);
    if (wordsPerChunk === undefined || wordsPerChunk === null || wordsPerChunk.toString().trim() === '') {
        document.getElementById("output").innerHTML = extractedValues.join("\n\n---\n\n");
    }
    else {
        const joinedText = extractedValues.join(" ");
        const chunks = splitTextIntoChunks(joinedText, Number(wordsPerChunk));
        const outputText = chunks.join("\n\n---\n\n");
        document.getElementById("output").innerHTML = outputText;
    }
}
function extractValuesFromJsonArray(jsonTextArray, jsonKey) {
    const extractedValues = [];
    for (const jsonObject of jsonTextArray) {
        for (const elem of jsonObject) {
            const value = elem[jsonKey];
            if (value !== undefined && value !== null && value.toString().trim() !== '') {
                extractedValues.push(value);
            }
        }
    }
    return extractedValues;
}
function splitTextIntoChunks(text, wordsPerChunk) {
    const words = text.split(" ");
    const chunks = [];
    while (words.length > 0) {
        const chunk = words.splice(0, wordsPerChunk).join(" ");
        chunks.push(chunk);
    }
    return chunks;
}
