import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import Recent from "../components/Recent";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";

export default function RecentlyPlayedScreen() {
  return (
    <>
      <ProfileBody>
        <Nav />
        <Recent />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
