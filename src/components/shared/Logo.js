import styled from "@emotion/styled";
import React from "react";

export const LogoText = styled.h1`
  font-family: "Open Sans", sans-serif;
  font-size: 10rem;
  color: #333340;
  margin-top: 6rem;
  margin-bottom: 2rem;
`;

const Logo = () => {
  return <LogoText>Melange</LogoText>;
};
export default Logo;
