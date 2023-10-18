contract;

// BASE_ASSET_ID
// msg_asset_id, msg_amount
// payable
// transfer 

mod errors;

use std::auth::msg_sender;
use std::{
    call_frames::msg_asset_id,
    constants::BASE_ASSET_ID,
    context::msg_amount,
    token::transfer,
};
use ::errors::{AccessControlError, DepositError, InitError};

abi MyWallet {
    #[storage(read)]
    fn owner() -> Option<Identity>;

    #[storage(read, write)]
    fn init();

    #[storage(read, write), payable]
    fn deposit();

    #[storage(read, write)]
    fn send(to: Identity, amount: u64);
}

storage {
    owner: Option<Identity> = Option::None,
}

impl MyWallet for Contract {
    #[storage(read)]
    fn owner() -> Option<Identity> {
        storage.owner
    }

    #[storage(read, write)]
    fn init() {
        require(storage.owner.is_none(), InitError::CannotReinitialize);
        let sender = msg_sender().unwrap();
        storage.owner = Option::Some(sender);
    }

    #[storage(read, write), payable]
    fn deposit() {
        require(storage.owner.is_some(), InitError::NotInitialized);
        require(msg_asset_id() == BASE_ASSET_ID, DepositError::NotBaseAsset);
        require(msg_amount() > 0, DepositError::ZeroAmount);
    }

    #[storage(read, write)]
    fn send(to: Identity, amount: u64) {
        let sender = msg_sender();
        require(sender.unwrap() == storage.owner.unwrap(), AccessControlError::NotAuthorized);
        transfer(amount, BASE_ASSET_ID, to);
    }
}
