import styled from "styled-components";
import React from "react";

export const NavIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  flex: 0.6;
`;

const MaterialShoppingIcon = props => (
  <i className={`material-icons ${props.className}`}>add_shopping_cart</i>
);

const MaterialSearchIcon = props => (
  <i className={`material-icons ${props.className}`}>search</i>
);

const MaterialProfileIcon = props => (
  <i className={`material-icons ${props.className}`}>perm_identity</i>
);

export const ShoppingIcon = styled(MaterialShoppingIcon)`
  font-size: 30px;
`;

export const SearchIcon = styled(MaterialSearchIcon)`
  font-size: 30px;
`;

export const ProfileIcon = styled(MaterialProfileIcon)`
  font-size: 30px;
`;
