// On recup le package du provider de wallet de truflle  
const HDWalletProvider = require('@truffle/hdwallet-provider');
// On recup le package dotenv pour pouvoir lire les variables d'environnements d'un fichier .env
require('dotenv').config();

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    ropsten:{
      provider : function() {return new HDWalletProvider({mnemonic:{phrase:`${process.env.MNEMONIC}`},providerOrUrl:`https://ropsten.infura.io/v3/${process.env.INFURA_ID}`})},
      network_id:3,
    } 
  },

  // Set default mocha options here, use special reporters, etc.
  // https://mochajs.org/api/mocha
  // https://mochajs.org/#reporters
  mocha: {
    // timeout: 100000*
    useColors: true,
    // https://mochajs.org/#nyan
    reporter: "nyan",
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.14",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  },
};
