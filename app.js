//task1
let fullName=prompt("Enter your fullName: ")
let names=fullName.split(" ");                  

let capitalLetter=names.map(name=>name[0]).join(" ");
console.log(capitalLetter);                     

//task2
let firstAndLastName=prompt("Enter your name and surname:");    

let reverseName=firstAndLastName.split(" ").reverse().join(" ");
console.log(reverseName);                                         

//task3
let nameAndSurname=prompt("Enter your nameAndSurname:");              
let splitFullName=nameAndSurname.split("");
console.log(splitFullName);

let counter=0;
for (let index = 0; index < splitFullName.length; index++) {
    if (splitFullName[index]==" ") {
        continue;
    } 
    else{
        counter++;
    }
    console.log(splitFullName[index]);
}
console.log("Number of letters: " + counter);
