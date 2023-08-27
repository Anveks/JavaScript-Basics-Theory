
const uniqueInOrder = str => {

  const result = []; // ABCAB
  const hash = {};

  for(let i = 0; i < str.length; i++) {

    if (!hash.hasOwnProperty(str[i])) {
      hash[str[i]] = 1;
    } else {
      ++hash[str[i]];
    }

    if (str[i] !== str[i + 1] && hash[str[i]] !== 1){
      result.push(str[i]);
    }
  }

  return result;
};

console.log(uniqueInOrder("AAAABBBCCDAABB"));