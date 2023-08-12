
const arr = [1, 100, 2,16,27,3,4,4,5,6,89]
const arr2 = []

const map = new Map()

for (let i = 0; i < arr.length; i++) {
  map[arr[i]] = 0;
}

const mapKeys = Object.keys(map)
console.log(mapKeys);




