// boolean
let flag: boolean = false;

// number
let decimal: number = 256;
let hex: number = 0xfff;
let binary: number = 0b0000;
let octal: number = 0o123;

// string
let color: string = 'white';
color = 'black';
let myColor: string = `my color si ${color}`;

//array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuple
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; Error

//any
let whatever: any = 0;
whatever = 'something';
whatever = false;

// unknown
const certainlyNumbers: number[] = ['0'];
const maybeNumbers: any[] = ['0'];
const probablyNumbers: unknown[] = ['0'];

certainlyNumbers[0].toFixed(1); // ok
maybeNumbers[0].toFixed(1); // ok
probablyNumbers[0].toFixed(1); // Error

// void
function logger(message: string): void {
  console.log(message);
}

let unusable1: void = undefined;

// null / undefined
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}

// object
let objectBrace: {};
let objectType: object;

objectBrace = true;
objectBrace = 0;
objectType = false; // Error
objectType = 1; // Error

// Intersection
// type Dog = {
//   tail: Tail;
//   bark: () => void;
// };

type Bird = {
  wing: Wing;
  fly: () => void;
};

type kimera = Dog & Bird;

function returnNever(): never {
  throw new Error();
}
let unexistenceType: string & number & boolean = returnNever();

let problematicNumber: string & number = '0'; // Error

// Union
let value: boolean | number | string;
value = false;
value = 1;
value = '2';

let numberOrStrings: (number | string)[];
numberOrStrings = [0, '1'];
numberOrStrings = [0, '1', false]; // Error

let nullableString: string | null;
nullableString = null;
nullableString = 'notNull';

let nullableStrings: (string | null)[] = [];
nullableStrings.push('1');
nullableStrings.push(null);
nullableStrings.push(false);

// Literal
let myName: 'Taro';
myName = 'Taro';
// myName = 'Jiro';
myName.toLowerCase();

let users: 'Taro' | 'Jiro' | 'Hanako';
users = 'Jiro';

let zero: 0;
zero = 0;
// zero = 1
zero.toFixed(1);

let bit: 8 | 16 | 32 | 64;
bit = 8;
// bit = 12;

let truth: true;
truth = true;
// truth = false

// typeof
let asString: string = '';
let typeofValue: typeof asString;
typeofValue = 'value';
// typeofValue = 9;

let myObject = { foo: 'foo' };
let anotherObject: typeof myObject = { foo: '' };
anotherObject['foo'] = 'value';
// anotherObject['bar'] = 'value'; Error

//keyof
type someType = {
  foo: string;
  bar: string;
  baaz: string;
};

let someKey: keyof someType;

const myObject1 = {
  foo: 'FOO',
  bar: 'BAR',
  baz: 'BAZ',
};
let myObjectKey: keyof typeof myObject1;
myObjectKey = 'bar';
// myObjectKey = 'qax'; Error

const indexedObject = {
  0: 0,
  1: 1,
};
let indexedKey: keyof typeof indexedObject;
indexedKey = 1;
// indexedKey = 2; Error

//アサーション
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

let someValue1: any = 'this is a string';
let strLength1: number = (someValue1 as string).length;

// クラス
class Creature {
  numberOfHands: number;
  numberOfFeet: number;
  constructor(numberOfHands: number, numberOfFeet: number) {
    this.numberOfHands = numberOfHands;
    this.numberOfFeet = numberOfFeet;
  }
}
const creature = new Creature(0, 4);

class Dog extends Creature {
  bark: string;

  constructor(bark: string) {
    super(0, 4);
    this.bark = bark;
  }

  barking() {
    return `${this.bark}! ${this.bark}`;
  }
  shakeTail() {
    console.log(this.barking());
  }
}

class Human extends Creature {
  name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  greet() {
    return `Hello! I'm ${this.name}`;
  }
  shakeHands() {
    console.log(this.greet());
  }
}
const dog = new Dog('bow-wow');
const human = new Human('Hanako');

class Human1 extends Creature {
  protected name: string;
  constructor(name: string) {
    super(2, 2);
    this.name = name;
  }
  protected greet() {
    return `Hello! I'm ${this.name}.`;
  }
  public shakeHands() {
    console.log(this.greet());
  }
}

class Taro extends Human1 {
  constructor() {
    super('Taro');
  }
  public greeting() {
    console.log(this.greet());
  }
}

const taro = new Taro();
taro.greeting(); // public メンバーは実行可能
taro.great(); // protected メンバーは実行不可
taro.shakeHands(); // 親クラスのpublic メンバーは実行可能

//列挙型
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
const left = Direction.Left;

enum Ports {
  USER_SERVICE = '8080',
  REGISTER_SERVICE = '8081',
  MEDIA_SERVICE = '8888',
}

enum XPorts {
  USER_SERVICE = '8080',
}
enum XPorts {
  REGISTER_SERVICE = '8081',
}
enum Ports {
  MEDIA_SERVICE = '8888',
}
