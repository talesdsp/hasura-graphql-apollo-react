import { gql, useQuery } from "@apollo/client";
import React from "react";
import { List, ListItem } from "./shared/List";
import { Tag } from "./shared/Tag";

const PLANETS = gql`
  {
    planets {
      cuisine
      id
      name
    }
  }
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  const renderPlanets = (planets) => {
    return planets.map(({ id, name, cuisine }) => (
      <ListItem key={id}>
        {name} <Tag>{cuisine}</Tag>
      </ListItem>
    ));
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error}</p>;

  return <List>{renderPlanets(newPlanets || data.planets)}</List>;
};

export default Planets;
