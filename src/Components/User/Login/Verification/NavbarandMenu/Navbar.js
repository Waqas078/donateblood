import React from "react";
import { FaBars } from "react-icons/fa";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  AccountLogo,
  Searchbar,
} from "./NavElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars className="fabar" />
          </MobileIcon>
          <NavLogo>Donateblood.pk</NavLogo>
          {/* <NavMenu>
            <NavItem>
              <NavLinks to="Home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/LogiUs">About Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Home">FAQS</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Home">Contact Us</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="">Log Out</NavBtnLink>
          </NavBtn> */}
                    <Searchbar> 


            <form class="form-search" method="get" action="#">
            <input type="search" name="search" placeholder="search your book here for.."/>
            <button type="submit">Search</button>
            
        </form>
</Searchbar>

          <AccountLogo>
            <AccountCircleIcon className="icon" />
            <br />
            <span className="span">Login</span>
          </AccountLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
