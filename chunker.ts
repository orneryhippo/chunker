interface HTMLElementWithValue extends HTMLElement {
    value: string;
}

function processText() {
    const inputText = (document.getElementById("inputText") as HTMLElementWithValue).value;
    const jsonKey = (document.getElementById("json-key") as HTMLElementWithValue).value;
    const wordsPerChunk = (document.getElementById("wordsPerChunk") as HTMLElementWithValue).value;
    const jsonTextArray = JSON.parse(`[${inputText}]`);
    const extractedValues = extractValuesFromJsonArray(jsonTextArray, jsonKey);
    if (wordsPerChunk === undefined || wordsPerChunk === null || wordsPerChunk.toString().trim() === '') {
        (document.getElementById("output") as HTMLElementWithValue).innerHTML = extractedValues.join("\n\n<p/><p/>\n\n");
    } else {
        const joinedText = extractedValues.join(" ");
        const chunks = splitTextIntoChunks(joinedText, Number(wordsPerChunk));
        const outputText = chunks.join("\n\n<p/><p/>\n\n");
        (document.getElementById("output") as HTMLElement).innerHTML = outputText;
    }
}

function extractValuesFromJsonArray(jsonTextArray: Record<string, any>[], jsonKey: string): any[] {
    const extractedValues: any[] = [];
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

function splitTextIntoChunks(text: string, wordsPerChunk: number): string[] {
    const words = text.split(" ");
    const chunks: string[] = [];

    while (words.length > 0) {
        const chunk = words.splice(0, wordsPerChunk).join(" ");
        chunks.push(chunk);
    }

    return chunks;

}
