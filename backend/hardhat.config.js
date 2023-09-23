require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
const POLYGON_PRIVATE_KEY = "8c61e3d0d3070ce80f5b5d933b6e90a627c2262081195212df5356d9e09bdc0c";
const ALCHEMY_API_KEY = "r4tbM2Dlq0e8fQkeGiAiBwRYGA2bbp9J";
module.exports = {
  solidity: "0.8.19",
  networks:{
    polygon_mumbai:{
      url : `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${POLYGON_PRIVATE_KEY}`],
    }
  },
};
//contract_add = 0x7a5510C7b9561CF3af6f69F5c38a65d776cd2B10