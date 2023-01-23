// Full native UTXO token standard copied from 
// https://github.com/FuelLabs/sway/blob/master/examples/native_token/src/main.sw

contract;

use std::{context::*, token::*};

abi NativeAssetToken {
    fn mint_coins(mint_amount: u64);
    fn burn_coins(burn_amount: u64);
    fn force_transfer_coins(coins: u64, asset_id: ContractId, target: ContractId);
    fn transfer_coins_to_output(coins: u64, asset_id: ContractId, recipient: Address);
    fn deposit();
    fn get_balance(target: ContractId, asset_id: ContractId) -> u64;
    fn mint_and_send_to_contract(amount: u64, destination: ContractId);
    fn mint_and_send_to_address(amount: u64, recipient: Address);
}

...

// contract implmentation 