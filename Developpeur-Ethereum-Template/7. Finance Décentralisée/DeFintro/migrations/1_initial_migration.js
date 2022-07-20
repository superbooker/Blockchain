const Dai = artifacts.require("Dai");

module.exports = async function(deployer, _network, accounts) {
await deployer.deploy(Dai);
};

