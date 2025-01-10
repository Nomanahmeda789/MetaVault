import React, { useState, useEffect } from "react";
import './App.css';
import { ethers } from "ethers";
import { Biconomy } from "@biconomy/mexa";
import Wallet from "./components/wallet/Wallet";
import Headers from "./components/header/Headers";
import Footer from "./components/footer/Footer";
import WalletDetails from "./components/wallet/WalletDetails";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false); // Track wallet connection status

  const handleConnectWallet = () => {
    setIsWalletConnected(true);
  };

  const handleLogoutWallet = () => {
    setIsWalletConnected(false);
  };

  useEffect(() => {
    const initBiconomy = async () => {
      try {
        console.log("Initializing Biconomy...");
        if (!window.ethereum) {
          alert("No Web3 provider found. Please install MetaMask.");
          return;
        }

        const biconomy = new Biconomy(window.ethereum, {
          apiKey: "_yeMRvwEW.5187d56d-98ce-44c1-ab72-22a9d26c0a5f", // Replace with your API key
          contractAddresses: ["0xca998380e26826da14d63d17f25aa199f206a356"], // Replace with your contract address
          debug: true,
        });

        biconomy.on("ready", () => {
          console.log("Biconomy is ready");
          const biconomyProvider = new ethers.providers.Web3Provider(biconomy);
          setProvider(biconomyProvider); // Enable the button
        });

        biconomy.on("error", (error) => {
          console.error("Biconomy initialization error:", error);
        });
      } catch (error) {
        console.error("Error initializing Biconomy:", error.message);
      }
    };

    initBiconomy();

    if (!provider && window.ethereum) {
      console.log("Fallback: Using window.ethereum for provider.");
      const fallbackProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(fallbackProvider);
    }
  }, [provider]);

  const connectWallet = async () => {
    if (!provider) {
      alert("Provider is not initialized. Please wait.");
      return;
    }

    try {
      await provider.provider.request({ method: "eth_requestAccounts" });

      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);

      setWalletAddress(address);
      setBalance(ethers.utils.formatEther(balance));
      setIsWalletConnected(true); // Update wallet connection status
    } catch (error) {
      console.error("Error connecting wallet:", error.message);
      alert("Failed to connect wallet.");
    }
  };

  return (
    <div>
      <Headers
        isWalletConnected={isWalletConnected}
        onConnect={handleConnectWallet}
        onLogout={handleLogoutWallet}
      />
      {!isWalletConnected ? (
        <Wallet onConnect={connectWallet} />
      ) : (
        <WalletDetails walletAddress={walletAddress} balance={balance} />
      )}
      <Footer />
    </div>
  );
};

export default App;
