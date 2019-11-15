"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the repeatedString function below.
// https://www.hackerrank.com/challenges/repeated-string/
function repeatedString(input, numberOfChars) {
  // if input only consists of a's, we can simply return the numberOfChars
  const numOfAInInput = input.split("a").length - 1;
  if (numOfAInInput === input.length) {
    return numberOfChars;
  }

  // otherwise, we need to fill up the numberOfChars with the input
  let result = 0;
  const remainder = numberOfChars % input.length;
  const full = (numberOfChars - remainder) / input.length;

  result += full * numOfAInInput;
  result += input
    .split("")
    .slice(0, remainder)
    .filter(char => char === "a").length;

  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  const n = parseInt(readLine(), 10);

  let result = repeatedString(s, n);

  ws.write(result + "\n");

  ws.end();
}
