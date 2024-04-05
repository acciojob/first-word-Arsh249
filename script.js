function firstWord(s) {
  if(s.indexOf(' ') == -1 || s.length == 0)
	  return s;
	if(s[0]==" "){
		let str = s.split(" ")[1];
		return str;
	}
 let str = s.split(" ")[0];
	return str;
}

// Do not change the code below
 
const s = prompt("Enter String:");
alert(firstWord(s));
