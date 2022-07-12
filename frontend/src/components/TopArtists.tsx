import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TopArtist, ArtistContent } from "./styles/TopArtist.styled";
import {
  getTopArtistsLong,
  getTopArtists,
  getTopArtistsShort,
} from "../spotify";
import { catchErrors } from "../helpers/index";
import Loader from "./Loader";

export default function TopArtists() {
  const [artists, setArtists] = useState<RecentlyOrArtists>([]);

  const artistDuration = {
    long: getTopArtistsLong(),
    medium: getTopArtists(),
    short: getTopArtistsShort(),
  };

  useEffect(() => {
    const fetchArtists = async () => {
      const { data } = await getTopArtistsLong();
      setArtists(data.items);

      console.log({
        artist: data.items,
      });
    };

    catchErrors(fetchArtists());
  }, []);

  const getArtist = async (name: string) => {
    let duration: any;
    name === "long"
      ? (duration = artistDuration.long)
      : name === "medium"
      ? (duration = artistDuration.medium)
      : name === "short"
      ? (duration = artistDuration.short)
      : (duration = artistDuration.long);
    const fetchArtists = async () => {
      const { data } = await duration;
      setArtists(data.items);

      console.log({
        artist: data.items,
      });
    };

    catchErrors(fetchArtists());
  };
  return (
    <>
      {artists instanceof Array && artists.length === 0 ? (
        <Loader />
      ) : (
        <>
          <TopArtist>
            <div>
              <h3>Top Artists</h3>
              <ul>
                <li>
                  <div onClick={(e) => getArtist("long")}>All Time</div>
                </li>
                <li>
                  <div onClick={(e) => getArtist("medium")}>Last 6 months</div>
                </li>
                <li>
                  <div onClick={(e) => getArtist("short")}>Last 4 weeks</div>
                </li>
              </ul>
            </div>
          </TopArtist>
          <ArtistContent>
            {artists instanceof Array &&
              artists.length > 0 &&
              artists?.map((artist, i) => (
                <div key={i}>
                  <img src={artist?.images[1]?.url} alt={artist?.name} />
                  <Link to={`artist/${artist?.id}`}>{artist?.name}</Link>
                </div>
              ))}
          </ArtistContent>
        </>
      )}
    </>
  );
}
