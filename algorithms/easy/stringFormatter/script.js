
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.body.append(document.createElement('p'));
document.querySelector('button').innerHTML = 'convert';
document.querySelector('p').innerHTML = 'result: ';
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
button.disabled = true;

// Listen for the input event on the textarea
textarea.addEventListener('input', function () {
  button.disabled = textarea.length === "";
});

button.addEventListener('click', () => {

  const text = textarea.value.trim();
  const rows = text.split('\n');
  const space = 20;
  let repeatNum = 1;
  const okSign = '✅'

  for (const row of rows) {
    const words = row.trim().split('_');
    words[0] = words[0].toLocaleLowerCase();
    words[1] = words[1][0].toUpperCase() + words[1].slice(1, words[1].length);
    const camelCase = words.join('');
    const camelEdited = camelCase.padEnd(space, ' ') + okSign.repeat(repeatNum);
    console.log(camelEdited);
    repeatNum += 1;
  }
});