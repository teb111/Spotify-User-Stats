import styled from "styled-components";

export const TopArtist = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px 10px 70px;
    width: 90%;
    margin-top: 30px;
  }

  & h3 {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1.2px;
    width: 25%;
    text-align: center;
  }

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    padding-left: 0;
    padding-right: 11px;
    margin: 0;
  }

  & ul li {
    list-style: none;
    cursor: pointer;
    letter-spacing: 1.1px;
    text-align: start;
  }

  & ul li div {
    display: inline-block;
    transition: 0.2s linear;
    margin: 0;
  }

  & ul li div:hover {
    text-decoration: underline;
    color: green;
  }

  @media (max-width: 800px) {
    padding-left: 5px;
    width: 90%;
    & div {
      flex-direction: column;
      padding-left: 5px;
      width: 100%;
    }

    & h3 {
      width: 100%;
    }
  }
`;

export const ArtistContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  width: 93%;
  padding-left: 110px;

  & a {
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & div img {
    width: 200px;
    height: 210px;
    border-radius: 50%;
    margin-bottom: 10px;
    transition: 0.4s ease-in-out;
  }

  & div img:hover {
    transform: rotate(15deg);
  }

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    padding-left: 5px;
  }

  @media (max-width: 700px) {
    & div img {
      width: 160px;
      height: 170px;
      border-radius: 50%;
      margin-bottom: 10px;
    }
    grid-template-columns: 1fr 1fr;
  }
`;
