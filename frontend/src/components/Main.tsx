import { useState, useEffect } from "react";
import {
  MainStyled,
  UserDetails,
  Name,
  List,
  UserImage,
  UserInfo,
  SignOut,
  Content,
} from "./styles/Main.styled";
import { getUserInfo } from "../spotify";
import { catchErrors } from "../helpers";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../spotify";
import Loader from "./Loader";

export default function Main() {
  const [user, setUser] = useState<User | null>(null);
  const [followedArtists, setFollowedArtists] = useState<FollowedArtist | null>(
    null
  );
  const [playlists, setPlaylists] = useState<Playlists | null>(null);
  const [recentlyPlayed, setRecentlyPlayed] = useState<Recent | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { user, followedArtists, playlists, recentlyPlayed } =
        await getUserInfo();
      setUser(user);
      setFollowedArtists(followedArtists);
      setPlaylists(playlists);
      setRecentlyPlayed(recentlyPlayed);
      console.log({
        user: user,
        artist: followedArtists,
        playlists,
        recentlyPlayed: recentlyPlayed?.items,
      });
    };
    catchErrors(fetchData());
  }, []);
  const totalPlaylists = playlists ? playlists.total : 0;
  return (
    <>
      {user === null && followedArtists === null ? (
        <Loader />
      ) : (
        <>
          <MainStyled>
            <UserDetails>
              <UserImage alt="" src={user?.images[0].url} />

              <UserInfo>
                <Name
                  href={user?.external_urls?.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user?.display_name}
                </Name>
                <List>
                  <li>
                    <h5>
                      <span>{user?.followers.total}</span> Followers
                    </h5>
                  </li>
                  {followedArtists && (
                    <li>
                      <h5>
                        <span>{followedArtists?.artists?.items?.length}</span>{" "}
                        Following
                      </h5>
                    </li>
                  )}

                  <li>
                    <h5>
                      <span>{totalPlaylists}</span> Playlists
                    </h5>
                  </li>
                </List>
                <SignOut onClick={logout}>
                  Logout &nbsp;
                  <FaSignOutAlt />
                </SignOut>
              </UserInfo>
            </UserDetails>
          </MainStyled>

          <Content>
            <h3>Recently Played</h3>
            <h3>Recently Played</h3>
          </Content>
        </>
      )}
    </>
  );
}
