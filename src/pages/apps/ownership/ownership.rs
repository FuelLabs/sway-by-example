
contract;

mod errors;

use std::auth::{msg_sender};
use ::errors::{AccessControlError, InitError};


// configurable {
//     OWNER: Identity = Identity::Address(Address::from(0x0000000000000000000000000000000000000000000000000000000000000000)),
// }

storage {
    owner: Option<Identity> = Option::None,
}

abi MyContract {
    #[storage(read, write)]
    fn init();

    #[storage(read)]
    fn owner() -> Option<Identity>;

    #[storage(read, write)]
    fn set_owner(id: Identity);
}

impl MyContract for Contract {
    #[storage(read, write)]
    fn init() {
        require(storage.owner.is_none(), InitError::CannotReinitialize);
        let sender = msg_sender().unwrap();
        storage.owner = Option::Some(sender);
    }

    #[storage(read)]
    fn owner() -> Option<Identity> {
        storage.owner
    }

    #[storage(read, write)]
    fn set_owner(id: Identity) {
        let sender = msg_sender();
        require(sender.unwrap() == storage.owner.unwrap(), AccessControlError::UnauthorizedError);
        storage.owner = Option::Some(id);
    }
}
