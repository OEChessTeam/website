import './present.scss';
import { useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

function Present() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            title: "At state in Peoria - right before competing on Friday!",
            img: "./assets/IMG_20220213_074515_133.jpg"

        },
        {
            title: "Chilling out at our table with some teambuilding!",
            img: "./assets/thatFile.jpg"
        },
        {
            title: "Breakfast before state!",
            img: "./assets/Resized_20220210_070936.jpg"
        },
        {
            title: "5th place as a team at the RAM invitational!",
            img: "./assets/dumbAnshi.jpg"
        }
    ];

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="Present" id="present">
            <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ArrowBack
                className="arrow left"
                onClick={() => handleClick("left")}
            />
            <ArrowForward
                className="arrow right"
                onClick={() => handleClick()}
            />
        </div>
    );
}

export default Present;