import { IMG } from "./styles/Artist.styled";
import { SignOut } from "./styles/Main.styled";
import { Recent } from "./styles/RecentlyPlayed.styled";
import { Link } from "react-router-dom";

export default function Artist({
  topArtists,
}: {
  topArtists: RecentlyOrArtists;
}) {
  return (
    <Recent>
      <Link to="/topartists">
        <div>
          <h3>Favourite Artists</h3> <SignOut>Show More &nbsp;</SignOut>
        </div>
      </Link>
      <ul>
        {topArtists instanceof Array &&
          topArtists?.length > 0 &&
          topArtists?.map((artist, i) => (
            <li key={i}>
              {artist?.images.length > 0 && (
                <IMG src={artist?.images[2]?.url} alt="Album Artwork" />
              )}
              <Link to={`artist/${artist?.id}`}>
                <p>{artist?.name}</p>
                <div>
                  <span>{artist?.genres[0]}</span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </Recent>
  );
}
