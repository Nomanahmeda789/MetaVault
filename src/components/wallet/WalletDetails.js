import React, { useState } from "react";
import "./walletDetails.css";
import { ReactComponent as PersonIcon } from "../../assets/svg/person.svg";
import { ReactComponent as CopyIcon } from "../../assets/svg/copy.svg";

const WalletDetails = ({ walletAddress, balance }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="wallet-section">
      <h2 className="main-heading">Your Wallet Details</h2>
      <div className="wallet-content">
        {/* Wallet Details Card */}
        <div className="wallet-detail">
          <div className="detail-card">
            <div className="top">
              <div className="user-name">
                <span>
                  <PersonIcon />
                </span>
                Vault Details
              </div>
              <div>
                <div className="connect-wallet-copy">
                  {walletAddress.length > 15
                    ? `${walletAddress.substring(0, 15)}...`
                    : walletAddress}
                  <button className="wallet-icon" onClick={handleCopy}>
                    <CopyIcon width={24} height={24} />
                  </button>
                  {copied && <span className="copy-feedback">Copied!</span>}
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="balance">Estimated Balance:</div>
              <div className="balance-value">{balance} ETH</div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="wallet-detail">
          <div className="detail-card-2">
            <div className="connect-wallet">Send Transaction</div>
            <div className="connect-wallet">Send Gasless Transaction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDetails;
