import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_COUNTRIES_API_URL, geoCountriesoptions, } from '../../api'


export const Countries = ({ OnSearchChange }) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) => {
      return fetch(
        `${GEO_COUNTRIES_API_URL}/countries?minPopulation = 1000000&namePrefix=${inputValue}`,
        geoCountriesoptions,
      )
        .then((response) => response.json())
        .then((response) => {
          return {
            options: response.data.map((countries) => {
              return {
                value: `${countries.latitude} ${countries.longitude}`,
                label: `${countries.name}, ${countries.countryCode}`,
              }
            }),
          }
        })
        .catch((err) => console.error(err))
    }
  console.log(geoCountriesoptions)
  
    const handleOnChange = (searchData) => {
      setSearch(searchData)
      OnSearchChange(searchData)
    }
  
    return (
      <AsyncPaginate
        placeholder="Search Country"
        debounceTime={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    )
  }

export default Countries;