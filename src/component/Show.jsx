import React from "react";
import myImage from "../assets/south.jpg";
import myImage2 from "../assets/brother.jpg";
import { Link } from "react-router";

export default function Show() {
  return (
    <div className=" bg-purple-200 h-full py-4 px-7 text-black text-3xl flex">
      Popular shows airing tonight
      <div>
        <Link to="/ShowPage">
          South Park
          <img src={myImage} width="200" />
        </Link>
      </div>
      <div>
        <Link to="/BigBrother">
          Big Brother
          <img src={myImage2} width="200" />
        </Link>
      </div>
    </div>
  );
}
