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
