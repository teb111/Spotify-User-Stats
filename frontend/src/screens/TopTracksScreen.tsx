import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import TopTracks from "../components/TopTracks";

export default function TopTracksScreen() {
  return (
    <>
      <ProfileBody>
        <Nav />
        <TopTracks />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
