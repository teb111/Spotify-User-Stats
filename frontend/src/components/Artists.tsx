import { useState, useEffect } from "react";
import { catchErrors } from "../helpers";
import { getArtistById } from "../spotify";
import { ArtistDetails } from "./styles/Artist.styled";
import {
  ArtistContainer,
  Genres,
  GenresItem,
  ListItem,
} from "./styles/Artist.styled";
import {
  List,
  Name,
  UserDetails,
  UserImage,
  UserInfo,
} from "./styles/Main.styled";

export default function Artists({ id }: { id: any }) {
  const [artist, setArtist] = useState<ArtistType>(null);

  useEffect(() => {
    const fetchArtist = async () => {
      const { data } = await getArtistById(id?.id);
      setArtist(data);

      console.log({
        setArtist: data,
      });
    };
    catchErrors(fetchArtist());
  }, []);
  console.log(id?.id);
  return (
    <ArtistContainer>
      <UserDetails>
        <UserImage alt="" src={artist?.images[0]?.url} />

        <UserInfo>
          <Name href="" target="_blank" rel="noopener noreferrer">
            {artist?.name}
          </Name>
          <List>
            <ListItem>
              <div>
                <span>Popularity: {artist?.popularity}%</span>
              </div>
            </ListItem>
          </List>
        </UserInfo>
      </UserDetails>
      <ArtistDetails>
        <ListItem>
          <Genres>Followers: </Genres>
          <GenresItem>{artist?.followers?.total} </GenresItem>
        </ListItem>
        <ListItem>
          <Genres>Genres</Genres>
          <GenresItem>{artist?.genres[0]}</GenresItem>
          <GenresItem>{artist?.genres[1]}</GenresItem>
          <GenresItem>{artist?.genres[2]}</GenresItem>
        </ListItem>
      </ArtistDetails>
    </ArtistContainer>
  );
}
