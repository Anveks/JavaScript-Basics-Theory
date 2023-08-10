const text = `
apples, pears # and bananas
grapes
bananas !apples
`;

const markers = ['!', '#'];

function solution(input, markers) {
  let inputArr = input.split('\n'); // Split by line breaks instead of spaces

  for (let i = 0; i < inputArr.length; i++) { // Initialize i and use < instead of <=

    inputArr = inputArr.map((e) => {
      const index = e.indexOf(markers[i]); // looking for the indices of the markers

      if (index !== -1) {
        return e.substring(0, index) // in case there is a marker - substr it 
      } else {
        return e.replace(/\s*$/,'') // checking for trailing whitespaces and removing them
      };
    });
  }

  return inputArr.join('\n').trim()
}

const res = solution(text, markers);

