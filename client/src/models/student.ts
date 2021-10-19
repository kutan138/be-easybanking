export interface Student {
  _id: string | number;
  name: string;
  age: number;
  marks: number;
  gender: "male" | "female";
  city: string;

  createAt?: number;
  updateAt?: number;
}
