// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";

contract NativePlantTokens is ERC721, Ownable {
    using EnumerableSet for EnumerableSet.UintSet;

    uint256 public tokenCounter;

    struct Plant {
        string speciesName;
        string region;
        string photoURL;
        bool claimed; // True if the user has claimed the token
    }

    struct SubmittedPlant {
        address user;
        string speciesName;
        string region;
        string photoURL;
    }

    mapping(address => EnumerableSet.UintSet) private userTokens;
    mapping(uint256 => Plant) public plants;
    mapping(uint256 => address) private tokenOwners;
    mapping(uint256 => SubmittedPlant) public submittedPlants;

    uint256 public submittedPlantCounter;

    // Events
    event PlantSubmitted(uint256 submissionId, address user, string speciesName, string region, uint256 timestamp);
    event PlantRegistered(uint256 tokenId, address user, string speciesName, string region, uint256 timestamp);
    event TokenClaimed(uint256 tokenId, address user);

   constructor() ERC721("NativePlantToken", "NPT") Ownable(msg.sender) {
    tokenCounter = 0;
    submittedPlantCounter = 0;
}


    function submitPlant(
        string memory speciesName,
        string memory region,
        string memory photoURL
    ) public {
        require(bytes(speciesName).length > 0, "Species name cannot be empty");
        require(bytes(region).length > 0, "Region cannot be empty");
        require(bytes(photoURL).length > 0, "Photo URL cannot be empty");

        uint256 submissionId = submittedPlantCounter;
        submittedPlants[submissionId] = SubmittedPlant(msg.sender, speciesName, region, photoURL);
        emit PlantSubmitted(submissionId, msg.sender, speciesName, region, block.timestamp);
        submittedPlantCounter++;
    }

    function registerPlant(uint256 submissionId) public onlyOwner {
        SubmittedPlant memory submitted = submittedPlants[submissionId];
        require(submitted.user != address(0), "Invalid submission ID");

        uint256 tokenId = tokenCounter;
        plants[tokenId] = Plant(submitted.speciesName, submitted.region, submitted.photoURL, false);
        userTokens[submitted.user].add(tokenId);
        tokenOwners[tokenId] = submitted.user;
        emit PlantRegistered(tokenId, submitted.user, submitted.speciesName, submitted.region, block.timestamp);
        tokenCounter++;

        delete submittedPlants[submissionId];
    }

    function claimToken(uint256 tokenId) public {
        require(tokenOwners[tokenId] == msg.sender, "You don't own this token");
        require(!plants[tokenId].claimed, "Token already claimed");

        plants[tokenId].claimed = true;

        _safeMint(msg.sender, tokenId);

        emit TokenClaimed(tokenId, msg.sender);
    }

    function getUserTokens(address user, uint256 start, uint256 limit) public view returns (uint256[] memory) {
        uint256 totalTokens = userTokens[user].length();
        require(start < totalTokens, "Start index out of bounds");

        uint256 end = start + limit > totalTokens ? totalTokens : start + limit;
        uint256[] memory tokens = new uint256[](end - start);
        for (uint256 i = start; i < end; i++) {
            tokens[i - start] = userTokens[user].at(i);
        }
        return tokens;
    }

    function getPlantDetails(uint256 tokenId) public view returns (Plant memory) {
        return plants[tokenId];
    }

    function getSubmittedPlants(uint256 start, uint256 limit) public view returns (SubmittedPlant[] memory) {
    uint256 total = submittedPlantCounter;
    require(start < total, "Start index out of bounds");

    uint256 end = start + limit > total ? total : start + limit;
    SubmittedPlant[] memory resultPlants = new SubmittedPlant[](end - start);

    for (uint256 i = start; i < end; i++) {
        resultPlants[i - start] = submittedPlants[i];
    }

    return resultPlants;
}


}
