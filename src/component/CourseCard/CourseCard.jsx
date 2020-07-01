import React from "react";
import "./coursecard.css";
function CourseCard(props) {
    return (
        <div className="cards">
            <div className="image">
                <img src={props.images} width="150PX" alt="gambar" />
            </div>
            <div className="infoText">
                <h3>{props.learn}</h3>
                <p>{props.courses}</p>
            </div>
        </div>
    );
}

export default CourseCard;
