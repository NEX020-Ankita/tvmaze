import React from "react";
import myImage2 from "../assets/brother.jpg";

export default function BigBrother() {
    return (
      <div className="flex text-2xl text-shadow-cyan-800 bg-green-300 italic max-h-full max-w-full">
       
        <img src={myImage2} width="400" />
        <div>
          "Brother" refers to a male sibling, someone who shares one or more
          parents with another person. The term can also be used endearingly for
          non-familial relationships or for individuals who feel like family.
          For instance, the Japanese company Brother Industries produces and
          sells printers, and you may be looking for information about their
          products or support.
        </div>
      </div>
    );
}