
library;

pub enum InitError {
    CannotReinitialize: (),
    NotInitialized: (),
}

pub enum DepositError {
    NotBaseAsset: (),
    ZeroAmount: (),
}

pub enum AccessControlError {
    NotAuthorized: (),
}
