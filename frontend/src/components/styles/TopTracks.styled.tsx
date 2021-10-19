import styled from "styled-components";

export const TopTracksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 85%;
  padding-left: 10%;

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 95%;
  }

  & ul li {
    display: grid;
    grid-template-columns: auto 11fr 1fr;
    gap: 5px;
    width: 100%;
    margin-top: 25px;
    list-style: none;
  }

  & ul li a div {
    margin-left: 10px;
  }

  & ul li img {
    width: 40px;
    border-radius: 5px;
    margin-right: 20px;
  }

  & ul li a {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: 13px;
    letter-spacing: 1.6px;
    color: #ffffff;
    text-decoration: none;
    width: fit-content;
  }

  & ul li a:hover {
    text-decoration: underline green;
  }

  & ul li a p {
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: 17px;
  }

  & ul li a div {
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
    font-size: 12px;
    margin: 0;
  }

  & ul li a div span {
    text-transform: capitalize;
    font-size: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 0;
  }

  & ul li a p {
    font-size: 14px;
  }
`;
