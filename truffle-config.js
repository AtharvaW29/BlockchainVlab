const path = require("path");

require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const { url } = require("inspector");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // match any network
      websockets: true
    },
    rinkeby: {
      provider: () => new HDWalletProvider([privateKey], `https://eth-mainnet.g.alchemy.com/v2/BReF7XGuZ3rvIF4uJ95gT2HV3MSwXaFC`),
      network_id: 4, // Rinkeby network ID
      gas: 5000000, // Adjust gas limit if needed
      gasPrice: 2000000000 // Adjust gas price if needed
    }
  },
};
