function showProps(obj, objKeyName) {
  return (objKeyName in obj);
}
let person = {
  city: "Moscow"
};
console.log(showProps(person, "city"));
console.log(showProps(person, "name"));