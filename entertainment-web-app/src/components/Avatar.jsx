import React from "react";
import avatar from "../assets/image-avatar.png";

const Avatar = () => {
  return (
    <div className="avatar_container">
      <img
        className="h-8 border rounded-full border-white drop-shadow-md"
        src={avatar}
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
