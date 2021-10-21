import { NavStyled } from "./styles/Nav.styled";
import { FaUser, FaMicrophone, FaMusic, FaPlay, FaTape } from "react-icons/fa";
import { MdMusicNote, MdNewReleases } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../logo.png";

export default function Nav() {
  return (
    <NavStyled>
      <h6>
        <Link to="/">
          <img alt="" src={logo} width={50} height={50} />
        </Link>
      </h6>

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

        <li>
          <Link to="/recent" rel="noreferrer">
            <div>
              <span>
                <MdMusicNote />
              </span>

              <span>Recent</span>
            </div>
          </Link>
        </li>

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
    </NavStyled>
  );
}
