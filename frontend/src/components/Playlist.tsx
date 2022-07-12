import { useState, useEffect } from "react";
import { PlayListInfo, PlayListContainer } from "./styles/Track.Styled";
import { getPlaylistById } from "../spotify/index";
import { catchErrors, formatSongDuration } from "../helpers";
import {
  UserInfo,
  UserDetails,
  List,
  UserImage,
  SignOut,
} from "./styles/Main.styled";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TopTracksContainer } from "./styles/TopTracks.styled";
import styled from "styled-components";

const ArtistFlex = styled.div`
  display: flex;
`;

export default function Playlist({ id }: { id: any }) {
  const [playlistContent, setPlaylistContent] = useState<PlayList | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const { data } = await getPlaylistById(id?.id);
      setPlaylistContent(data);

      console.log({
        playlistContent: data,
      });
    };
    catchErrors(fetchPlaylists());
  }, []);

  return (
    <>
      <PlayListContainer>
        <TopTracksContainer>
          <PlayListInfo>
            <UserDetails>
              <UserImage alt="" src={playlistContent?.images[0]?.url} />

              <UserInfo>
                <List>
                  <h3>{playlistContent?.name}</h3>
                  {playlistContent?.description && (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: playlistContent?.description,
                      }}
                    ></span>
                  )}

                  <span>Total: {playlistContent?.tracks?.total}</span>
                </List>
                <SignOut>
                  Play On Spotify &nbsp;
                  <FaPlay />
                </SignOut>
              </UserInfo>
            </UserDetails>
          </PlayListInfo>
          <ul>
            {playlistContent?.tracks?.items instanceof Array &&
              playlistContent?.tracks?.items?.length > 0 &&
              playlistContent?.tracks?.items?.map(
                (playlist: { track: any }, i: any) => (
                  <li key={i}>
                    {playlist?.track?.album.images.length > 0 && (
                      <img
                        src={playlist?.track?.album?.images[2]?.url}
                        alt="Album Artwork"
                      />
                    )}
                    <div>
                      <Link to={`/track/${playlist?.track?.id}`}>
                        <p>{playlist?.track?.name.substring(0, 40)}...&nbsp;</p>
                      </Link>
                      <ArtistFlex>
                        {playlist?.track?.artists &&
                          playlist?.track?.artists.map(
                            ({ name, id }: ArtistProps, i: any) => (
                              <Link to={`/artist/${id}`} key={i}>
                                <span key={i}>
                                  {name}
                                  {playlist?.track?.artists.length > 0 &&
                                  i === playlist?.track?.artists.length - 1
                                    ? ""
                                    : ","}
                                  &nbsp;
                                </span>
                              </Link>
                            )
                          )}
                      </ArtistFlex>
                    </div>
                    <span>
                      {playlist?.track?.duration_ms &&
                        formatSongDuration(playlist?.track?.duration_ms)}
                    </span>
                  </li>
                )
              )}
          </ul>
        </TopTracksContainer>
      </PlayListContainer>
    </>
  );
}
