import axios from "axios";
import { Countries } from "../interfaces/countries-responses.interface";

export class CountriesApi {
  public URL: string = "";

  async getAllCountries() {
    const { data } = await axios.get<Countries[]>(this.URL);
    return data;
  }
}
