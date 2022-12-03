contract;

dep errors;
dep error_handling_library;

use errors::*;
use error_handling_library::*;

use std::{
    revert::{
        revert,
        require,
    },
    assert::assert,
};

impl Error for Contract {
    fn test_revert(special_number: u64) {
        if (special_number != 42) {
            revert(0)
        }
    }

    fn test_require(special_number: u64) {
        require(special_number == 42, "Special number must be equal to 42");
    }

    fn test_assert(special_number: u64) {
        assert(special_number == 42);
    }

    fn test_custom_require(special_number: u64) {
        require(special_number == 42, InputError::InputSmallerThan42);
    }
}
