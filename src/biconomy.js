// src/biconomy.js
import { Web3Provider } from "@ethersproject/providers";
import { Hyphen } from "@biconomy/hyphen"; // Corrected import for Hyphen

const provider = new Web3Provider(window.ethereum);
const biconomy = new Hyphen(provider, {
  apiKey: process.env.REACT_APP_BICONOMY_API_KEY,
  debug: true
});

export const biconomyProvider = biconomy.getEthersProvider();
