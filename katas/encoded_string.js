const urlEncode = function (text) {
  let encStr = "";
  if (text[0] !== " ") {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        encStr += "%20";
      } else {
        encStr += text[i];
      }
    }
    return encStr;
  } else {
    for (let i = 1; i < text.length - 1; i++) {
      if (text[i] === " ") {
        encStr += "%20";
      } else {
        encStr += text[i];
      }
    }
    return encStr;
  }
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));