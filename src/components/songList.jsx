import { Col, Image, Row, Typography } from "antd";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

function SongList({ songList }) {
  const navigate = useNavigate();

  const handleClick = (id) => navigate(`/track/${id}`);

  return (
    <div className="song-list">
      <Typography>Tracks:</Typography>
      {songList.map(({ data: song }, index) => (
        <Row
          className="song-item"
          key={index}
          gutter={20}
          onClick={() => handleClick(song.id)}
        >
          <Col span={6}>
            <Image
              src={song.albumOfTrack.coverArt.sources[0].url}
              alt={song.albumOfTrack.coverArt.sources[0].url}
            />
          </Col>
          <Col span={18}>
            <Typography className="song-name">{song.name}</Typography>
            {song.artists.items.map((item, index) => (
              <p key={index} className="song-author mg-0 pd-0">
                {item.profile.name || ""}
              </p>
            ))}
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default memo(SongList);
