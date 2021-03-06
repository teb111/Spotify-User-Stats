import { NavBottomStyled } from "./styles/NavBottom.styled";
import { FaUser, FaMicrophone, FaMusic, FaPlay, FaTape } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdNewReleases } from "react-icons/md";

export default function NavBottom() {
  return (
    <NavBottomStyled>
      <ul>
        <li>
          <Link to="/" rel="noreferrer">
            <span>
              <FaUser />
            </span>

            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/topartists" rel="noreferrer">
            <div>
              <span>
                <FaMicrophone />
              </span>

              <span>Top Artists</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/toptracks" rel="noreferrer">
            <div>
              <span>
                <FaMusic />
              </span>

              <span>Top Tracks</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/topplaylists" rel="noreferrer">
            <div>
              <span>
                <FaPlay />
              </span>

              <span>Playlists</span>
            </div>
          </Link>
        </li>
        {/* 
        <li>
          <Link to="/recent" rel="noreferrer">
            <div>
              <span>
                <FaTape />
              </span>

              <span>Recent</span>
            </div>
          </Link>
        </li> */}

        <li>
          <Link to="/newreleases" rel="noreferrer">
            <div>
              <span>
                <MdNewReleases />
              </span>

              <span>New Releases</span>
            </div>
          </Link>
        </li>
      </ul>
    </NavBottomStyled>
  );
}
