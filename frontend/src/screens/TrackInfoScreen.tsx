import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import Track from "../components/Track";
import { useParams } from "react-router";

export default function TrackInfoScreen() {
  const id = useParams();

  return (
    <>
      <ProfileBody>
        <Nav />
        <Track id={id} />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
