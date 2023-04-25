function prettyPrint() {
    const inputText = document.getElementById("json-input").value;
    const printOption = document.querySelector('input[name="printOption"]:checked').value;
  
    prettyPrintJson(inputText, printOption);
  }
  
  function prettyPrintJson(inputText, printOption) {
    try {
      const jsonArray = JSON.parse(inputText);
      let output = '';
  
      if (printOption === 'none') {
        output = '<pre></pre>';
      } else if (printOption === 'one') {
        const firstElement = jsonArray[0];
        const prettyJson = JSON.stringify(firstElement, null, 2);
        output = `<pre>${prettyJson}</pre>`;
      } else if (printOption === 'all') {
        jsonArray.forEach((jsonObject, index) => {
          const prettyJson = JSON.stringify(jsonObject, null, 2);
          output += `<pre>${prettyJson}</pre>`;
          if (index < jsonArray.length - 1) {
            output += '<hr>';
          }
        });
      }
  
      document.getElementById('output').innerHTML = output;
    } catch (error) {
      document.getElementById('output').innerHTML = `<pre>${error.message}</pre>`;
    }
  }
  