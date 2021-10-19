import styled from "styled-components";

export const TrackContainer = styled.div`
  padding-left: 30px;
  width: 98%;

  & div {
    text-align: center;
  }
  & div img {
    width: 350px;
    height: 360px;
    border-radius: 10%;
    margin: 0 auto;
  }

  & div div {
    width: 100%;
  }

  & div a {
    color: white;
    font-size: 25px;
  }

  & div span {
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1.2px;
  }

  @media (max-width: 800px) {
    padding-left: 0;

    & div img {
      margin: 0 auto;
    }
  }
`;

export const PlayListInfo = styled.div`
  & img {
    width: 220px;
    height: 210px;
    margin: 0 auto;
  }
`;

export const PlayListContainer = styled.div`
  margin-top: 5px;

  & div span a {
    color: white;
  }

  & button {
    font-size: 12px;
    width: fit-content;
    letter-spacing: 1.6px;
  }

  & ul {
    text-align: center;
  }
`;
