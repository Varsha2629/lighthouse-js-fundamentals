const whichSchool  = function (age) {
  // Your code in here ...
  var school = "";
  if(age < 13){
    school = "Elementary School";
  } else if(age >= 13 && age <= 18){
    school = "Secondary School";
  } else {
    school = "Lighthouse Labs";
  }
  console.log(school);
  return school;
  
}