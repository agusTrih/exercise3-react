import React, { useState } from "react";
import "./studentinfo.css";
function StudentInfo() {
    const name = useState("Agus Trihanton");
    const info = useState("Bootcamp Student");
    const bio = useState("coding membuat saya belajar cara berpikir");

    return (
        <div>
            <h2>{name}</h2>
            <h3>{info}</h3>
            <p>{bio}</p>
        </div>
    );
}

export default StudentInfo;
