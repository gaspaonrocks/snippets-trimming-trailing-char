module.exports = (str, char) => {
  let newStr = "";
  let index = (start = 0);
  let finish = str.length - 1;

  while (str[index] === char) {
    start++;
    index++;
  }

  index = str.length - 1;

  while (str[index] === char) {
    finish--;
    index--;
  }

  for (let i = start; i < finish; i++) {
    newStr += str[i];
  }

  return newStr;
};