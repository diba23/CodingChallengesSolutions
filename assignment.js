const numbers = [1,2,3,4,5,6];
const odd = numbers.filter(number => {
    if (number % 2 === 1) {
        console.log(number);
        return true;
    }
});
console.log(odd);
//--------------------------q2-----------------
const userNames = ['john','alexander','jayden','michael','mark','isabella'];
const names = userNames.filter(item => item[0] !== 'a' && item[0] !== 'i' && item[0] !== 'o' && item[0] !== 'e');
console.log(names);
//--------------------------q3------------------
const firstName = "mark";
const lastName = "brooks";
function concats ( first, last){
  const firstName = first.charAt(0).toUpperCase() + first.slice(1);
  const lastName = last.charAt(0).toUpperCase() + last.slice(1);
  return firstName.concat(' ',lastName);
}
console.log(concats(firstName,lastName));
//--------------------------q4----------------------
function createHelloFunction(greeting) {
  return function(string) {
    return greeting.concat(" ", string);
  }
}
const greetingFn = createHelloFunction('Hello');
console.log(greetingFn('diba')); // prints 'Hello diba';
//--------------------------q5---------------------------------------
const unique = numbers.filter(number => number % 2 === 1 );
console.log(unique);
//--------------------------q6-----------------------------------
const marge = (first, second) => first.charAt(0).toUpperCase() + first.slice(1) + " " + second.charAt(0).toUpperCase() + second.slice(1);
console.log(marge(firstName,lastName));
//---------------------------(q6)2-------------------------------------------
function capital (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
function concatStr (str1, str2) {
  return str1 + " " + str2
}
function capitalStrConcat (item1, item2) {
  return concatStr(capital(item1), capital(item2))
}
console.log("q6-2", capitalStrConcat('olivia', 'smith'));
//--------------------------q7-----------------------------------------------------
function equality (obj1, obj2) {
  const findNotMatch = Object.entries(obj1).filter((item) => {
    const isequal = Object.entries(obj2).find((obj) => item[0] === obj[0] && item[1] === obj[1] );
    if (!isequal) {
      return true;
    }
  });
  return findNotMatch;
};

const testObj1 = {
  a: 2,
  caption: "a beautiful picture",
  isPossible: true,
  count: 23,
  name: 'john',
};

const testObj2 = {
  caption: "a beautiful pichture",
  a: 2,
  isPossible: false,
  count: 23,
};
console.log(equality(testObj1, testObj2));
//----------------------------q8------------------------------------
function sum (input1, ...inputs) {
  let sum = 0;
  for (const element of inputs) {
    if (Array.isArray(element)) {
      for (const item of element) {
        sum += item;
      }
    } else {
      sum += element;
    }
  }
  return sum+input1;
};

console.log(sum(1, [3, 4], -1, 8, [-5, 3, 6]));
//-----------------------------------------q9---------------------------
function emailValidation (str) {
  return (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(str) ? "you'r Email is valid" : "you'r Email is not valid");
};
console.log(emailValidation('dbpr77@gmail.com'));
console.log(emailValidation('dbpr77@gmai'));
//-----------------------------------------q10---------------------------------------
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(Date.now());
  }, 1000)
};
