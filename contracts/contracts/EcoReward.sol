// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract EcoReward is ERC20, Ownable {
    mapping(address => bool) public authorizedVerifiers;
    
    // Tokenomics variables
    uint256 public maxSupply = 100_000_000 * 10 ** 18; // 100M ECO tokens max
    uint256 public lockedSupply; // Tokens locked in treasury/vesting
    uint256 public lpLockedTokens; // Tokens locked in liquidity pools
    uint256 public circulatingSupply; // Tokens in circulation
    
    // Allocation tracking
    uint256 public communityRewards; // 40% - User rewards for recycling
    uint256 public enterpriseAlloc; // 20% - Enterprise/partnerships
    uint256 public devAlloc; // 15% - Development & operations
    uint256 public treasuryAlloc; // 15% - Treasury/ecosystem
    uint256 public lpAlloc; // 10% - Liquidity pools

    event VerifierAdded(address indexed verifier);
    event VerifierRemoved(address indexed verifier);
    event RewardIssued(address indexed user, uint256 amount, string scanId);
    event TokensLockedForLP(uint256 amount);
    event TokensUnlockedFromLP(uint256 amount);
    event AllocationUpdated(uint256 community, uint256 enterprise, uint256 dev, uint256 treasury, uint256 lp);

    constructor(address initialOwner) ERC20("EcoToken", "ECO") Ownable(initialOwner) {
        // Initialize allocations (in percentages, will be converted to amounts)
        communityRewards = (maxSupply * 40) / 100;
        enterpriseAlloc = (maxSupply * 20) / 100;
        devAlloc = (maxSupply * 15) / 100;
        treasuryAlloc = (maxSupply * 15) / 100;
        lpAlloc = (maxSupply * 10) / 100;
        
        // Initially, LP tokens are locked as part of treasury
        lpLockedTokens = lpAlloc;
        lockedSupply = treasuryAlloc + enterpriseAlloc + devAlloc + lpAlloc;
        circulatingSupply = communityRewards;
    }

    modifier onlyVerifierOrOwner() {
        require(owner() == _msgSender() || authorizedVerifiers[_msgSender()], "Not authorized");
        _;
    }

    function addVerifier(address verifier) external onlyOwner {
        authorizedVerifiers[verifier] = true;
        emit VerifierAdded(verifier);
    }

    function removeVerifier(address verifier) external onlyOwner {
        authorizedVerifiers[verifier] = false;
        emit VerifierRemoved(verifier);
    }

    function issueReward(address user, uint256 amount, string memory scanId) external onlyVerifierOrOwner {
        require(totalSupply() + amount <= maxSupply, "Max supply exceeded");
        _mint(user, amount);
        circulatingSupply += amount;
        emit RewardIssued(user, amount, scanId);
    }
    
    // Tokenomics functions
    function lockTokensForLP(uint256 amount) external onlyOwner {
        require(amount <= lpAlloc - lpLockedTokens, "Exceeds LP allocation");
        lpLockedTokens += amount;
        lockedSupply += amount;
        circulatingSupply -= amount;
        emit TokensLockedForLP(amount);
    }
    
    function unlockTokensFromLP(uint256 amount) external onlyOwner {
        require(amount <= lpLockedTokens, "Cannot unlock more than locked");
        lpLockedTokens -= amount;
        lockedSupply -= amount;
        circulatingSupply += amount;
        emit TokensUnlockedFromLP(amount);
    }
    
    // Get liquidity ratio (locked / total)
    function getLiquidityRatio() public view returns (uint256) {
        if (totalSupply() == 0) return 0;
        return (lpLockedTokens * 10000) / totalSupply(); // Returns in basis points (100 = 1%)
    }
    
    // Get circulation ratio (circulating / max supply)
    function getCirculationRatio() public view returns (uint256) {
        if (maxSupply == 0) return 0;
        return (circulatingSupply * 10000) / maxSupply;
    }
    
    // Get locked ratio (locked / max supply)
    function getLockedRatio() public view returns (uint256) {
        if (maxSupply == 0) return 0;
        return (lockedSupply * 10000) / maxSupply;
    }
    
    // Get allocation percentages (in basis points)
    function getAllocations() public view returns (
        uint256 communityRatio,
        uint256 enterpriseRatio,
        uint256 devRatio,
        uint256 treasuryRatio,
        uint256 lpRatio
    ) {
        return (
            (communityRewards * 10000) / maxSupply,
            (enterpriseAlloc * 10000) / maxSupply,
            (devAlloc * 10000) / maxSupply,
            (treasuryAlloc * 10000) / maxSupply,
            (lpAlloc * 10000) / maxSupply
        );
    }
    
    // Get tokenomics data
    function getTokenomicsData() public view returns (
        uint256 _totalSupply,
        uint256 _maxSupply,
        uint256 _circulatingSupply,
        uint256 _lockedSupply,
        uint256 _lpLocked,
        uint256 _liquidityRatio
    ) {
        return (
            totalSupply(),
            maxSupply,
            circulatingSupply,
            lockedSupply,
            lpLockedTokens,
            getLiquidityRatio()
        );
    }
}
