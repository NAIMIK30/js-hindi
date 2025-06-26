const name = "Naimik"
const repoCount = 50

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name + repoCount + " value" );

const gameName = new String('Naimikhr')
console.log(gameName[4]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
console.log(gameName.anchor());

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-5,-3)
console.log(anotherString);

const url = "https://Naimik.com/naimik%30shah"

console.log(url.replace('%30','03'));

console.log(url.includes('naimik'));





