async function main() {
	const [deployer] = await ethers.getSigners();
	console.log('Deploying contracts with the account:', deployer.address);
	const ERP = await ethers.getContractFactory('CollegeERP');
	const token = await ERP.deploy();
	await token.waitForDeployment(); 
	console.log('Token address:', await token.getAddress());
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});