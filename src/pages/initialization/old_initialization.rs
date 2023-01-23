contract;

...

storage {
    state: State = State::NotInitialized,
    blockchain_type: str[11] = "monolithic!",
}

impl Initialization for Contract {
    #[storage(read, write)]
    fn initialize() {
        // Sets the state of the contract to be initalized
        require(storage.state == State::NotInitialized, InitializationError::CannotReinitialize);
        storage.state = State::Initialized;
    }

    #[storage(read, write)]
    fn upgrade_blockchain() {
        // Functions ensuring the contract has been initalized
        require(storage.state == State::Initialized, InitializationError::ContractNotInitialized);
        storage.blockchain_type = "**modular**"
    }

    #[storage(read)]
    fn blockchain() -> str[11] {
        storage.blockchain_type
    }
}
