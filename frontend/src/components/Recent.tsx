import { TopTracksContainer } from "./styles/TopTracks.styled";
import { useState, useEffect } from "react";
import { getRecentlyPlayed } from "../spotify";
import { catchErrors, formatSongDuration } from "../helpers";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loader from "./Loader";
import { ArtistFlex } from "./styles/RecentlyPlayed.styled";

export const Header = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  letter-spacing: 1.8px;
  font-size: 20px;
  text-transform: uppercase;
`;

export default function Recent() {
  const [recent, setRecent] = useState<RecentlyOrArtists>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const { data } = await getRecentlyPlayed();
      setRecent(data.items);

      console.log({
        artist: data.items,
      });
    };

    catchErrors(fetchTracks());
  }, []);
  return (
    <TopTracksContainer>
      <Header>Recently Played </Header>
      {recent instanceof Array && recent?.length === 0 ? (
        <Loader />
      ) : (
        <ul>
          {recent instanceof Array &&
            recent?.length > 0 &&
            recent?.map((r: { track: any }, i: any) => (
              <li key={i}>
                {r?.track?.album.images.length > 0 && (
                  <img
                    src={r?.track?.album?.images[2]?.url}
                    alt="Album Artwork"
                  />
                )}
                <div>
                  <Link to={`track/${r?.track?.id}`}>
                    <p>{r?.track?.name}...&nbsp;</p>
                  </Link>
                  <ArtistFlex>
                    {r?.track?.artists &&
                      r?.track?.artists.map(
                        ({ name, id }: ArtistProps, i: any) => (
                          <Link to={`artist/${id}`} key={i}>
                            <span key={i}>
                              {name.substring(0, 12)}
                              {r?.track?.artists.length > 0 &&
                              i === r?.track?.artists.length - 1
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
                  {r?.track?.duration_ms &&
                    formatSongDuration(r?.track?.duration_ms)}
                </span>
              </li>
            ))}
        </ul>
      )}
    </TopTracksContainer>
  );
}
