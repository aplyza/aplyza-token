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
    oklink: "",
    bscscan: "",
    etherscan: ""
  },
  networks: {
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://exchaintestrpc.okex.org`),
      network_id: 65,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://exchainrpc.okex.org`),
      network_id: 66,
      confirmations: 10,
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
