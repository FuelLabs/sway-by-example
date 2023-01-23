contract;

dep lib;
dep errors;

use lib::*;
use errors::*;
use std::{
    identity::Identity,
    constants::ZERO_B256,
};

abi Initialization {
    #[storage(write)]
    fn transfer_ownership(new_owner: Identity);

    #[storage(read)]
    fn owner() -> Identity;
}

storage {
    owner: Identity = Identity::Address(Address {
        // owner initialized in Forc.toml
        value: owner,
    })
}

impl Initialization for Contract {
    #[storage(write)]
    fn transfer_ownership(new_owner: Identity) {
        require(
            new_owner != Identity::Address(Address {value: ZERO_B256}), 
            OwnerError::NewOwnerCannotBeZeroAddress
        );
        storage.owner = new_owner
    }

    #[storage(read)]
    fn owner() -> Identity {
        storage.owner
    }
}
