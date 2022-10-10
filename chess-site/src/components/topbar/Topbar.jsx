import './topbar.scss';
import {Instagram} from "@material-ui/icons";

function Topbar() {
    return (
        <div className="Topbar">
            <div className="left">
                <a href="#landing" className="a1">
                    <div className="imgContainer">
                        <img alt="" src=""/>
                    </div>
                    <span>Oswego East Chess</span>
                </a>
                <a href="#present" className="a2">
                    <span>
                        Present
                    </span>
                </a>
                <a href="/login" className="a3">
                    <span>
                        Players
                    </span>
                </a>
            </div>
            <div className="right">
                <div className="icons">
                    <div className="insta">
                        <a href="https://instagram.com/oswegoeastchess?igshid=Y2ZmNzg0YzQ="
                           target="_blank"
                           rel="noreferrer noopenner"
                        >
                            <Instagram className="instagram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;