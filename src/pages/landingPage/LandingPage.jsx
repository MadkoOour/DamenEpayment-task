import React from "react";
import "./LandingPage.css"
class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        {/* image */}
        <div className="image">
          <img src="./images/Damen Cash colored English.svg" alt="logo" />
        </div>
        {/* progress */}
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    );
  }
}
export default LandingPage;
