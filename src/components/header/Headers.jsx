import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/svg/meta-logo.svg";
import { ReactComponent as ConnectIcon } from "../../assets/svg/connect-icon.svg";
import { ReactComponent as LogoutIcon } from "../../assets/svg/logout.svg";
import "./header.css"

const Header = ({ isWalletConnected, onConnect, onLogout }) => {
  return (
      <div className="header-container">
        <div className="header-logo">
          <LogoIcon className="logo-icon" />
        </div>
        {isWalletConnected ? (
          <button className="connect-wallet" onClick={onLogout}>
            Logout
            <span className="wallet-icon">
              <LogoutIcon height={30} width={30} />
            </span>
          </button>
        ) : (
          <button className="connect-wallet" onClick={onConnect}>
            Connect Wallet
            <span className="wallet-icon">
              <ConnectIcon />
            </span>
          </button>
        )}
      </div>
  );
};

export default Header;
