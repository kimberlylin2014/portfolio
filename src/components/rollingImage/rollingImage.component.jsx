import React from 'react';
import './rollingImage.styles.scss'

const RollingImage = () => {
    return(

    <div id="rolling-background" className="d-flex flex-column justify-content-center           align-items-center">
        <div className="overlay"></div>
        <h2 className="text-center subtitle"><span style={{color: "ffebd9"}}>Project Demos</span></h2>
    </div>
    )
}

export default RollingImage;