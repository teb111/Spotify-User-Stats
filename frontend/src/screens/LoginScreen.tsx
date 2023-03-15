import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginStyled } from "../components/styles/Login.styled";

import logoSpotify from "../spotify-logo.png";

const BottomStyled = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    margin-bottom: 20px;
    font-size: 17px;
    letter-spacing: 1.7px;
  }

  & p span {
    text-transform: uppercase;
  }

  & a {
    color: ${({ theme }) =>
      theme?.colors?.color ? theme?.colors?.color : "#ffffffeb"};
    margin-left: 10px;
  }
`;

export default function LoginScreen() {
  const LOGIN_URI =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8888/login"
      : "https://spotify-stats-m5k8.onrender.com/login";

  const loginHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.target as HTMLButtonElement;
    console.log("log in");
    e.preventDefault();
    console.log(target.value);

    window.location.href = LOGIN_URI;
  };
  return (
    <>
      <LoginStyled>
        <h6>
          <a href="/"></a>
        </h6>

        <h2>Your Spotify Stats</h2>
        <button onClick={loginHandler} value="log in to spotify">
          Log in to spotify
        </button>
      </LoginStyled>
      <BottomStyled>
        <p>
          Powered By <img alt="" src={logoSpotify} width="100" /> &nbsp;
        </p>
        <p>
          Built By{" "}
          <a
            href="https://tobilobaa.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            OluwaTobiloba
          </a>
        </p>
        <p>
          <a
            href="https://twitter.com/oluwaa_Tobiloba"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/teb111/Spotify-User-Stats"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FaGithub />{" "}
          </a>

          <a
            href="https://www.linkedin.com/in/oluwa-tobiloba/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </p>
      </BottomStyled>
    </>
  );
}
