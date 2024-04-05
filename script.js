function firstWord(s) {
  if(s.indexOf(' ') == -1 || s.length == 0)
	  return s;
 let str = s.split(" ")[0];
	return str;
}
  
// Do not change the code below
 
const s = prompt("Enter String:");
alert(firstWord(s));
