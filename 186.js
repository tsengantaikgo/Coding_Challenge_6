//? Question 1:
/*
Clean the room function: given an input of[1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20], make a function that organizes these into individual array that is ordered.
For example answer(ArrayFromAbove) should return: [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591].
*/
{
  let testArr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
  function compareNumbers(a, b) {
    return a - b;
  }
  function cleanRoom(arr) {
    arr.sort(compareNumbers);
    let time = arr.length; // 15
    let newArr = [];
    let tempARR = [];
    tempARR.push(arr[0]); // 1
    for (let i = 1; i <= time; i++) {
      if (arr[i] == tempARR[0]) {
        tempARR.push(arr[i]);
      } else {
        if (tempARR.length == 1) {
          newArr.push(tempARR);
        } else {
          newArr.push([tempARR]);
        }
        tempARR = []; //清空
        tempARR.push(arr[i]);
      }
    }
    console.table(newArr);
  }

  cleanRoom(testArr);
}
//* Bonus: Make it so it organizes strings differently from number types.i.e. [1, "2", "3", 2] should return [[1, 2], ["2", "3"]]
{
  let testArrstr = [1, "2", "3", 2, 4, "33", 2, "23"];
  function compareNumbers(a, b) {
    return a - b;
  }
  function cleanRoomStr(arr) {
    arr.sort(compareNumbers);
    console.log(arr); // [1, '2', 2, 2, '3', 4, '23', '33']
    let newArr = [];
    let strArr = [];
    let numArr = [];
    for (item of arr) {
      if (typeof item === "string") {
        strArr.push(item);
      } else if (typeof item === "number") {
        numArr.push(item);
      }
    }
    newArr.push([numArr], [strArr]);
    return newArr;
  }
  cleanRoomStr(testArrstr);
}

//?Question 2: Write a javascript function that takes an array of numbers and a target number.
/*
The function should find two different numbers in the array that, when added together, give the target number.
For example: answer([1, 2, 3], 4)should return [1, 3]
*/

function targetNumber(arr, target) {
  let arrLength = arr.length; //
  let answerArr = [];

  for (let i = 0; i < arrLength; i++) {
    for (let k = i + 1; k <= arrLength; k++) {
      if (arr[i] + arr[k] === target) {
        answerArr.push([arr[i], arr[k]]);
      }
    }
  }
  return answerArr;
}
targetNumber([1, 2, 2, 3], 4);

//?Question 3: Write a function that converts HEX to RGB.
/*
Then Make that function auto-dect the formats
if you enter HEX color format it returns RGB   // (255,255,255)
if you enter RGB color format it returns HEX.  // #32a852
*/
//* multiply it by 16, then add the second number of the pair.
//A = 10; B = 11; C = 12; D = 13; E = 14; F = 15;

//* Divide the first figure by 16: 201/16 = 12 + 0.5625 (remainder).
//*  Multiply the remainder by 16(0.5625 * 16 = 9).

function engToNum(char) {
  let eng = char.toUpperCase();
  switch (eng) {
    case "A":
      eng = Number(10);
      break;
    case "B":
      eng = Number(11);
      break;
    case "C":
      eng = Number(12);
      break;
    case "D":
      eng = Number(13);
      break;
    case "E":
      eng = Number(14);
      break;
    case "F":
      eng = Number(15);
      break;
  }
  return eng;
}

function numToEng(num) {
  switch (num) {
    case 10:
      num = "A";
      break;
    case 11:
      num = "B";
      break;
    case 12:
      num = "C";
      break;
    case 13:
      num = "D";
      break;
    case 14:
      num = "E";
      break;
    case 15:
      num = "F";
      break;
  }
  return num;
}

function convert(color) {
  // HEX TO rgb
  if (color.at(0) === "#") {
    let rgb = [];
    let rgbArr = [];
    let hexStr = color.substring(1); // 32a852 : 6
    for (num of hexStr) {
      //all change to number
      if (Number.isNaN(Number(num))) {
        //NOT NUMBER THEN CHANGE TO NUMBER
        rgbArr.push(engToNum(num));
      } else {
        rgbArr.push(Number(num));
      }
    }
    for (let current = 0; current < 6; current += 2) {
      console.log(current);
      rgb.push(rgbArr[current] * 16 + rgbArr[current + 1]);
    }
    return `RGB : (${rgb.toString()})`;
  } else {
    // rgb TO HEX
    let hexStr = "#";
    let rgbTemp = color.substring(1, color.length - 1).split(","); // ['255', '255', '255']
    for (num of rgbTemp) {
      let numOne = Math.floor(Number(num) / 16);
      let numTwo = (Number(num) / 16 - numOne) * 16;
      if (numOne > 9) {
        numOne = numToEng(numOne);
      }
      if (numTwo > 9) {
        numTwo = numToEng(numOne);
      }
      hexStr = hexStr.concat(numOne, numTwo);
    }

    return `HEX: ${hexStr}`;
  }
}

convert("(255,255,255)");
convert("#32a852");
