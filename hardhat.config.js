/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config()
require('@nomiclabs/hardhat-ethers')

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.ALCHEMY_API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
