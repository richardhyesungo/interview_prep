class Test {
  // name: string;

  constructor(name) {
    this.name = name;
  }

  sayHello = () => {
    console.log(`hello ${this.name}`);
  };
}

const testName = new Test("richard");
testName.sayHello();
testName.sayHello.bind("yes");
