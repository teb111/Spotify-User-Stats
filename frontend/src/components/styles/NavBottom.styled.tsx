import styled from "styled-components";

export const NavBottomStyled = styled.nav`
  background: ${({ theme }) =>
    theme?.colors?.nav ? theme?.colors?.nav : "#000000ed"};
  display: none;
  flex-direction: column;
  position: fixed;
  top: auto;
  bottom: 0px;
  right: 0px;
  width: 100%;
  min-height: 70px;
  height: 70px;

  & ul {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  & ul li {
    list-style: none;
    padding: 0%;
    margin: 0;
    width: 91%;
    border-top: 2px solid transparent;
    height: 98%;
    transition: 0.6s ease-in-out;
  }

  & ul li:hover {
    background: ${({ theme }) =>
      theme?.colors?.background ? theme?.colors?.background : "#181818"};
    border-top: 2px solid
      ${({ theme }) =>
        theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"};
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
  }

  & ul li:first-child,
  & ul li:last-child {
    margin-left: 2px;
    padding: 0;
  }

  & ul li a {
    text-decoration: none;
    padding: 0;
    margin: 0;
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
    transition: 0.6s linear;
    font-size: 12px;
    letter-spacing: 1.5px;
  }

  & ul li a span {
    display: block;
    text-align: center;
    padding-top: 10px;
    font-size: 10px;
    font-weight: 500;
  }
  & ul li a span svg {
    font-size: 17px;
  }

  @media (max-width: 800px) {
    display: flex;
  }
`;
