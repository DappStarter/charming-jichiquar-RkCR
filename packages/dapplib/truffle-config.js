require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember essay gloom drive fox turkey'; 
let testAccounts = [
"0x661e6716e7a9c12347d0ccb735cba958c65208637180231b9759e1f4dd59e2c9",
"0x8d67c1b84be9140312f024ab8a05ec55347b451c222db48fac5428de7693ee41",
"0x3cdcf9ae3d3d884519af7150999502fd8a5e72546801e52630dc0b759b2c992d",
"0x36f8cb6eee35e08f9ada096f2bd003e0896d3af9198baaff52a15e7470b08711",
"0x1a8025c8ce3777b6f384e886cf06f4dda81a77a0507ebdb478879d652a6027ff",
"0x29edd274340c429c3af96abef2a552af893cd2e1003048e8f41a65bb85573655",
"0xe37cb0021a96df6e8f231869efd283312625e25d6be3e226f9703b17dbf2bd07",
"0x688409c2cb47de8aa949f27db636eaf3a7dda371a1e11696d8beef631cbd86f5",
"0xe36d80b35b2f8924209b669b567808c903a99b93cd8cb731e04db9361fd102e5",
"0x184d4232bb92d9aea9cc22ddd44ccbb67b29f44b30ff7ca8e870c982e3d51cea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

