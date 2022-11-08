import React from "react";
import "./Trendtopic.css";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function Trendtopic() {
  return (
    <div className="tt-container">
      <div className="tt-top">
        <div className="category">
          <label style={{marginRight: "0.3rem"}}>Music</label>
          <label>·</label>
          <label  style={{marginLeft: "0.3rem"}}>Trending</label>
        </div>
        <div className="icon">
          <MoreHorizOutlinedIcon style={{color: "gray"}}/>
        </div>
      </div>
      <div className="tt-bottom">
        <label style={{fontSize: "16px", fontWeight: "bold"}}>Quavo</label>
        <label style={{fontSize: "12px", color: "gray"}}>5,2500 Tweets</label>
      </div>

    </div>
  );
}

export default Trendtopic;
