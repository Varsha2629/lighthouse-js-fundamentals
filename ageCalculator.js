function ageCalculator(name, yearOfBirth, currentYear){
    let age = currentYear - yearOfBirth;
    let str = name + " is " + age + " years old.";   
    return str;
  }
  console.log(ageCalculator("Miranda", 1983, 2015));
  console.log(ageCalculator("Ferdinand", 1988, 2015));