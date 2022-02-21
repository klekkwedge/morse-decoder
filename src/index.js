const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let summaryStr = "";

  for (let i = 0; i < expr.length; i += 10) {
    let extractedStr = expr.substr(i, 10);

    while (extractedStr) {
      if (extractedStr[0] === "0") {
        extractedStr = extractedStr.slice(1);
      } else {
        break;
      }
    }
    let encodedStr = "";
    for (let j = 0; j < extractedStr.length; j += 2) {
      if (Number(extractedStr[j] + extractedStr[j + 1]) === 10) {
        encodedStr += ".";
      } else if (Number(extractedStr[j] + extractedStr[j + 1]) === 11) {
        encodedStr += "-";
      } else {
        encodedStr = " ";
        break;
      }
    }
    let symbol = "";
    if (encodedStr === " ") {
      symbol = " ";
    } else {
      symbol = MORSE_TABLE[encodedStr];
    }
    summaryStr += symbol;
  }
  return summaryStr;
}

module.exports = {
  decode,
};
