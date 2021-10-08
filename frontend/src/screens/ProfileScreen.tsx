import Main from "../components/Main"
import Nav from "../components/Nav"
import NavBottom from "../components/NavBottom"
import { ProfileBody } from "../components/styles/ProfileScreen.styled"

export default function ProfileScreen() {
    return (
        <>
        <ProfileBody>
            <Nav />
           <Main />

        </ProfileBody>
            <NavBottom />
            </>

    )
}
