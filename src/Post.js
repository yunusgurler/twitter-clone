import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
function Post() {
  return (
    <div className="post-container">
      <div className="post-top">
        <Avatar />

        <div className="post-top-content">
          <div className="content-top">
            <label style={{ fontWeight: "bold" }}>Yunus</label>
            <label>@garavelbeatz</label>
            <label>.</label>
            <label>1m</label>
          </div>

          <div className="content-bottom">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      <MoreHorizOutlinedIcon style={{ marginRight: "1.2rem" }} />

      </div>

      <div className="post-bottom">
        <ChatBubbleOutlineOutlinedIcon style={{width: "1rem", height: "1rem"}}/>
        <RepeatOutlinedIcon style={{width: "1rem", height: "1rem"}}/>
        <FavoriteBorderOutlinedIcon style={{width: "1rem", height: "1rem"}}/>
        <IosShareOutlinedIcon style={{width: "1rem", height: "1rem"}}/>
      </div>
    </div>
  );
}

export default Post;
