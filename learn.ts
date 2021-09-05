import { log } from "console";

const person = {
  name: "Bob",
  age: 15,
};

console.log(person.name);

// void type return nothing

// Literals
const name2 = "Bob Alice";

// const sayHello = (name: string) => `Say ${name}`;
// console.log(sayHello("Hello"));

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

//
type Person = {
  name: string;
};

type BaseProps = {
  role: string;
};

const Person3: Person | BaseProps = {
  name: "Bob",
  role: "lol",
};

//
// interface C {
//   c: string;
// }

// interface A extends C {
//   a: string;
// }
// interface B extends C {
//   b: string;
// }

// const person4: A = {
//   a: "fds",
//   c: "dsad",
// };

// Intersec
type Hello = { name: string } & { fff: number };
const hello: Hello = { name: "fdsfsdf", fff: 3 };

// Discriminated Unions
type User = { username: string };

type Action =
  | { type: "setUser"; payload: User }
  | { type: "getUser"; payload: void; error: Error };

function reducer(state: User, action: Action) {
  if (action.type === "setUser") {
    action.payload;
  }
}

// Optionals
function fetchUser(username: string, context?: unknown) {}
fetchUser("hello");

//
type A = string & number;
type K = string & "hello";
// const k: A = 5 // type never

//
interface Person2 {
  username: string;
  age?: string;
  isSitting?: boolean;
}

const person4: Person2 = {
  username: "hi",
  age: "shit",
};

// Type casting: As and As unknown
function loadTwitterFeed(hello: number) {
  const hello2 = hello as unknown as number; // หลอกโดยใช้ type unknown
  hello2.toFixed();
}
loadTwitterFeed(3);

// Enum: can comment, Union type can't comment
enum Version {
  /** version 1 */
  v1 = "v1",
  v2 = "v2",
}
Version;
function setBackend(version: Version) {
  if (version === Version.v1) {
    return true;
  }
}
console.log(setBackend(Version.v1));

//String unions
const isHello = (name: string): name is "hello" => true;

// Type Narrowing and Widening
function sayHello(name: string) {
  if (name === "string") {
    return name;
  }
  if (isHello(name)) {
    return "ýesssss";
  }
}

console.log(sayHello("hello"));

// Strict mode

enum Status {
  CHECKED,
  UNCHECKED,
}
console.log(Status); // { 0: CHECKED, 1: UNCHECKED}

enum Angle {
  RIGHT = 90,
  FULL = 360,
}
function getAngles(angle: Angle) {
  angle;
}

function processAngle(angle: Angle) {
  // switch(angle) {
  //   case Angle.RIGHT: return 90
  // }
  return angle;
}
console.log(processAngle(Angle.FULL));
console.log(Angle.FULL);

// Generic Type
function toggle<T extends string | number>(a: T): T {
  return a;
}
const result = toggle("g");

interface Book {
  id: string;
  isbn: string;
}

type ISBN = Book["isbn"];

type keyOfBook = keyof Book; // keyof ใช้ดึง key จาก interface
type valueOfBookKey = Book["isbn"];
const a: keyof Book = "id";

type b = Book;
const res: b["id"] = "gfd";

function setBookField<K extends keyof Book, V extends Book[K]>(
  key: K,
  value: V
) {
  return console.log(key, value);
}
setBookField("id", "ddd");

// Record: Utility Type - map key ไปหา value
const angles: Record<string, string> = {
  gfdgdf: "first",
};
console.log(angles);

type Record3 = {
  [P in "active" | "pending" | "check"]: number;
};
const record3: Record3 = {
  active: 4,
  pending: 0,
  check: 0,
};

// Record2 same as Record
type Record2<K extends string, V> = {
  [P in K]: V;
};

type K2 = Record2<Statuses, Book>;
const k3: K2 = {
  active: { id: "hello", isbn: "world" },
  pending: { id: "hello", isbn: "world" },
};

// Map over types => Mapped Type
type Statuses = "active" | "pending";

type A2C = { a: 1; b: 2 };
type KA = keyof A2C;
type ARresult = `-${KA}`;

type BookButton = {
  [P in keyof Book]: [Book[P], number];
};

// Partial: Utility Type
interface LanguageCode {
  en_US: string;
  de_DE: string;
}
type OptionalLangaugeCode = Partial<LanguageCode>;
const langCodeMap: Partial<LanguageCode> = {
  en_US: "fdsfdsfdsfd",
};

type Partial2<T> = {
  [P in keyof T]?: T[P];
};

type ACC = Partial2<Book>;

// Readonly: Utility Type - map ค่าทุกตัว และ type เป็น readonly
type Props = {
  readonly book: { title: string };
};
type Readyonly2<T> = {
  readonly [P in keyof T]: T[P];
};
type ACC2 = Readonly<Book>;

// Pick: Utility Type
type PartialBook = Pick<Book, "id">;

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Exclude
type LuckyNumbers = 44 | 112 | 50;

type LuckyNumbersWithout112 = Exclude<LuckyNumbers, 112>;

// Extract
type BC = Extract<LuckyNumbers, 112 | 44>;

//if T is stirng -> is string
// if T is number -> is number
type CheckType<T> = T extends string
  ? string
  : T extends number
  ? "is number"
  : T extends [infer Head, ...infer Last]
  ? ["is array", Head, Last]
  : "nope";
type ResultA = CheckType<"hello">;
type ResultB = CheckType<50>;
type ResultC = CheckType<[50, 40, 30, 20]>;

// Example
type Input = {
  title: {
    type: "string";
  };
  age: {
    type: "number";
  };
};
type Schema = {
  title: {
    type: "string";
  };
  age: {
    type: "number";
  };
  memberIds: {
    type: "array";
    value: {
      type: "number";
    };
  };
};

type Output = {
  title: string;
  age: number;
};

type Res = {
  [K in keyof Input]: Input[K]["type"];
};

type testtype = Res["age"];

interface TypeMapper {
  string: string;
  number: number;
  memberIds: [10, 20];
}
type Scalar = keyof TypeMapper;

type Res2 = {
  [K in keyof Input]: TypeMapper[Input[K]["type"]];
};

type ToMappedOutput<T> = {
  [K in keyof T]: T[K] extends { type: keyof TypeMapper }
    ? TypeMapper[T[K]["type"]]
    : never;
};
type ToMappedOutput2<T extends Record<string, { type: keyof TypeMapper }>> = {
  [K in keyof T]: TypeMapper[T[K]["type"]];
};

type MapScalar<T> = T extends { type: Scalar}
  ? TypeMapper[T['type']] : never

type ToMappedOutput3<T> = {
  [K in keyof T] : T[K] extends { type: "array", value: infer Value }
      ? MapScalar<Value>[]
      : T[K] extends { type: Scalar}
        ? MapScalar<T[K]>
        : never
};
type result2 = ToMappedOutput3<Schema>;
