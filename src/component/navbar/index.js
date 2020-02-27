import React from "react";

import {Container} from "../common/container"
import {Header} from "./header"
import {Logo} from "./header/logo/index"
import {NavItem,NavList,Navigation} from "./header/navigation"
import {ProfileIcon,SearchIcon,ShoppingIcon,NavIcons} from "./header/icons"




const NavBar = () => {
  return (
    <Container>
      <Header>
        <Logo>minera.</Logo>
        <Navigation>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Contact Us</NavItem>
          </NavList>
          <NavIcons>
            <SearchIcon />
            <ProfileIcon />
            <ShoppingIcon />
          </NavIcons>
        </Navigation>
      </Header>
    </Container>
  );
};

export default NavBar;
