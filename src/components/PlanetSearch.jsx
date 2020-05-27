import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import Planets from "./Planets";
import Search from "./Search";

const SEARCH = gql`
  query Search($match: String) {
    planets(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      id
      name
    }
  }
`;

const PlanetsSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [search, { loading, data, error }] = useLazyQuery(SEARCH);

  return (
    <>
      <Search
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSearch={() => search({ variables: { match: `%${inputValue}%` } })}
      />
      <Planets newPlanets={data?.planets | null} />
    </>
  );
};

export default PlanetsSearch;
