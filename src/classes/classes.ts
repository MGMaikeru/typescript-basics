export class Student {
  id: number;
  name: string;
  private age: number;

  get getAge(): number {
    return this.age;
  }

  set setAge(setAge: number) {
    this.age = setAge;
  }

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  joinClass() {
    console.log(`${this.name} has joined the class`);
  }
}

export const gustavo = new Student(1, "Gustavo", 29);
// gustavo.setAge = 30;
// console.log("🚀 ~ gustavo:", gustavo);
gustavo.joinClass();
