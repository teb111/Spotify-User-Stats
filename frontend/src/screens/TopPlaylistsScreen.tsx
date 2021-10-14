import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import TopPlaylists from "../components/TopPlaylists";

export default function TopPlaylistsScreen() {
  return (
    <>
      <ProfileBody>
        <Nav />
        <TopPlaylists />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
