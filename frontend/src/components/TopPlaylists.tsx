import { useState, useEffect } from "react";
import { getPlaylists } from "../spotify";
import { ArtistContent } from "./styles/TopArtist.styled";
import { TopPlaylistsContainer } from "./styles/TopPlaylists.styled";
import { catchErrors } from "../helpers/index";
import Loader from "./Loader";
import { Link } from "react-router-dom";
export default function TopPlaylists() {
  const [playlists, setPlaylists] = useState<RecentlyOrArtists>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const { data } = await getPlaylists();
      setPlaylists(data.items);

      console.log({
        playlists: data.items,
      });
    };
    catchErrors(fetchPlaylists());
  }, []);
  return (
    <>
      {playlists === null ? (
        <Loader />
      ) : (
        <TopPlaylistsContainer>
          <h3>Your playlists</h3>
          <ArtistContent>
            {playlists instanceof Array &&
              playlists.length > 0 &&
              playlists?.map((playlist, i) => (
                <div key={i}>
                  <Link to={`playlist/${playlist?.id}`}>
                    <img src={playlist?.images[0]?.url} alt={playlist?.name} />
                  </Link>
                  <Link to={`playlist/${playlist?.id}`}>{playlist?.name}</Link>
                  <span>{playlist?.tracks?.total} tracks</span>
                </div>
              ))}
          </ArtistContent>
        </TopPlaylistsContainer>
      )}
    </>
  );
}
