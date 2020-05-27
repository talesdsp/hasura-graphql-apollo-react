import { gql, useMutation, useSubscription } from "@apollo/client";
import React, { useState } from "react";
import InputForm from "./shared/InputForm";
import { List, ListItem } from "./shared/List";
import { Tag } from "./shared/Tag";

const PLANET = gql`
  subscription Planet($id: uuid!) {
    planets_by_pk(id: $id) {
      id
      name
      cuisine
      reviews(order_by: { created_at: asc }) {
        id
        body
        created_at
      }
    }
  }
`;

const ADD_REVIEW = gql`
  mutation MyMutation($body: String!, $planet_id: uuid!) {
    AddReview(body: $body, planet_id: $planet_id) {
      affected_rows
    }
  }
`;

const Planet = ({ match }) => {
  const id = match.params.id;

  const [inputValue, setInputValue] = useState();
  const { loading, error, data } = useSubscription(PLANET, { variables: { id } });
  const [addReview] = useMutation(ADD_REVIEW);

  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  const { name, cuisine, reviews } = data.planets_by_pk;

  return (
    <List>
      <h2>
        {name}
        <Tag>{cuisine}</Tag>
      </h2>

      <InputForm
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          addReview({ variables: { body: inputValue, planet_id: id } })
            .then(() => setInputValue(""))
            .catch((e) => setInputValue(e.message));
        }}
        buttonText="Submit"
      />

      <List>
        {reviews.map((review) => (
          <ListItem key={review.id}>{review.body}</ListItem>
        ))}
      </List>
    </List>
  );
};

export default Planet;
