import Nav from "./Nav"
import NavBottom from "./NavBottom"
import { ProfileBody } from "./styles/ProfileScreen.styled"

export default function ProfileScreen() {
    return (
        <>
        <ProfileBody>
            <Nav />
            <div style={{width: "70%"}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio nesciunt expedita! Voluptas, ipsa dicta. 
                    Facilis debitis corporis laudantium placeat dicta qui impedit distinctio voluptates! Hic beatae quasi fugit maxime!</p>
            </div>

        </ProfileBody>
            <NavBottom />
            </>

    )
}
