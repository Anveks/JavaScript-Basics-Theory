const s = "cbaebabacd"
const p = "abc"

const findAnagrams = (s, p) => {
    const chunksOfThree = s.match(/.{1,3}/g);
    for (let i = 0; i <= chunksOfThree.length; i++){
      console.log(chunksOfThree[i].split('').sort().join('').match(p));

      if(chunksOfThree[i].split('').sort().join('').match(p)){
        console.log('match');
        return s.indexOf(chunksOfThree[i])
      }

    }
};

console.log(findAnagrams(s, p));