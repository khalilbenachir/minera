import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 3;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  flex: 2;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  background-color: white;
  text-transform: capitalize;
`;
