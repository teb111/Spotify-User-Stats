import { NavStyled } from "./styles/Nav.styled"
import { FaUser, FaMicrophone, FaMusic, FaPlay, FaTape } from 'react-icons/fa';

export default function Nav() {
    return (
        <NavStyled>

            <h6>
                <a href="/">
            <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<defs>

<linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient" x1="-5.549" x2="504.658" y1="517.549" y2="7.342">
<stop offset="0" stopColor="#048a33"/><stop offset="1" stopColor="#00dc4d"/></linearGradient>
<linearGradient gradientUnits="userSpaceOnUse" id="linear-gradient-2" x1="192.736" x2="366.552" y1="376.124" y2="202.307">
<stop offset="0" stopColor="#111"/><stop offset="1" stopColor="#323232"/></linearGradient>
<linearGradient id="linear-gradient-3" x1="166.943" x2="340.759" y1="350.331" y2="176.514"/>
<linearGradient id="linear-gradient-4" x1="137.652" x2="311.469"  y1="321.04" y2="147.224"/>
</defs><title/><path className="cls-1" d="M256,0C114.615,0,0,114.615,0,256S114.615,512,256,512,512,397.385,512,256,397.385,0,256,0Z"/>
<path className="cls-2" d="M345.668,347.523a13.139,13.139,0,0,1-18.24,3.551c-70.978-47.847-178.969-19.9-180.052-19.608a13.14,13.14,0,1,1-6.755-25.4c1.224-.325,30.427-7.987,69.6-9.132,52.611-1.539,98.222,9.645,131.9,32.345A13.141,13.141,0,0,1,345.668,347.523Z"/>
<path className="cls-3" d="M370.94,290.827a15.955,15.955,0,0,1-21.982,5.094c-47.7-29.75-100.787-34.875-136.923-33.933-39.908,1.041-68.691,9.485-68.978,9.571a15.955,15.955,0,0,1-9.168-30.565c1.3-.391,32.392-9.6,76.295-10.876,58.494-1.7,112.321,11.694,155.662,38.728A15.955,15.955,0,0,1,370.94,290.827Z"/>
<path className="cls-4" d="M400.375,224.7a19.237,19.237,0,0,1-26.05,7.853c-58.761-31.54-120.637-36.549-162.195-35.2-45.744,1.488-77.785,10.784-78.1,10.877a19.239,19.239,0,0,1-10.95-36.888c1.454-.433,36.185-10.618,86.542-12.4,66.839-2.372,130.086,11.358,182.9,39.709A19.239,19.239,0,0,1,400.375,224.7Z"/>
</svg>
</a>
            </h6>
            
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
        </NavStyled>
    )
}
