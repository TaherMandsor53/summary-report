import React, { useState } from 'react';
import riskImg from '../assets/risk_img.svg';
import MessageComponent from '../common-components/MessageComponent';

export default function Home() {
  const [popupOpen, setPopupOpen] = useState(false);

  const onSummaryBtnClick = () => {
    setPopupOpen(true);
  };

  const onPopupClose = () => {
    setPopupOpen(false);
  };
  return (
    <div className="home-main">
      <header className="home-header">
        <div className="your-text">Your</div>
        <div className="dashboard-text">Dashboard</div>
      </header>
      <div className="content">
        <div className="top-section">
          <div className="left-section">
            <div className="last-scan">last scan details</div>
            <div className="scan-details">
              <div className="left-scan">
                <div className="integration-text">integration family :</div>
                <div className="sbc-text">SBC</div>
              </div>
              <div className="left-scan">
                <div className="integration-text">application name :</div>
                <div className="sbc-text">Avaya SBC</div>
              </div>
            </div>
            <div className="scan-details">
              <div className="left-scan">
                <div className="integration-text">scan ID:</div>
                <div className="sbc-text">F332B7</div>
              </div>
              <div className="left-scan">
                <div className="integration-text">application date :</div>
                <div className="sbc-text">29.11.2020</div>
              </div>
            </div>
          </div>
          <div className="middle-section">
            <img src={riskImg} alt="riskImg" className="risk-img" />
          </div>
          <div className="right-section">
            <div className="risk-text">
              <div className="risk-level-text">Risk level</div>
              <div className="risk-low">low</div>
            </div>
            <button className="summary-btn" onClick={onSummaryBtnClick}>
              summary report
            </button>
          </div>
        </div>
      </div>
      {popupOpen && (
        <MessageComponent
          modalOpen={popupOpen}
          modalHeader="Summary Report"
          closeModal={onPopupClose}
          amount={''}
          popupMsg={'You clicked on summary report'}
        />
      )}
    </div>
  );
}
