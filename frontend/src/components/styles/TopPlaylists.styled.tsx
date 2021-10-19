import styled from "styled-components";

export const TopPlaylistsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

  & h3 {
    text-transform: uppercase;
    letter-spacing: 1.2px;
    font-size: 19px;
    margin-bottom: 20px;
    padding-left: 90px;
  }

  & div img {
    border-radius: 10px;
    cursor: pointer;
  }

  & div img:hover {
    filter: drop-shadow(0 0 0.75rem green);
  }

  & div a,
  & div span {
    font-size: 12px;
    letter-spacing: 1.3px;
  }

  & div a {
    font-size: 14px;
    color: #fff;
  }

  @media (max-width: 700px) {
    & div img {
      width: 250px;
      height: 260px;
    }

    & h3 {
      padding-left: 0;
    }
    & div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 550px) {
    & div img {
      width: 150px;
      height: 140px;
    }
    & div {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
