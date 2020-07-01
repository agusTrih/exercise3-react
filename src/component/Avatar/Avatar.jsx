import React from "react";
import avatar from "../../assets/image/images1.jpg";
import "./avatar.css";
function Avatar() {
    return (
        <div>
            <img src={avatar} alt="Avatar katara" className="avatar" />
        </div>
    );
}

export default Avatar;
