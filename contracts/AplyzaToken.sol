pragma solidity ^0.8.3;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
contract AplyzaToken is ERC20,AccessControl  {
    using SafeMath for uint256;
    bytes32 public constant BURNER_ROLE = keccak256("MINTER_ROLE");
    constructor() ERC20("Aplyza Game Token", "APZ") {
        _setupRole(BURNER_ROLE, msg.sender);
        _mint(msg.sender,100000000*10**18);
    }
    function burn(uint256 amount) public {
        require(hasRole(BURNER_ROLE, msg.sender), "Caller is not a minter");
        burn(amount);
    }
}