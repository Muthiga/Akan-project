function getAkanName () {
    let yearOfBirth = document.getElementById("Year").value;
    let monthOfBirth = Number(document.getElementById("Month").value);
    let dayOfBirth = Number(document.getElementById("Day").value);
    let gender1 = document.getElementsByName("gender");
}
function getGender(){
    for(let gender of gender1){
        if (gender.checked){
            return gender.value;
        }
    }
    }
let genderValue = getGender();
console.log(genderValue);

function monthValidate() {
if (monthOfBirth <=0 || monthOfBirth > 12){
    return false
} else{
    return true;
}
}
function dayValidate (){
    if (monthOfBirth === 1 && Number(yearOfBirth)%4=== 0){
        if (dayOfBirth > 28 || dayOfBirth < 1){
            return false;
        } else if (monthOfBirth=== 1 && dayOfBirth > 29){
            return false
        } else if (monthOfBirth === 1 && dayOfBirth <=0){
            return false;
        } else{
            return true;
        }
    }else if (dayOfBirth <= 0 || dayOfBirth > 31){
        return false;
    }else {
        return true;
    }
}
let monthvalue = monthValidate();
let dayvalue = dayValidate();
 
let dayOfTheWeek = math.round ( ( (yearOfBirth/4) -2*yearOfBirth-1) + ((5*yearOfBirth/4) ) + ((26*(monthOfBirth+1)/10)) + dayOfBirth )%7;

let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  let index=dayOfTheWeek;
  console.log(index);
  
