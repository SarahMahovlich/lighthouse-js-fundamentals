const whichSchool  = function (age) {
  if (age < 13) {
    whichSchool = "Elementary School";
  } else if (age > 13 && age < 18) {
    whichSchool = "Secondary School";
  } else (age > 18) {
    whichSchool = "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));


const whichSchool  = function (age) {
  console.log(age)
    if (age < 13) {
      return "Elementary School";
    } else if (age > 13 && age < 18) {
      return "Secondary School";
    } else (age > 18) {
      return "Lighthouse Labs";
    }
}
  
  
  
  if (age < 13) {
    whichSchool = "Elementary School";
  } else if (age > 13 && age < 18) {
    whichSchool = "Secondary School";
  } else (age > 18) {
    whichSchool = "Lighthouse Labs";
  }
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));