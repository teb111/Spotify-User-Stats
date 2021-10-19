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
