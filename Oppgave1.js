//Første oppgave i JavaScript 16 -23 mai

//Lage et regnestykke

let x = 56;
let y = 75;
let z = x * y;
console.log(z);

//Dele 40 på 6

let a = 40;
let b = 6;
let c = a / b;
console.log(c);

//Det som er til overs (Modulo)

remainder = 40 % 6;
console.log(remainder);

//bools

let n = true;
console.log(n);
let m = false;
console.log(m);

//lag en if/else settning

let myAge = 35;

if (myAge > 34) {
  console.log("you're old!");
} else {
  console.log("You are young!");
}

//switch for å endre sko

let shoes = "rain";

switch (shoes) {
  case "rain":
    console.log("Use green boots");
    break;
  case "sun":
    console.log("Take the white sneakers");
    break;
  case "snow":
    console.log("Use black boots");
    break;
  default:
    console.log("Go for the red ones!");
}

//lage en ternary settning - "tilhengerkalkulator"

let totWeight = 3500;
let whichLicense = totWeight <= 3500 ? "licenseB" : "licenseB96";
console.log(whichLicense);
