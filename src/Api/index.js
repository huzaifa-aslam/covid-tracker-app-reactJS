import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const FetchGlobal = async (country) => {
  let changeUrl = url;
  if (country) {
    changeUrl = `${url}/countries/${country}`;
  }
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(changeUrl);
  const modified = {
    confirmed,
    recovered,
    deaths,
    lastUpdate,
  };
  return modified;
};

export const FetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  const modified = countries.map((countryName) => countryName.name);
  return modified;
};

export const FetchdailyData = async () => {
  const { data } = await axios.get(`${url}/daily`);
  const modified = data.map((dailyData) => ({
    confirm: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return modified;
};
