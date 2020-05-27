import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { List, ListItemWithLink } from "./shared/List";
import { Tag } from "./shared/Tag";

const PLANETS = gql`
  query {
    planets {
      id
      name
      cuisine
    }
  }
`;

const Planets = ({ newPlanets }) => {
  const { loading, error, data } = useQuery(PLANETS);

  const renderPlanets = (planets) => {
    return planets.map(({ id, name, cuisine }) => (
      <ListItemWithLink key={id}>
        <Link to={"planets/" + id}>
          {name} <Tag>{cuisine}</Tag>
        </Link>
      </ListItemWithLink>
    ));
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error}</p>;

  return <List>{renderPlanets(newPlanets || data.planets)}</List>;
};

export default Planets;
