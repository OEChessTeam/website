import React from 'react';
import Landing from "./landing/Landing";
import Present from "./present/Present";
import Topbar from "./topbar/Topbar";


function SLand() {
    return (
        <div className="SLand">
            <Topbar />
            <Landing />
            <Present />
        </div>
    );
}

export default SLand;