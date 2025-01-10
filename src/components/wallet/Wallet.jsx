import React from "react";
import "./wallet.css";
import walletIcon from "../../assets/svg/3d-wallet.svg";
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow_outward.svg";

const Wallet = ({ onConnect }) => {
  return (
    <div className="wallet-section-1">
      <div className="wallet-content-1">
        <div className="wallet-title">
          <div className="wallet-detail-1">
            <span>METAVAULT</span>
            <h1 className="top">Welcome To </h1>
            <h1>MetaVault</h1>
            <p className="top sub-heading">Your gateway to the decentralized future.</p>
            <p className="sub-heading">Connect your wallet to explore.</p>
          </div>
          <div className="wallet-button">
            <button className="connect-wallet-main" onClick={onConnect}>
              Connect Wallet
              <span className="arrow">
                <ArrowIcon height={20} className="icon" />
              </span>
            </button>
          </div>
        </div>
        <div className="wallet-image">
          <img src={walletIcon} alt="Wallet Icon" />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
