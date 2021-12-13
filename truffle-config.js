const HDWalletProvider = require('@truffle/hdwallet-provider');
//
const env = require('dotenv').config();
const fs = require("fs")
const mnemonic = fs.readFileSync(".secret").toString().trim();
module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    polygonscan: "ECMVDG146CKEV592Z3YSDRZAZSG8W7S9H9"
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-rpc.com`),
      network_id: 137,
      confirmations: 2,
      timeoutBlocks: 200,
      production: true
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.9"
    }
  },
};
