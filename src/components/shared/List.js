import styled from "@emotion/styled";

export const List = styled.ul`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ListItem = styled.li`
  display: block;
  position: relative;
  padding: 3rem 5rem;
  background: #ffffff;
  border: 0.1rem solid #ddd;
  border-top-width: 0;

  &:first-of-type {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    border-top-width: 0.1rem;
  }

  &:last-of-type {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

export const ListItemWithLink = styled(ListItem)`
  :hover {
    background: #f0f3f5;
  }
`;
