var Tx     = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/f90190060ca0413db94189742bcd20b9')
 
const account1 = '0x919E1C7352E10F1F9c202091fa604fA7bf208362'; // Your account address 1
const privateKey1 = Buffer.from('ca0df8e0fcfc1e259bf25905c7fa99749c0b969378d7575693fe0e20dd276cea', 'hex');
 
// Deploy the contract
web3.eth.getTransactionCount(account1, (err, txCount) => {
   const data = '0x608060405234801561001057600080fd5b50610150806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632f048afa1461003b57806357de26a414610057575b600080fd5b610055600480360381019061005091906100c3565b610075565b005b61005f61007f565b60405161006c91906100ff565b60405180910390f35b8060008190555050565b60008054905090565b600080fd5b6000819050919050565b6100a08161008d565b81146100ab57600080fd5b50565b6000813590506100bd81610097565b92915050565b6000602082840312156100d9576100d8610088565b5b60006100e7848285016100ae565b91505092915050565b6100f98161008d565b82525050565b600060208201905061011460008301846100f0565b9291505056fea264697066735822122068cf6398d8734cedb608a7ee6513d58423784ed980b05f01021bb588c9826cb564736f6c634300080e0033';
 
 const txObject = {
   nonce:    web3.utils.toHex(txCount),
   gasLimit: web3.utils.toHex(10000000), // Raise the gas limit to a much higher amount
   gasPrice: web3.utils.toHex(web3.utils.toWei('100', 'gwei')),
   data: data
 }
 
 var tx = new Tx(txObject, {'chain':'ropsten'});
 tx.sign(privateKey1)
 
 const serializedTx = tx.serialize()
 const raw = '0x' + serializedTx.toString('hex')
 
 web3.eth.sendSignedTransaction(raw, (err, txHash) => {
   console.log('txHash:', txHash, 'err:', err)
   // Use this txHash to find the contract on Etherscan!
 })
})
