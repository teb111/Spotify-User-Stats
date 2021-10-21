import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { catchErrors } from "../helpers";
import { getNewReleases } from "../spotify";
import Loader from "./Loader";
import { ArtistContent } from "./styles/TopArtist.styled";
import { TopPlaylistsContainer } from "./styles/TopPlaylists.styled";
export default function NewReleases() {
  const [releases, setReleases] = useState<Releases | null>(null);

  useEffect(() => {
    const fetchNewReleases = async () => {
      const { data } = await getNewReleases();
      setReleases(data.albums.items);

      console.log({
        newReleases: data.albums.items,
      });
    };
    catchErrors(fetchNewReleases());
  }, []);

  return (
    <>
      {releases === null ? (
        <Loader />
      ) : (
        <TopPlaylistsContainer>
          <h3>New Releases</h3>
          <ArtistContent>
            {releases instanceof Array &&
              releases.length > 0 &&
              releases.map((release: NewReleasesProps, i) => (
                <div key={i}>
                  <Link to={`/${release?.name}`}>
                    <img src={release?.images[0]?.url} alt={release?.name} />
                  </Link>
                  <a href={release.uri}>{release?.name}</a>
                  {release?.artists &&
                    release?.artists?.map(
                      ({ name, id }: { name: string; id: string }, i) => (
                        <Link to={`artist/${id}`}>
                          <span key={i}>{name}, &nbsp;</span>
                        </Link>
                      )
                    )}

                  <span>{release?.total_tracks} track(s)</span>
                  <span>Release Date: {release?.release_date}</span>
                </div>
              ))}
          </ArtistContent>
        </TopPlaylistsContainer>
      )}
    </>
  );
}
