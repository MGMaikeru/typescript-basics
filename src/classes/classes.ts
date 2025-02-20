import axios from "axios";
import { Countries } from "../interfaces/countries-responses.interface";
import {
  CountriesApiAxios,
  CountriesApiFetch,
  HttpAdapter,
} from "../api/countries-api";

export class Student {
  id: number;
  name: string;
  age: number;
  private _isValid: boolean;

  get isValid(): boolean {
    return this._isValid;
  }

  set isValid(validation: boolean) {
    this._isValid = validation;
  }

  constructor(
    id: number,
    name: string,
    age: number,
    private http: HttpAdapter
  ) {
    //No mas de tres parametros. Caso contrario, mandar un lista
    this.id = id;
    this.name = name;
    this.age = age;
    this._isValid = true;
  }

  joinClass() {
    console.log(`${this.name} has joined the class`);
  }

  async getScore() {
    return 100;
  }

  async getAllCountries() {
    const { data } = await axios.get<Countries[]>(
      "https://restcountries.com/v3.1/all"
    );
    return data;
  }

  async getCountries() {
    const countries = await this.http.getAllCountries();
    console.log("🚀 ~ getCountries ~ countries:", countries);
  }
}

export const countriesApi = new CountriesApiAxios();
export const countriesApiFetch = new CountriesApiFetch();
export const gustavo = new Student(1, "Gustavo", 29, countriesApi);
// gustavo.isValid;
// // console.log("🚀 ~ gustavo:", await gustavo.getScore());
// gustavo.getScore().then((score: number) => {
//   console.log("🚀 ~ score:", score);
// });
// gustavo.setAge = 30;
// console.log("🚀 ~ gustavo:", gustavo);
//gustavo.joinClass();
console.log(gustavo.getCountries());
