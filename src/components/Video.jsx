import React from "react";
import { FaTimes } from "react-icons/fa";

const Video = (props) => {
  return props.trigger ? (
    <div className="fixed top-0 left-0 w-screen h-screen bg-navy z-20">
      <div className="flex justify-end p-4 mb-2">
        <FaTimes
          className="text-cyan cursor-pointer hover:scale-105 duration-200"
          size={40}
          onClick={() => props.setTrigger(false)}
        />
      </div>

      <div className="flex justify-center items-center">
        <iframe
          className="w-10/12 aspect-video"
          src={props.url}
          title="Demo video"
          allowFullScreen="true"
        />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Video;
