const person = function(obj) {
  obj = {city: "Moscow"}
for (let key in obj) {
  console.log(key+ ': ' + obj[key]);
}  
 }
person();