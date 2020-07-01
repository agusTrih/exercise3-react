import React from "react";
// component
import Avatar from "../component/Avatar/Avatar";
import StudentInfo from "../component/StudentInfo/StudentInfo";
import CourseCard from "../component/CourseCard/CourseCard";
// css
import "./landingpage.css";
// images
import imgCourse from "../assets/image/images3.png";
import imgCourse2 from "../assets/image/images2.png";

function LandingPage(props) {
    const card = [
        {
            images: imgCourse,
            learn: "Learn HTML fundamental",
            courses:
                "Hypertext Markup Language (HTML) adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets (CSS) dan bahasa scripting seperti JavaScript dan VBScript.",
        },
        {
            images: imgCourse2,
            learn: "Learn CSS Fundamental",
            courses:
                "CSS adalah bahasa style sheet yang digunakan untuk mengatur tampilan dokumen.[2] Dengan adanya CSS memungkinkan kita untuk menampilkan halaman yang sama dengan format yang berbeda.[2]",
        },
    ];
    const listItems = card.map((card) => (
        <CourseCard
            images={card.images}
            courses={card.courses}
            learn={card.learn}
        />
    ));

    return (
        <div>
            <div className="container">
                <Avatar />
                <StudentInfo />
            </div>
            <div className="list">{listItems}</div>
        </div>
    );
}

export default LandingPage;
