import styled from "styled-components";

export const IMG = styled.img`
  border-radius: 50%;
  width: 45px;
`;

export const ArtistContainer = styled.div`
  & img {
    width: 330px;
    height: 323px;
    border-radius: 28%;
  }
`;

export const ArtistDetails = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & p {
    letter-spacing: 1.4px;
  }
`;

export const Genres = styled.p`
  display: block;
  text-transform: uppercase;

  letter-spacing: 2.2px;
  font-weight: 600;
`;

export const GenresItem = styled.span`
  font-size: 25px;
  text-transform: capitalize;
  letter-spacing: 1.7px;
  color: green;
`;
