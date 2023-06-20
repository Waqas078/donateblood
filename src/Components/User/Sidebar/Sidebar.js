import React from "react";
import {
     SidebarContainer,
     Icon,
     CloseIcon,
     SidebarWrapper,
     SidebarLink,
     SideBtnWrap,
     SidebarRoute, 
     SidebaMenu   
    } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebaMenu>
          <SidebarLink to="Home" onClick={toggle}>Home</SidebarLink>
          <SidebarLink to="About" onClick={toggle}>About Us</SidebarLink>
          <SidebarLink to="About" onClick={toggle}>Annoucnment</SidebarLink>
          <SidebarLink to="About" onClick={toggle}>FAQ</SidebarLink>
          <SidebarLink to='Contact' onClick={toggle}>Contact Us</SidebarLink>
          </SidebaMenu>
          <SideBtnWrap>
            <SidebarRoute to='Login'>Log In</SidebarRoute>
          </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
