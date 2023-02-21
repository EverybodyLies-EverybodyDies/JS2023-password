let text = document.getElementById("text").innerHTML;
let password = /password: <b>[\d]{7,9}<\/b>/g;
let result = text.matchAll(password);
let results = Array.from(result);
 alert(results[0] + "   |||   " + results[1]);


