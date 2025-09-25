import React from "react";

import myImage from "../assets/south.jpg";



export default function ShowPage() {
  return (
    <div className=" bg-blue-100 py-7 px-7 text-black text-3xl">
      Popular shows airing tonight
      <div>
              <h1>My React App</h1>
                <img src={myImage} width="200" />
       
      </div>
    </div>
  );
}