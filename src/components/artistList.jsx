import { Avatar, Col, Row, Typography } from "antd";
import React, { memo } from "react";

function ArtistList({ artistList }) {
  return (
    <div className="artist-list">
      <Typography>Artists:</Typography>
      {artistList.map(({ data: artist }, index) => {
        return (
          <Row key={index} gutter={10} className="artist-item">
            <Col>
              <Avatar src={artist.visuals?.avatarImage?.sources[0]?.url}>
                {artist.profile.name.charAt(0).toUpperCase()}
              </Avatar>
            </Col>
            <Col>
              <Typography className="artist-name">
                {artist.profile.name}
              </Typography>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export default memo(ArtistList);
