import styled from "@emotion/styled";
import React from "react";

export const LogoText = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 10rem;

  color: grey;
  margin: 0;
`;

const Logo = () => {
  return <LogoText>Melange</LogoText>;
};
export default Logo;
