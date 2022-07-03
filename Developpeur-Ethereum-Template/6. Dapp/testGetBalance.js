const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/f90190060ca0413db94189742bcd20b9"
const web3 = new Web3(rpcURL)
 
web3.eth.getBalance("0x919E1C7352E10F1F9c202091fa604fA7bf208362", (err, wei) => { 
   balance = web3.utils.fromWei(wei, 'ether'); // convertir la valeur en ether
   console.log(balance);
});
