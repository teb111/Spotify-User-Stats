import { useParams } from "react-router";
import Artists from "../components/Artists";
import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";

export default function ArtistScreen() {
  const id = useParams();

  return (
    <>
      <ProfileBody>
        <Nav />
        <Artists id={id} />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
