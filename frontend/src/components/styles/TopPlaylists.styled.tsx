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
  }

  & div img {
    border-radius: 10px;
  }
`;
