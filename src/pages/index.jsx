import { Empty, message } from "antd";
import { useState } from "react";
import ArtistList from "../components/artistList";
import MySearch from "../components/Search";
import SongList from "../components/songList";
import { apiEndpoint, defaultSearchParams, method } from "../dummy";
import { axiosRequest } from "../utils/axios";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [artists, setArtist] = useState([]);

  const handleSearch = ({ searchTerm, selectValue }) => {
    if (!searchTerm) message.warning("Please text the search term!");
    else {
      console.log(searchTerm, selectValue);
      setLoading(true);
      const data = {
        method: method.GET,
        url: apiEndpoint.SEARCH,
        params: { q: searchTerm, type: selectValue, ...defaultSearchParams },
      };
      axiosRequest(data)
        .then((res) => {
          const { tracks, artists, albums } = res.data;
          setTracks(tracks.items);
          setArtist(artists.items);
        })
        .catch((err) => message.error("have an error!!"))
        .finally((_) => setLoading(false));
    }
  };

  return (
    <div className="home">
      <MySearch loading={loading} onSearch={handleSearch} />
      {tracks.length || artists.length ? (
        <>
          <SongList songList={tracks} />
          <hr />
          <ArtistList artistList={artists} />
        </>
      ) : (
        <Empty />
      )}
      <div></div>
    </div>
  );
}
