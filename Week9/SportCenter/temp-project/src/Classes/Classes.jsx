import React from "react";
import "./Classes.css";
import { useState } from "react";

const classData = {
    yoga: {
        title: "Why are your Yoga?",
        desc: "Lorem ipsum dolor sit amet...",
        timeTitle: "When comes Yoga Your Time.",
        time: "Saturday-Sunday: 8:00am - 10:00am",
        timeAdd: "Monday-Tuesday: 10:00am - 12:00pm",
        timeExtra: "Wednesday-Friday: 3:00pm - 6:00pm",
        imgSrc: "./images/yoga.jpg",
    },
    group: {
        title: "Group Classes",
        desc: "Enjoy the pleasure of working out while socializing...",
        timeTitle: "Group Classes Schedule",
        time: "Saturday-Sunday: 10:00am - 12:00pm",
        timeAdd: "Monday-Tuesday: 1:00pm - 3:00pm",
        timeExtra: "Wednesday-Friday: 5:00pm - 7:00pm",
        imgSrc: "./images/group.webp",
    },
    solo: {
        title: "Solo Workouts",
        desc: "Achieve your personal goals with individual training sessions...",
        timeTitle: "Solo Workouts Schedule",
        time: "Everyday: 6:00am - 8:00am",
        timeAdd: "",
        timeExtra: "Everyday: 4:00pm - 6:00pm",
        imgSrc: "./images/solo.jpg",
    },
    stretching: {
        title: "Stretching Sessions",
        desc: "Stretching sessions for flexibility and relaxation...",
        timeTitle: "Stretching Sessions Schedule",
        time: "Saturday-Sunday: 8:00am - 9:00am",
        timeAdd: "Monday-Tuesday: 4:00pm - 5:00pm",
        timeExtra: "Wednesday-Friday: 7:00pm - 8:00pm",
        imgSrc: "./images/stret.webp",
    },
};


const Classes = () => {
    const [selectedClass, setSelectedClass] = useState(classData.yoga);
    return (
        <section className="section-white classes" id="classes">
            <div className="classes-container">
                <div className="classes-info">
                    <h2>OUR CLASSES</h2>
                    <div className="classes-info-p">
                        <p>Lorem ıpsum is not simply random text. It has roots in a piece of classical at </p>
                        <p>Hampden-Sydney College </p>
                    </div>
                </div>
                <div className="classes-buttons">
                    {Object.keys(classData).map((key) => (
                        <button
                            key={key}
                            className={selectedClass === classData[key] ? "highlight" : ""}
                            onClick={() => setSelectedClass(classData[key])}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="classes-choosen">
                    <div className="classes-choosen-info">
                        <h3 id="info-title">{selectedClass.title}</h3>
                        <p p id="info-desc">{selectedClass.desc}</p>
                        <h3 id="info-time-title">{selectedClass.timeTitle}</h3>
                        <p id="info-time">{selectedClass.time}</p>
                        <p id="info-time-add">{selectedClass.timeAdd}</p>
                        <p id="info-time-extra">{selectedClass.timeExtra}</p>
                    </div>
                    <div class="classes-choosen-photo">
                        <img id="classes-chosen-photo" src={selectedClass.imgSrc} alt="Class" />
                    </div>
                </div>
            </div>
            <div className="bmi-calculator">
                <div className="bmi-info">
                    <div className="bmi-info-top">
                        <h3>BMI Calculator</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                    </div>
                    <div className="bmi-inputs">
                        <div className="bmi-input">
                            <input type="text" placeholder="Your Height" id="height" /><span style={{ fontSize: "14px", color: "rgb(38, 36, 36)", fontWeight: 300 }}>cm</span>

                        </div>
                        <div className="bmi-input">
                            <input type="text" placeholder="Your Weight" id="weight" /><span style={{ fontSize: "14px", color: "rgb(38, 36, 36)", fontWeight: 300 }}>kg</span>
                        </div>
                    </div>
                </div>
                <div className="bmi-img">
                    <h3 style={{ color: "black", textAlign: "center", fontSize: "18px", marginBottom: "4px" }}> Your BMI</h3>

                    <img src="/images/bmi-index.jpg" alt="bmi" />
                    <div id="bmi-indicator"></div>
                </div>
            </div>
        </section>

    );
}
export default Classes;