import { useState, useEffect } from "react";
import { TopArtist } from "./styles/TopArtist.styled";
import { TopTracksContainer } from "./styles/TopTracks.styled";
import { getTopTracksLong, getTopTracks, getTopTracksShort } from "../spotify";
import { catchErrors } from "../helpers";
import { Link } from "react-router-dom";
export default function TopTracks() {
  const [tracks, setTracks] = useState<RecentlyOrArtists>([]);
  const [duration, setDuration] = useState<String>("long");

  const artistDuration = {
    long: getTopTracksLong(),
    medium: getTopTracks(),
    short: getTopTracksShort(),
  };

  useEffect(() => {
    const fetchTracks = async () => {
      const { data } = await getTopTracksLong();
      setTracks(data.items);

      console.log({
        artist: data.items,
      });
    };

    catchErrors(fetchTracks());
  }, []);

  const getTracks = async (name: string) => {
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
      setTracks(data.items);

      console.log({
        artist: data.items,
      });
    };

    catchErrors(fetchArtists());
  };
  return (
    <>
      <TopArtist>
        <div>
          <h3>Top Tracks</h3>
          <ul>
            <li>
              <div onClick={(e) => getTracks("long")}>All Time</div>
            </li>
            <li>
              <div onClick={(e) => getTracks("long")}>Last 6 months</div>
            </li>
            <li>
              <div onClick={(e) => getTracks("long")}>Last 4 weeks</div>
            </li>
          </ul>
        </div>
      </TopArtist>
      <TopTracksContainer>
        <ul>
          {tracks instanceof Array &&
            tracks.length > 0 &&
            tracks?.map((track, i) => (
              <li key={i}>
                <img src={track?.album?.images[0]?.url} alt={track?.name} />

                <Link to={`track/${track?.id}`}>
                  <p>{track?.name}</p>
                  <div>
                    {track?.artists &&
                      track?.artists.map(
                        ({ name }: { name: string }, i: any) => (
                          <span key={i}>
                            {name.substring(0, 12)}
                            {track?.artists.length > 0 &&
                            i === track?.artists.length - 1
                              ? ""
                              : ","}
                            &nbsp;
                          </span>
                        )
                      )}
                  </div>
                </Link>
                <span>3:52</span>
              </li>
            ))}
        </ul>
      </TopTracksContainer>
    </>
  );
}
