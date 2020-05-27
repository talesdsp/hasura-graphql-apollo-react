import { gql, useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import Planets from "./Planets";
import InputForm from "./shared/InputForm";

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

  if (loading) return <div>oi</div>;
  if (error) return <div>erro</div>;

  return (
    <>
      <InputForm
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSearch={() => search({ variables: { match: `%${inputValue}%` } })}
      />
      <Planets newPlanets={data ? data.planets : null} />
    </>
  );
};

export default PlanetsSearch;
