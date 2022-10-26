import './landing.scss';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import { ArrowDownward } from "@material-ui/icons";
import Topbar from "../topbar/Topbar";

const AutoPlaySlider = withAutoPlay(AwesomeSlider);

function Landing() {
    return (
        <div className="Landing" id="landing">
            <Topbar />
            <div className="Content">
                <div className="left">
                    <AutoPlaySlider
                        organicArrows={false}
                        className="awesomeSlider"
                        play={true}
                        cancelOnInteraction={false}
                        interval={3500}
                        infinite={true}
                        bullets={false}
                        media={[
                            {
                                source: "./assets/IMG_20220213_074515_133.jpg"
                            },
                            {
                                source: "./assets/IMG_3754.jpeg"
                            },
                            {
                                source: "./assets/20220212_121541.jpg"
                            },
                            {
                                source: "./assets/IMG_20220211_184019_698.jpg"
                            },
                        ]}
                    />
                </div>
                <div className="right">
                    <div className="wrapper">
                        <div className="text">
                            <h2>We're</h2>
                            <h1>Oswego East Chess</h1>
                            <h3>An Inclusive Chess Environment at <br />Oswego East High School</h3>
                        </div>
                    </div>
                </div>
                <a href="#present">
                    <ArrowDownward className="img" />
                </a>
            </div>
        </div>
    );
}

export default Landing;