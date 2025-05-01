const { ethers } = require("hardhat");

async function main() {
  // Get the deployer's account
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the contract
  const CollegeERP = await ethers.getContractFactory("CollegeERP");
  const collegeERP = await CollegeERP.deploy();

  console.log("CollegeERP contract deployed to:", await collegeERP.getAddress());
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
