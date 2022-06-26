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
type Dog = {
  tail: Tail;
  bark: () => void;
};

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
