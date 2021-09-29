import styled from "styled-components";

export const NavStyled = styled.nav`
  background: ${({ theme }) =>
      theme?.colors?.nav ? theme?.colors?.nav : "#000"};
      height: 100vh;
      padding-right: 10px;
      width: 10%;
      min-height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;


& ul {
    margin-left: 0;
    margin-bottom: 10px;
    padding-left: 0;
    padding-right: 5px;
    transition: .4s ease-in-out;
   
}

  & ul li {
      list-style: none;
      margin-bottom: 10px;
      text-decoration: none;
      width: 91%;
      padding: 10px;
      transition: .9s ease-in-out;
      border-bottom: 2px solid transparent;
  
      
  }

  & ul li a {
      text-decoration: none;
      color: ${({ theme }) =>
    theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
    transition: .6s linear;
    
  }

  & ul li:hover{
    background: ${({ theme }) =>
      theme?.colors?.background ? theme?.colors?.background : "#181818"};
      border-bottom: 2px solid ${({ theme }) =>
      theme?.colors?.logoColor ? theme?.colors?.logoColor : "#075b25"} ;
  }

  & ul li a span{
      display: block;
      text-align: center;

  }

  & ul li a span:first-child {
      font-size: 20px;
  }

  & ul li a span:nth-child(2) {
      font-size: 11px;
      letter-spacing: 1.5px;
  }

 

  & h6 {
    padding: 22px;
    margin: 0;
    
  }
 

  & h6 a svg {
    margin-top: 25px;
      margin-left: 1px;
      width: 50px;
     
  }

 
 & .cls-1{fill:url(#linear-gradient)}
  & .cls-2{fill: "#111"}
  & .cls-3{fill:"#111"}
  & .cls-4{fill: "#111"}

@media(max-width: 800px){
    display: none;
}

`;