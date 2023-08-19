
const s = "a good   example";

const reverseWords = str => {
  return str.split(" ").reverse().join(" ").trim().replace(/\s\s+/g, ' ');
  // OR: return s.trim().split(/\s+/).reverse().join(' '); 
}

console.log(reverseWords(s));