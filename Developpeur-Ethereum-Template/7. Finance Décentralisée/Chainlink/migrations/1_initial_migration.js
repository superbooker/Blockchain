// const Chainlink = artifacts.require("Chainlink");

// module.exports = function (deployer) {
//   deployer.deploy(Chainlink);
// };


// const Chainlink2 = artifacts.require("Chainlink2");

// let id = 8984;
// module.exports = function (deployer) {
//   deployer.deploy(Chainlink2,id);
// };


const Chainlink3 = artifacts.require("Chainlink3");

module.exports = function (deployer) {
  deployer.deploy(Chainlink3);
};
