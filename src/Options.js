import React from "react";
import "./Options.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Avatar } from "@mui/material";

function Options() {
  return (
    <div className="options-container">
      <div className="options">
        <TwitterIcon
          style={{paddingLeft: "0.5rem", marginBottom: "0.5rem", color: "#00acee", height: "2rem", width: "2rem" }}
        />

        <div className="option">
          <HomeOutlinedIcon style={{ height: "2rem", width: "2rem" }} />
          <p>Home</p>
        </div>
        <div className="option">
          <TagOutlinedIcon style={{ height: "2rem", width: "2rem" }} />
          <p>Explore</p>
        </div>

        <div className="option">
          <NotificationsOutlinedIcon
            style={{ height: "2rem", width: "2rem" }}
          />
          <p>Notifications</p>
        </div>
        <div className="option">
          <EmailOutlinedIcon style={{ height: "2rem", width: "2rem" }} />
        <p>Messages</p>
        </div>

        <div className="option">
          <BookmarkBorderOutlinedIcon
            style={{ height: "2rem", width: "2rem" }}
          />
          <p>Bookmarks</p>
        </div>
        <div className="option">
          <FeaturedPlayListOutlinedIcon
            style={{ height: "2rem", width: "2rem" }}
          />
          <p>Lists</p>
        </div>
        <div className="option">
          <PersonOutlineOutlinedIcon
            style={{ height: "2rem", width: "2rem" }}
          />
          <p>Profile</p>
        </div>

        <div className="option">
          <MoreHorizOutlinedIcon style={{ height: "2rem", width: "2rem" }} />
        <p>More</p>
        </div>

        <button className="tweet-button">Tweet</button>


      <div className="profile">
        <Avatar className="avatar" style={{height: "2.3rem", width: "2.3rem"}}/>
        <div className="profile-title">
            <label style={{fontWeight: "bold"}}>yunus</label>
            <label>@garavelbeatz</label>
        </div>
        <MoreHorizOutlinedIcon />
      </div>
      </div>

    </div>
  );
}

export default Options;
