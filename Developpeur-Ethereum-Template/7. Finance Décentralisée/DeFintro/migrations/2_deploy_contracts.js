// 2_deploy_contracts.js
const Dai = artifacts.require("Dai");
const MyDeFiProject = artifacts.require("MyDeFiProject");
 
module.exports = async function(deployer, _network, accounts) {
    //Deploiement du contrat Dai
	await deployer.deploy(Dai);

    //Récupération du contrat Dai déployé
	const dai = await Dai.deployed();

    //Déploiement du contrat MyDeFiProject
	await deployer.deploy(MyDeFiProject, dai.address);

    //Récupération du contrat MyDeFiProject déployé
	const myDeFiProject = await MyDeFiProject.deployed();

    //Mint de 100 dai sur le smart contract : myDeFiProject 
	await dai.faucet(myDeFiProject.address, 100);
    const balance2 = await dai.balanceOf(myDeFiProject.address);
	console.log(balance2.toString());


    //Transfert du Dai du SC myDeFiProject vers accounts[1]
	await myDeFiProject.foo(accounts[1], 100);

	const balance0 = await dai.balanceOf(myDeFiProject.address);
	const balance1 = await dai.balanceOf(accounts[1]);

	console.log(balance0.toString());
	console.log(balance1.toString());
};
