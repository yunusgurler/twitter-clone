import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Trendtopics.css";
import Trendtopic from "./Trendtopic";
function Trendtopics() {
  return (
    <div className="trend-container">
      <div className="header-tt">
        <div className="search">
          <SearchOutlinedIcon />
          <input placeholder="Search Twitter"></input>
        </div>
      </div>

      <div className="trends">
        <p>Trends for you</p>
      <Trendtopic />
      <Trendtopic />
      <Trendtopic />
      <Trendtopic />
      <Trendtopic />
      <Trendtopic />
      <Trendtopic />

      <p style={{fontSize: "14px", paddingBottom: "1rem", color: "#00acee", fontWeight: "400"}}>Show more</p>

      </div>
    </div>
  );
}

export default Trendtopics;
