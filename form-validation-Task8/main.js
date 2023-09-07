var counter = 0;
var count = 30;
function userObjectForm() {
  var worker = {};
  var nameWorker = nameUSer.value;
  var lastNAmeValue = lastName.value;
  var dateUserValue = dateUser.value;
  var email = emailUSer.value;
  var phoneUser = phone.value;
  var isAllTrue = false;
  var yearUser = new Date(dateUserValue).getFullYear();
  var currectYear = new Date().getFullYear();

  //check name
  if (nameWorker[0] == nameWorker[0].toUpperCase()) {
    isAllTrue = true;
  } else {
    nameLAbel.innerHTML = `have to start with big letter!`;
    nameLAbel.style.color = "red";
    isAllTrue = false;
  }

  //check lastname

  if (lastNAmeValue.length < 20) {
    isAllTrue = true;
  } else {
    labelNAme.innerHTML = `this is to many letters!`;
    labelNAme.style.color = "red";
    isAllTrue = false;
  }

  //check date
  if (currectYear - yearUser > 16 && currectYear - yearUser < 65) {
    isAllTrue = true;
  } else {
    dateLAbel.innerHTML = `your age is not between 16 - 65`;
    dateLAbel.style.color = "red";
    isAllTrue = false;
  }

  //check email
  if (email.lastIndexOf(".com") != -1 || email.lastIndexOf(".co.il") != -1) {
    isAllTrue = true;
  } else {
    labelEmail.innerHTML = `your email is not correct!`;
    labelEmail.style.color = "red";

    isAllTrue = false;
  }

  //check phone
  if (phoneUser[0] == 0 && phoneUser.length <= 10) {
    isAllTrue = true;
  } else {
    isAllTrue = false;
  }

  if (isAllTrue) {
    worker.name = nameWorker;
    worker.lastname = lastNAmeValue;
    worker.birthDate = dateUserValue;
    worker.email = email;
    worker.phone = phoneUser;

    return true;
  } else {
    counter++;
    if (counter == 4) {
      var interval2 = setInterval(displayTimeAfterFour, 1000);
    }
    return false;
  }
}

function showClock() {
  var dateNow = new Date();
  document.getElementById(
    "clock"
  ).innerHTML = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
}
setInterval(showClock, 1000);
document.body.innerHTML += `<h3 id="myH3"></h3>`;
function displayTimeAfterFour() {
  if (count > 0) {
    document.getElementById("myH3").innerHTML = `you are blocked to ${count--}`;
    btnSubmit.disabled = true;
  } else {
    btnSubmit.disabled = false;
    document.getElementById("myH3").innerHTML = "";
    location.reload();
    clearInterval(interval2);
  }
}
