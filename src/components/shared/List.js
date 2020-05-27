import styled from "@emotion/styled";

export const List = styled.ul`
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  display: block;
  padding: 3rem 5rem;
  background: #ffffff;
  border: 0.1rem solid rgba(0, 0, 0, 0.125);
  border-top-width: 0;

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-top-width: 0.1rem;
  }

  &:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;
