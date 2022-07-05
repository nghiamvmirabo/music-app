export const method = {
  GET: "get",
  POST: "post",
};

export const apiEndpoint = {
  DETECT: "/songs/detect",
  DETECT_V2: "/songs/v2/detect",
  SEARCH: "/search/",
  AUTO_COMPLETE: "auto-complete",
};

export const defaultSearchParams = {
  offset: "0",
  limit: "10",
  numberOfTopResults: "5",
};

export const typeOptions = [
  "multi",
  "albums",
  "artists",
  "episodes",
  "genres",
  "playlists",
  "podcasts",
  "tracks",
  "users",
];
