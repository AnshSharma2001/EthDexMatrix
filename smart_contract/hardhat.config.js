// https://eth-sepolia.g.alchemy.com/v2/tCRYBlKCM5TbAEiDlrXYe55j85Nyezg8
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/tCRYBlKCM5TbAEiDlrXYe55j85Nyezg8',
      accounts: ['0270710fcb5209892a62ec92e01436f7dd5d55e1d1af995ce3a75903394066a1']
    }
  }
};
