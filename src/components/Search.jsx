import styled from "@emotion/styled";
import React from "react";
import { Button, Input } from "./shared/Form";

const SearchForm = styled.div`
  display: flex;
  align-items: center;
  > button {
    margin-left: 1rem;
  }
`;

const Search = ({ inputValue, onChange, onSearch }) => {
  return (
    <SearchForm>
      <Input inputValue={inputValue} />

      <Button onClick={onSearch}>Search</Button>
    </SearchForm>
  );
};

export default Search;
