// SPDX-License-Identifier: MIT

// Les contrats openzeppelin ont étés installés via npm
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

pragma solidity 0.8.14;

contract SimpleStorage {
    uint data;

    event Set(uint _data, address _addr);

    function set(uint x) public {
        require(x > 0, "Veuillez entrer une valeur positive");
        data = x;
        emit Set(x, msg.sender);
    }

    function get() public view returns (uint) {
        return data;
    }
}
