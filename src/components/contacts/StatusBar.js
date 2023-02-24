import React from "react";
import Moment from "react-moment";

import "../contacts/StatusBar.css";

import batteryIcon from "../../images/Battery.png";
import MobileSignalIcon from "../../images/MobileSignal.png";
import WifiIcon from "../../images/Wifi.png";

function StatusBar() {
  return (
    <div className="status-bar">
      <div className="indicators">
        <div className="status-left">
          <Moment className="status-moment" format="HH:mm" interval={1000} />
        </div>
        <div className="status-center">
          <div className="notch"></div>
        </div>
        <div className="status-right">
          <img src={MobileSignalIcon} alt="Mobile signal" />
          <img src={WifiIcon} alt="Wi-Fi" />
          <img src={batteryIcon} alt="Battery" />
        </div>
      </div>
      <div className="home-title">My Contacts</div>
    </div>
  );
}

export default StatusBar;
