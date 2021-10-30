require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind hospital give argue front sleep'; 
let testAccounts = [
"0xa2cda50cda7c0e3930df1731a021737c5f4ea5a3dd6cd499478d63f474f806b5",
"0x1d3d7b0e95c0cea351ac77f5cccecebdba8e66f03c67f772db2b1a72d5c47db5",
"0x385afa7c7ff66f3431a051559243228516b6b2888b44c9226667e5f833cdfdcf",
"0xe26fd0f157f66759bd3a1b266de3caeedecd10334e2d45c413ec50bd782ed49c",
"0x10001c58410da5b62aa80432e8219272cb68d55ecbec5f954624e6c2ac71d637",
"0x41b0759318a4b6b4a11220da613048fe0309f323e8c3bc73addc88eedbb19a1c",
"0x99d5058e114998e1dd044c07b37a7cd7b6673e950fdbc6e6acc9b2e19ecf24ef",
"0x084301ba6cbca2abaa06534c7b6b6c0735a6454a4cab5fd25d8f75a3c6cdb764",
"0xc3535cd6529a89642061c188c3e9335bba2f03f0652d3b1269fe95f6457e6923",
"0x2ab0ac4be924934d750bfe8d032cff8a104953aa4ebc7bfe8c85902776841f16"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

