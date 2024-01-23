import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="platform-container">
      <ul>
        <li>
          <Link className="platform-netflix" to="/Netflix">
            <img 
            src="https://cdn.icon-icons.com/icons2/3053/PNG/512/netflix_macos_bigsur_icon_189917.png" 
            alt="넷플릭스 로고" />
            <p>광고형스탠다드</p>
            <p>스탠다드</p>
            <p>프리미엄</p>
          </Link>
          
        </li>
        <li>
          <Link className="platform-tving" to="/Tving">
            <img 
            src="https://www.ekn.kr/mnt/file/202204/2022041401000589300024191.jpg" 
            alt="티빙 로고" />
          </Link>
        </li>
        <li>
          <Link className="platform-disneyplus" to="/Disneyplus">
            <img 
            src="https://cdn.icon-icons.com/icons2/2657/PNG/256/disney_plus_icon_161064.png" 
            alt="디즈니플러스 로고" />
          </Link>
        </li>
      </ul>
    </div>
  )
}