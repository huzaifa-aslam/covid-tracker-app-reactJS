import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { FetchCountries } from "../../Api";

function CountryPicker({ newCounrty }) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const FetchApi = async () => {
      const getData = await FetchCountries();
      setCountry(getData);
    };
    FetchApi();
  }, []);
  return (
    <div>
      <FormControl>
        <NativeSelect onChange={(e) => newCounrty(e.target.value)}>
          <option value="global">Global</option>
          {country.map((countryName, index) => {
            return (
              <option key={index} value={countryName}>
                {countryName}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
