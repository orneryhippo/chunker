function parseJson() {
     // Get the keyname from the user.
    var keyname = document.getElementById("keyname-input");
    if (keyname) {
      var keynameValue = keyname.value;
    } else {
      keynameValue = "name";
    }
    console.log(keynameValue);
    // Get the JSON input from the user.
    var json = document.getElementById("json-input").value;
    // console.log(json.length);
    // Parse the JSON into a JavaScript object.
    var obj = JSON.parse(json);
    console.log(obj);
   
    
    // Get the list of items from the JSON object.
    // var items = obj.items;
    // console.log(items);
    // Create a new unordered list to display the results.
    var results = document.getElementById("results");
  
    // Loop through the items and add them to the unordered list.
    for (var i = 0; i < obj.length; i++) {
      var item = obj[i];
      console.log(item);  
      var result = document.createElement("li");
      result.textContent = item[keyname];
      console.log(item[keyname]);
      results.appendChild(result);
      results.appendChild(document.createElement("li"));
    }
  }
  