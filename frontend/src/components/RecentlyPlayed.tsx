import { Recent, ArtistFlex } from "./styles/RecentlyPlayed.styled";
import { formatSongDuration } from "../helpers/index";
import { SignOut } from "./styles/Main.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function RecentlyPlayed({
  recentlyPlayed,
}: {
  recentlyPlayed: RecentlyOrArtists;
}) {
  console.log(recentlyPlayed);
  return (
    <Recent>
      <Link to="/recent">
        <div>
          <h3>Recently Played</h3>
          <SignOut>Show More &nbsp;</SignOut>
        </div>
      </Link>
      <ul>
        {recentlyPlayed instanceof Array &&
          recentlyPlayed?.length > 0 &&
          recentlyPlayed?.map((recent: { track: any }, i: any) => (
            <li key={i}>
              {recent?.track?.album.images.length > 0 && (
                <img
                  src={recent?.track?.album?.images[2]?.url}
                  alt="Album Artwork"
                />
              )}
              <div>
                <Link to={`track/${recent?.track?.id}`}>
                  <p>{recent?.track?.name.substring(0, 40)}...&nbsp;</p>
                </Link>
                <ArtistFlex>
                  {recent?.track?.artists &&
                    recent?.track?.artists.map(
                      ({ name, id }: ArtistProps, i: any) => (
                        <Link to={`artist/${id}`}>
                          <span key={i}>
                            {name.substring(0, 12)}
                            {recent?.track?.artists.length > 0 &&
                            i === recent?.track?.artists.length - 1
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
                {recent?.track?.duration_ms &&
                  formatSongDuration(recent?.track?.duration_ms)}
              </span>
            </li>
          ))}
      </ul>
    </Recent>
  );
}
