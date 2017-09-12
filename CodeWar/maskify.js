// Practise javascript on www.codewars.com  KyleLan 2017-9-12 20:50:13

// Question 3:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Answer:

function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}