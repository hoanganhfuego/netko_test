function convertClipString(s, k) {
  let originAl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let alphabetString = originAl.slice(k) + originAl.slice(0, k);
  if (k > originAl.length && originAl.length % k !== 0) {
    k = Math.floor(k % originAl.length);
    alphabetString = originAl.slice(k) + originAl.slice(0, k);
  }
  let result = "";
  for (let i = 0; i < s.length; i++) {
    let index = originAl.indexOf(s[i].toUpperCase());
    if (index < 0) {
      result = result + s[i];
    } else {
      if (s[i] === s[i].toUpperCase()) {
        result = result + alphabetString[index];
      } else {
        result = result + alphabetString[index].toLowerCase();
      }
    }
  }
  return result;
}
