//1
// function submitIfTheSame() {
//   if (myInput1.value == myInput2.value) {
//     return true;
//   } else {
//     return false;
// myInput1.style.border = " solid 2px red";
// myInput2.style.border = " solid 2px red";
// error.innerHTML = `the number is not the same`;
// error.style.color = "red";
//   }
// }

//2
// function ifBigger() {
//   if (myInput1.value > myInput2.value) {
//     return true;
//   }
//   return false;
// myInput1.style.border = " solid 2px red";
// myInput2.style.border = " solid 2px red";
// error.innerHTML = `the first input is smaller!`;
// error.style.color = "red";
// }

//3
// function isTextTheSame() {
//   if (myInput1.value == myInput2.value) {
//     return true;
//   }
// myInput1.style.border = " solid 2px red";
// myInput2.style.border = " solid 2px red";
// error.innerHTML = `the string is the same!`;
// error.style.color = "red";
//   return false;
// }

//4
// function isLengtTheSame() {
//   var strTmp1 = myInput1.value;
//   var strTmo2 = myInput2.value;
//   if (strTmp1.length == strTmo2.length) {
//     return true;
//   }
// myInput1.style.border = " solid 2px red";
// myInput2.style.border = " solid 2px red";
// error.innerHTML = `the length are not the smae!`;
// error.style.color = "red";
//   return false;
// }

//5
function ifStratCharSame() {
  var strTmp1 = myInput1.value;
  var strTmo2 = myInput2.value;
  if (strTmp1[0] == strTmo2[0]) {
    return true;
  }
  myInput1.style.border = " solid 2px red";
  myInput2.style.border = " solid 2px red";
  error.innerHTML = `the first char inputs is not the same!`;
  error.style.color = "red";
  return false;
}

//6
