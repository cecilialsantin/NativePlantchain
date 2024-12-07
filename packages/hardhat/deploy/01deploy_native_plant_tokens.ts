import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployNativePlantTokens: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy the contract
  const deployment = await deploy("NativePlantTokens", {
    from: deployer,
    args: [], // No arguments needed for the constructor
    log: true,
    autoMine: true, // Automatically mine the deployment transaction on local networks
  });

  // Log the contract address
  console.log("NativePlantTokens deployed at:", deployment.address);
};

export default deployNativePlantTokens;

deployNativePlantTokens.tags = ["NativePlantTokens"];
