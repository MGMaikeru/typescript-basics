import axios from "axios";
import { Countries } from "../interfaces/countries-responses.interface";

export interface HttpAdapter {
  getAllCountries: () => {};
}

export class CountriesApiAxios implements HttpAdapter {
  public URL: string = "https://restcountries.com/v3.1/all";

  async getAllCountries() {
    const { data } = await axios.get<Countries[]>(this.URL);
    return data[0].capital;
  }
}

export class CountriesApiFetch implements HttpAdapter {
  public URL: string = "https://restcountries.com/v3.1/all";

  async getAllCountries() {
    const resp = await fetch(this.URL);
    const data = resp.json();
    return data;
  }
}
