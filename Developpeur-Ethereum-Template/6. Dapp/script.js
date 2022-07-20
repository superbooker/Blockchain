var  Web3  =  require('web3'); 

web3  =  new 

Web3(new  Web3.providers.HttpProvider('https://ropsten.infura.io/v3/f90190060ca0413db94189742bcd20b9'));

var  ethTx  = ('0x4000c540bf08d978684f801bef8f96ffe714d7036cc55d4258ff8e0949adc819');

web3.eth.getTransaction(ethTx, function(err, result) { 

if (!err  &&  result !==  null) {

    console.log(result); // Log all the transaction info

    console.log('From Address: ' +  result.from); // Log the from address

    console.log('To Address: ' +  result.to); // Log the to address

    console.log('Ether Transacted: ' + (web3.utils.fromWei(result.value, 'ether'))); // Get the value, convert from Wei to Ether and log it

}

else {

    console.log('Error!', err); // Dump errors here

}

});
