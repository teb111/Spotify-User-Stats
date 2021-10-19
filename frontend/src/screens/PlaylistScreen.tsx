import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import Playlist from "../components/Playlist";
import { useParams } from "react-router";

export default function PlaylistScreen() {
  const id = useParams();

  return (
    <>
      <ProfileBody>
        <Nav />
        <Playlist id={id} />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
