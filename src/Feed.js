import React from 'react'
import "./Feed.css"
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Avatar } from '@mui/material';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <div className="header">
        <div className="header-feed">
          <label style={{ marginLeft: "0.8rem" }}>Home</label>
          <AutoAwesomeOutlinedIcon style={{ marginRight: "0.8rem" }} />
        </div>
      </div>
      <div className="feed-container">
        <div className="feed-top">
          <Avatar />
          <input placeholder="What's Happening?"></input>
        </div>
        <div className="feed-bottom">
          <div className="left">
            <ImageOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
            <GifBoxOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
            <ListOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
            <SentimentSatisfiedAltOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
            <CalendarMonthOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
            <LocationOnOutlinedIcon style={{color: "#00acee", marginRight: "0.7rem"}}/>
          </div>
          <div className="right">
            <button>Tweet</button>
          </div>

        </div>
        
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />




    </div>
    
    
  );
}

export default Feed