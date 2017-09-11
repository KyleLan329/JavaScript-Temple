// Practise javascript on www.codewars.com  KyleLan 2017-9-11 23:45:55

// Question 1:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Answer:

function validatePIN (pin) {
  //return true or false
  let reg =/^(\d{4})$|^(\d{6})$/;
  return reg.test(pin);
}