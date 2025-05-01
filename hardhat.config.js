/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    // For local development
    localhost: {
      url: "http://127.0.0.1:8545", // Default Hardhat localhost URL
      chainId: 31337, // Hardhat's default chain ID
    }
    
  },
};