import { NavBottomStyled } from './styles/NavBottom.styled';
import { FaUser, FaMicrophone, FaMusic, FaPlay, FaTape } from 'react-icons/fa';

export default function NavBottom() {
    return (
        <NavBottomStyled>
               <ul>
            <li>
                <a href="/" rel="noreferrer">
                 
                      <span>
                      <FaUser />
                      </span>
                          
                      <span>Profile</span>
                 
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer">
                  <div>
                  <span>
                      <FaMicrophone />
                      </span>
                          
                      <span>Top Artists</span>
                  </div>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer">
                  <div>
                  <span>
                      <FaMusic />
                      </span>
                          
                      <span>Top Tracks</span>
                  </div>
                </a>
            </li>
            <li>
                <a href="/" rel="noreferrer">
                  <div>
                  <span>
                  
                      <FaPlay />
                      </span>
                          
                      <span>Playlists</span>
                  </div>
                </a>
            </li>

            <li>
                <a href="/" rel="noreferrer">
                  <div>
                  <span>
                 
                      < FaTape />
                      </span>
                          
                      <span>Recent</span>
                  </div>
                </a>
            </li>
            </ul>
        </NavBottomStyled>
    )
}
