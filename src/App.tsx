import React, { useEffect, useState } from "react";
import NavBar from "./Component/NavBar";
import { Box, CircularProgress, Typography } from "@mui/material";
import CountryCard from "./Component/CountryCard";
import axios from "axios";
import ScrollPage from "./Component/ScrollPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetail from "./Component/CountryDetail";
import NotFoundPage from "./Component/NotFountPage";

const sorting = ["Name: A-Z", "Name: Z-A", "Population: ⬆️", "Population: ⬇️", "Area: ⬆️", "Area: ⬇️"];

const url = "https://restcountries.com/v3.1/all";
export default function App() {
  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const showLoader = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const fetchData = async () => {
    const response = await axios.get(url);
    setCountries(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSortCountries = (sortType: string) => {
    const newCountries = [...countries];
    if (sortType === "Name: A-Z") {
      newCountries.sort((a: { name: { common: string } }, b: { name: { common: string } }) =>
        a.name.common.localeCompare(b.name.common)
      );
      showLoader();
      setCountries(newCountries);
    }
    if (sortType === "Name: Z-A") {
      newCountries.sort((a: { name: { common: string } }, b: { name: { common: string } }) =>
        b.name.common.localeCompare(a.name.common)
      );
      showLoader();
      setCountries(newCountries);
    }

    if (sortType === "Population: ⬆️") {
      newCountries.sort((a: { population: number }, b: { population: number }) => a.population - b.population);
      showLoader();
      setCountries(newCountries);
    }
    if (sortType === "Population: ⬇️") {
      newCountries.sort((a: { population: number }, b: { population: number }) => b.population - a.population);
      showLoader();
      setCountries(newCountries);
    }

    if (sortType === "Area: ⬆️") {
      newCountries.sort((a: { area: number }, b: { area: number }) => a.area - b.area);
      showLoader();
      setCountries(newCountries);
    }
    if (sortType === "Area: ⬇️") {
      newCountries.sort((a: { area: number }, b: { area: number }) => b.area - a.area);
      showLoader();
      setCountries(newCountries);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  const filteredCountries = countries.filter((country: { name: { common: string } }) =>
    country.name.common.toLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  return (
    <Router>
      <Routes>
        <Route
          path="Countries_Mui"
          element={
            <Box>
              <NavBar
                sortValues={sorting}
                searchValue={searchValue}
                onSearchChange={handleSearchChange}
                onSortCountries={handleSortCountries}
              />

              <ScrollPage>
                <>
                  {isLoading && <CircularProgress disableShrink color="warning" />}
                  {!isLoading &&
                    filteredCountries.map((country, index) => <CountryCard key={index} country={country} />)}
                </>
              </ScrollPage>
            </Box>
          }
        />
        <Route path={`Countries_Mui/country/:countryName`} element={<CountryDetail />} />
        <Route path={`/*`} element={<NotFoundPage />} />
      </Routes>
      <Typography align="center" mt={0.5} color="white">
        Created In React Using TypeScript By Rajat Sonaniya
      </Typography>
    </Router>
  );
}
