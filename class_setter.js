class Person {
   constructor(name) {
      this.setName(name);
   }
   getName() {
      return this.name;
   }
   setName(newName) {
      newName = newName.trim();
      if(newName === '') {
         throw 'The name cannot be empty'
      }
      this.name = newName;
   }
}

var person = new Person('john')
// john.getName()
person.setName('jane smith')
person.getName()


