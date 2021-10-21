import styled from "styled-components";

export const Recent = styled.div`
  width: 100%;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-top: 30px; */
  }

  & div button {
    width: fit-content;
    margin: 0;
    padding: 5px 10px;
    font-size: 11px;
    padding-right: 0;
  }
  & h3 {
    margin-top: 4px;
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
  }
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-top: 2px;
    margin-bottom: 15px;
  }

  & ul li {
    display: grid;
    grid-template-columns: auto 11fr 1fr;
    gap: 2px;
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

  & ul li div a,
  & ul li a {
    margin: 0;
    padding: 0;
    font-size: 13px;
    letter-spacing: 1.6px;
    color: #ffffff;
    text-decoration: none;
    width: fit-content;
    transition: all 0.45s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  & ul li div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  & ul li a:hover {
    text-decoration: underline green;
  }

  & ul li a p {
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: 15px;
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
`;

export const ArtistFlex = styled.div`
  display: flex;
  flex-direction: row !important;
`;
