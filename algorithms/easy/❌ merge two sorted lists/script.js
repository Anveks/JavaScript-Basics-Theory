

var mergeTwoLists = function(list1, list2) {

  for (const value of list2) {
    list1.push(value);
  }

  const newArr = new Map(...list1);


};

console.log(mergeTwoLists([1,2,4], [1,3,4]));