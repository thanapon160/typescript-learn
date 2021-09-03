const person = {
  name: "Bob",
  age: 15,
};

console.log(person.name);

// void type return nothing

// Literals
const name2 = "Bob Alice";

const sayHello = (name: string) => `Say ${name}`;
console.log(sayHello("Hello"));

const addInt = (a: 50, b: 30): number => a + b;
console.log(addInt(50, 30));

const flip = (n: boolean) => !n;
flip(true);

function add2(a: number, b: number): number {
  return a + b;
}

// Arrays vs Tuples
const grid: (number | boolean)[][] = [
  [1, 2],
  [3, true],
];

// Type Inference --> กว้างที่สุด
const person1: [name: string, age: number, isSitting: boolean] = [
  "Poom",
  20,
  false,
];
console.log(person1);

// Any, Unknown, Never, Void
const hellox = 22;
hellox.toExponential();

// Unknown = I'm not yet sure what this type is
function add(a: unknown, b: unknown) {
  // if (typeof a === type to check)
}

// Void = this function does not return anything
function add3(): void {}

// Never => to communicate that this function will not return
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}

// Type guard
