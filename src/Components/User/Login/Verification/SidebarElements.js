import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-router-dom";
import { Link as LinkR } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right,
    rgb(180, 28, 28),
    rgb(143, 29, 30),
    rgb(107, 31, 32),
    rgb(70, 32, 34)
  );
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0, 3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "19")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: Pink;
  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebaMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 40px;
  grid-template-rows: repeat(5, 70px);
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarLink = styled(LinkS)`
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  color: rgb(235, 187, 187);
  cursor: pointer;
  margin-left: -4vh;

  &:hover {
    color: white;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: -30px;
`;
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: rgb(235, 187, 187);
  white-space: nowrap;
  padding: 16px 64px;
  color: darkred;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
