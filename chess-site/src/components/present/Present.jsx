import './present.scss';
import { useState } from "react";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

function Present() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            desc: "Insert more pandering here",
            img: "./assets/ajwe.png"

        },
        {
            desc: "Just a framework",
            img: "./assets/ajwe.png"
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
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
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