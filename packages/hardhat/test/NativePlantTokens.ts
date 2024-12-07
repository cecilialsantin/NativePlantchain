import { expect } from "chai";
import { ethers } from "hardhat";
import { NativePlantTokens__factory } from "../typechain-types";

describe("NativePlantTokens", function () {
  let nativePlantTokens: any; // Use 'any' to access deployTransaction
  let owner: any;
  let user: any;

  before(async () => {
    [owner, user] = await ethers.getSigners();

    // Deploy the contract
    const nativePlantTokensFactory = (await ethers.getContractFactory(
      "NativePlantTokens"
    )) as NativePlantTokens__factory;
    nativePlantTokens = await nativePlantTokensFactory.deploy();

    // Wait for the contract to be deployed
    await nativePlantTokens.deployTransaction.wait();
  });

  describe("Deployment", function () {
    it("Should initialize with correct values", async function () {
      expect(await nativePlantTokens.name()).to.equal("NativePlantToken");
      expect(await nativePlantTokens.symbol()).to.equal("NPT");
    });
  });

  describe("Plant Submission", function () {
    it("Should allow users to submit plants", async function () {
      await expect(
        nativePlantTokens.connect(user).submitPlant("Quercus", "Pampeana", "ipfs://photoURL")
      )
        .to.emit(nativePlantTokens, "PlantSubmitted")
        .withArgs(0, user.address, "Quercus", "Pampeana");

      const submittedPlant = await nativePlantTokens.submittedPlants(0);
      expect(submittedPlant.user).to.equal(user.address);
      expect(submittedPlant.speciesName).to.equal("Quercus");
    });
  });

  describe("Plant Registration", function () {
    it("Should allow the owner to register a submitted plant", async function () {
      await nativePlantTokens.connect(user).submitPlant("Quercus", "Pampeana", "ipfs://photoURL");
      await expect(nativePlantTokens.connect(owner).registerPlant(0))
        .to.emit(nativePlantTokens, "PlantRegistered")
        .withArgs(0, user.address, "Quercus", "Pampeana");

      const plant = await nativePlantTokens.plants(0);
      expect(plant.speciesName).to.equal("Quercus");
      expect(plant.region).to.equal("Pampeana");
      expect(plant.photoURL).to.equal("ipfs://photoURL");
      expect(plant.claimed).to.equal(false);
    });
  });

  describe("Token Claiming", function () {
    it("Should allow users to claim their token", async function () {
      await nativePlantTokens.connect(user).submitPlant("Quercus", "Pampeana", "ipfs://photoURL");
      await nativePlantTokens.connect(owner).registerPlant(0);

      await expect(nativePlantTokens.connect(user).claimToken(0))
        .to.emit(nativePlantTokens, "TokenClaimed")
        .withArgs(0, user.address);

      expect(await nativePlantTokens.ownerOf(0)).to.equal(user.address);

      const plant = await nativePlantTokens.plants(0);
      expect(plant.claimed).to.equal(true);
    });

    it("Should revert if a non-owner tries to register a plant", async function () {
      await expect(
        nativePlantTokens.connect(user).registerPlant(0)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should revert if a user tries to claim an unregistered token", async function () {
      await expect(
        nativePlantTokens.connect(user).claimToken(0)
      ).to.be.revertedWith("You don't own this token");
    });
  });
});
