import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import NewReleases from "../components/NewReleases";

export default function NewReleasesScreen() {
  return (
    <>
      <ProfileBody>
        <Nav />
        <NewReleases />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
