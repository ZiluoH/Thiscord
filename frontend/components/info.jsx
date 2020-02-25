import React from 'react';

class Info extends React.Component {

    render(){
        return(
            <div className="info">
                <h1>Welcome to Thiscord</h1>
                <div className="info-item">
                    <div className="info-icon exclamation-icon">
                    </div>
                    <p><strong>Thiscord</strong> is a clone of the awesome Discord! This clone is for purely educational purpose.</p>
                </div>
                <div className="info-item">
                    <div className="info-icon app-icon"></div>
                    <p><strong>Learn about Thiscord</strong> by exploring the site or visiting the <a href="https://github.com/ZiluoH/Thiscord" target="_blank">github</a> repo.</p>
                </div>
                <div className="info-item">
                    <div className="info-icon share-icon"></div>
                    <p><strong>Learn about the developer</strong> and my other projects by visiting my website <a href="https://ziluoh.github.io/" target="_blank">here</a>.</p>
                </div>
                <div className="info-item">
                    <div className="info-icon mobile-icon"></div>
                    <p><strong>Reach me</strong> via <a href="https://www.linkedin.com/in/richard-huang-119154140/" target="_blank">LinkedIn</a> or send me an email at <a href="mailto:ziluoh@gmail.com" target="_blank">ziluoh@gmail.com </a> !</p>
                </div>
            </div>
        )
    }
}

export default Info;