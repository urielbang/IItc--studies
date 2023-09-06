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
// function ifStratCharSame() {
//   var strTmp1 = myInput1.value;
//   var strTmo2 = myInput2.value;
//   if (strTmp1[0] == strTmo2[0]) {
//     return true;
//   }
//   myInput1.style.border = " solid 2px red";
//   myInput2.style.border = " solid 2px red";
//   error.innerHTML = `the first char inputs is not the same!`;
//   error.style.color = "red";
//   return false;
// }

//7
function ifAllStatmentTrue() {
  var fullNAme = myInput1.value;
  var emailStr = myInput2.value;
  var dateStr = myInput3.value;
  var passStr = myInput4.value;
  var confStr = myInput5.value;
  var isAllTrue = false;
  var strErrors = "";
  var dateNow = new Date();
  var dateUser = new Date(dateStr);

  //check name
  if (fullNAme.length > 10) {
    isAllTrue = true;
  } else {
    strErrors += `the letters name is small of 10 `;
    isAllTrue = false;
  }

  //check email
  if (
    emailStr[emailStr.length - 3] == "c" &&
    emailStr[emailStr.length - 2] == "o" &&
    emailStr[emailStr.length - 1] == "m"
  ) {
    isAllTrue = true;
  } else {
    strErrors += `the end of the email is not com! `;
    isAllTrue = false;
  }

  //check age
  if (dateNow.getFullYear() - dateUser.getFullYear() > 18) {
    isAllTrue = true;
  } else {
    strErrors += `the age is too small! `;
    isAllTrue = false;
  }
  //check password

  if (passStr == confStr) {
    isAllTrue = true;
  } else {
    strErrors += `the passwords not the same!`;
    isAllTrue = false;
  }
  //checing if all true sendind the form

  if (isAllTrue) {
    return true;
  } else {
    error.innerHTML = strErrors;
    return false;
  }
}
