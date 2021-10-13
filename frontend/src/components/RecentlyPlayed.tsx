import { Recent } from "./styles/RecentlyPlayed.styled";
import { formatSongDuration } from "../helpers/index";
import { SignOut } from "./styles/Main.styled";

export default function RecentlyPlayed({
  recentlyPlayed,
}: {
  recentlyPlayed: RecentlyOrArtists;
}) {
  return (
    <Recent>
      <div>
        <h3>Recently Played</h3>
        <SignOut>Show More &nbsp;</SignOut>
      </div>
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
              <a href={recent?.track?.uri}>
                <p>{recent?.track?.name.substring(0, 32)}...&nbsp;</p>
                <div>
                  {recent?.track?.artists &&
                    recent?.track?.artists.map(
                      ({ name }: { name: string }, i: any) => (
                        <span key={i}>
                          {name.substring(0, 12)}
                          {recent?.track?.artists.length > 0 &&
                          i === recent?.track?.artists.length - 1
                            ? ""
                            : ","}
                          &nbsp;
                        </span>
                      )
                    )}
                </div>
              </a>
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
