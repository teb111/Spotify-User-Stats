interface User {
  country: string;
  display_name: string;
  email: string;
  external_urls?: {
    spotify: string;
  };
  followers: { total: string };
  images: [
    {
      url: string;
    }
  ];
  product?: string;
  type?: string;
}

interface FollowedArtist {
  artists: {
    items: [];
  };
}

interface Playlists {
  total: number;
}

interface Recent {
  items: [];
  track: {};
}

type RecentlyOrArtists = Array<any> | Recent | null;

interface Track {
  name: string;
  album: {
    name: string;
    images: [
      {
        url: string;
      }
    ];
    release_date: string;
  };
  artists: [];
  uri: string;
  popularity: number;
}

interface PlayList {
  tracks: {
    items: [];
    total: number;
  };
  name: string;
  images: [{ url: string }];
  description: string;
}

interface Artist {
  images: [
    {
      url: string;
    }
  ];
  name: string;
  popularity: string;
  followers: {
    total: number;
  };
  genres: [string, string, string];
}

type ArtistType = Artist | null;

interface ArtistProps {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  total_tracks: number;
}

interface Releases {
  items: [];
}

interface NewReleasesProps {
  name: string;
  id: string;
  images: [
    {
      url: string;
    }
  ];
  total_tracks: number;
  artists: [];
  release_date: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
}
