const day=12;
const name="Vahagn";
const surname="Hakobyan";
const dateOfBirth=[12,09,1999];

if(name===surname){
  console.log("name and surname are the same");
} else if(name!==surname){
  console.log("name and surname are not the same");
}
const e=name+ " " +surname;
console.log(e);

if(day===dateOfBirth[0]){
  console.log("Birthday is on "+12+"th of the month");
}else
console.log("whatever it is");

console.log("I guess I'm done");