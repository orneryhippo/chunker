"use strict";

function processText() {
    const inputText = document.getElementById("inputText").value;
    const jsonKey = document.getElementById("json-key").value;
    const wordsPerChunk = document.getElementById("wordsPerChunk").value;
    const jsonTextArray = JSON.parse(`[${inputText}]`);
    prettyPrintJson(jsonTextArray);
    const extractedValues = extractValuesFromJsonArray(jsonTextArray, jsonKey);
    if (wordsPerChunk === undefined || wordsPerChunk === null || wordsPerChunk.toString().trim() === '') {
        document.getElementById("output").innerHTML = extractedValues.join("\n\n<p/><p/>\n\n");
    }
    else {
        const joinedText = extractedValues.join(" ");
        const chunks = splitTextIntoChunks(joinedText, Number(wordsPerChunk));
        const outputText = chunks.join("\n\n<p/><p/>\n\n");
        console.log(outputText);
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
        // const value = jsonObject[jsonKey];
        // if (value !== undefined && value !== null && value.toString().trim() !== '') {
        //     extractedValues.push(value);
        // }
    }
    return extractedValues;
}

function prettyPrintJson(jsonInput) {
    try {
        // Parse the input JSON string
        const jsonObj = JSON.parse(jsonInput[0]);
        // const firstElement = jsonArray[0];
        // const jsonObj = JSON.parse(firstElement);
        console.log(jsonObj);
        // Pretty-print the JSON object with a 2-space indentation
        const prettyJson = JSON.stringify(jsonObj, null, 2);

        // Set the output div's innerHTML with the pretty-printed JSON
        document.getElementById("pretty").innerHTML = `<pre>${prettyJson}</pre>`;
    } catch (error) {
        // If there's an error (e.g., invalid JSON input), display the error message
        document.getElementById("output").innerHTML = `<pre>${error.message}</pre>`;
    }
}
  
// function extractValuesFromJsonArray(jsonTextArray, jsonKey) {
//     const extractedValues = [];
//     for (const jsonObject of jsonTextArray) {
//         const value = jsonObject[jsonKey];
//         if (value !== undefined && value !== null && value.toString().trim() !== '') {
//             extractedValues.push(value);
//         }
//     }
//     return extractedValues;
// }
function splitTextIntoChunks(text, wordsPerChunk) {
    const words = text.split(" ");
    const chunks = [];
    while (words.length > 0) {
        const chunk = words.splice(0, wordsPerChunk).join(" ");
        chunks.push(chunk);
    }
    return chunks;
}
