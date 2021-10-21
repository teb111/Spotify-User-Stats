import { useState, useEffect } from "react";
import { TrackContainer } from "./styles/Track.Styled";
import { getTrackById } from "../spotify/index";
import { catchErrors } from "../helpers";
import {
  UserInfo,
  UserDetails,
  List,
  Name,
  UserImage,
  SignOut,
} from "./styles/Main.styled";
import { FaPlay, FaSignOutAlt } from "react-icons/fa";

export default function Track({ id }: { id: any }) {
  const newId = id?.id;
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      const { data } = await getTrackById(newId);
      setTrack(data);

      console.log({
        track: data,
      });
    };

    catchErrors(fetchTracks());
  }, []);

  const playHandler = () => {
    window.location.href = track?.uri ?? "/";
  };

  return (
    <TrackContainer>
      <UserDetails>
        <UserImage alt="" src={track?.album?.images[0]?.url} />

        <UserInfo>
          <Name href="" target="_blank" rel="noopener noreferrer">
            {track?.name}
          </Name>
          <h4>
            {track?.album?.name}, {track?.album?.release_date.substring(0, 4)}
          </h4>
          <List>
            <div>
              {track?.artists &&
                track?.artists.map(({ name }: { name: string }, i: any) => (
                  <span key={i}>
                    {name}
                    {track?.artists.length > 0 &&
                    i === track?.artists.length - 1
                      ? ""
                      : ","}
                    &nbsp;
                  </span>
                ))}{" "}
              <br />
              <span>Popularity: {track?.popularity}%</span>
            </div>
          </List>
          <SignOut onClick={playHandler}>
            Play On Spotify &nbsp;
            <FaPlay />
          </SignOut>
        </UserInfo>
      </UserDetails>
    </TrackContainer>
  );
}
