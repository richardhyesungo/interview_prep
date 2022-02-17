// class Foo {
//   #name: string;
//   constructor(rawName?: string) {
//     this.#name = rawName ?? "no name";
//   }

//   log() {
//     console.log(this.#name);
//   }
// }

// const testFoo = new Foo();
// testFoo.log();

// recursive type alias
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
      [k: string]: JSONValue;
    };

const val: JSONValue = {
  name: "mike",
  address: {
    street: "spear st",
    address: {
      street: "spear st",
      address: {
        address: {
          address: {},
        },
      },
    },
  },
};

// template type literals
type Corner = `${"top" | "bottom"}-${"left" | "right"}`;

// @ts-expect-ignore
// const num: number = "hello"
