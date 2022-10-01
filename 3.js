function createObject () {
  return Object.create(null);
}
const student = createObject();
console.log(student);
console.log(Object.getPrototypeOf(student));