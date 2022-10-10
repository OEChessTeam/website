import './landing.scss';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';
import AwesomeSlider from "react-awesome-slider";
import 'react-awesome-slider/dist/styles.css';
import blob from './blob.svg';
import { ArrowDownward } from "@material-ui/icons";

const AutoPlaySlider = withAutoPlay(AwesomeSlider);

function Landing() {
    return (
        <div className="Landing" id="landing">
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
                                source: "./assets/ajwe.png"
                            },
                            {
                                source: "./assets/IMG_3754.jpeg"
                            }
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