contract;

dep interface;
use interface::*;

use std::{
    constants::ZERO_B256,
    auth::msg_sender,
    identity::*,
};

storage {
    my_address_identity: Address = Address::from(secret_b256),
    my_contract_identity: ContractId = ContractId::from(secret_b256),
}

impl AccountTypes for Contract {
    fn convert_b256_to_address(some_b256: b256) -> Address {
        return Address::from(some_b256);
    }

    fn convert_b256_to_contract(some_b256: b256) -> ContractId {
        return ContractId::from(some_b256);
    }

    fn convert_b256_to_identity(some_b256: b256) -> Identity {
        return Identity::ContractId(ContractId::from(some_b256));
        // return Identity::Address(Address::from(some_b256));
    }
    
    // Expecting both Contracts and/or EOAs to be calling this function
    #[storage(read)]
    fn match_identity(some_identity: Identity) -> str[17] {
        let my_contract_identity = storage.my_contract_identity;
        let my_address_identity = storage.my_address_identity;

        match some_identity {
            // For example token transfers are handled differently between contracts and EOAs
            my_contract_identity => {
                /* 
                Do something CONTRACT related!
                transfer_to_address(amount, token_id, address)
                */
                "Contract Identity"
            },
            my_address_identity => {
                /* 
                Do something ADDRESS related!
                force_transfer_to_contract(amount, token_id, contract_id)
                */
                "Address Identity!"
            },
            _ => "Mismatch Identity",
        }
    }
}
