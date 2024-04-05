function firstWord(s) {
  if(s.indexOf(' ') == -1 || s.length == 0)
	  return s;
 let str = "";
	for (let i = 0; i < s.length; i++) {
		if(s[i] == " "){
			return str;
		}
		else{
			str+=s[i];
		}
	}
}
 
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
