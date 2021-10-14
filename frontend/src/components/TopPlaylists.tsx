import { useState, useEffect } from "react";
import { ArtistContent } from "./styles/TopArtist.styled";
import { TopPlaylistsContainer } from "./styles/TopPlaylists.styled";
export default function TopPlaylists() {
  const [playlists, setPlaylists] = useState<RecentlyOrArtists>([]);
  return (
    <TopPlaylistsContainer>
      <h3>Your playlists</h3>
      <ArtistContent>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" alt="" />
          <a>Kim Walker</a>
        </div>
      </ArtistContent>
    </TopPlaylistsContainer>
  );
}
