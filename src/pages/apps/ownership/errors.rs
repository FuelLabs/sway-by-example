library;

pub enum AccessControlError {
    UnauthorizedError: (),
}

pub enum InitError {
    CannotReinitialize: (),
}
