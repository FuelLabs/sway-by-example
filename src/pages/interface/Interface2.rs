contract;

abi OwnershipExample {
    #[storage(write)]
    fn revoke_ownership();
    #[storage(write)]
    fn set_owner(identity: Identity);
    #[storage(read)]
    fn owner() -> Option<Identity>;
}

storage {
    owner: Option<Identity> = Option::None,
}