import styled from "@emotion/styled";
import React from "react";
import { Button, Input } from "./Form";

const Container = styled.form`
  display: flex;
  align-items: center;
  max-width: 900px;
  margin: 1rem 0 2rem;

  > button {
    margin-left: 1rem;
  }
`;

const InputForm = ({ inputValue, onChange, onSearch, onSubmit, buttonText }) => {
  return (
    <Container onSubmit={onSubmit}>
      <Input onChange={onChange} value={inputValue} />

      <Button type="submit" onClick={onSearch}>
        {buttonText || "Search"}
      </Button>
    </Container>
  );
};

export default InputForm;
