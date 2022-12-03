contract;
// 1. Importing within the same project
// The "dep" keyword defines the library as a dependency within the program
dep imports_library;

// Unlike the previous hello world example it is actually good practice to import in ABI
// It is also good practice define and import custom errors this way as well

// "use" keyword imports in the library
use imports_library::*;

// 2. Importing the standard library
// The standard library contains
//     a. language primatives
//     b. blockchain contextual operations
//     c. native asset management
//     etc.
// Things in solidity like msg.sender() block.timestamp() are found here
// https://github.com/FuelLabs/sway/tree/master/sway-lib-std
use std::{
    identity::*,
    address::*,
    constants::*,
    auth::msg_sender,
};

// 3. Importing library from a different project
// Note "math_lib" is not listed as a dependency within the file but it is in forc.toml
// Math libraries copied from https://github.com/sway-libs/concentrated-liquidity/
use math_lib::full_math::*;

storage {
    z: u64 = 0,
    last_user: Identity = Identity::Address(Address::from(ZERO_B256)),
}

impl Imports for Contract {
    #[storage(write)]
    fn add(x: u64, y: u64) {
        storage.z = x + y;
    }

    #[storage(write)]
    fn last_user() {
        storage.last_user = msg_sender().unwrap();
    }

    #[storage(write)]
    fn fixed_point_multiply_and_divide(a: u64, b: u64, c: u64) {
        storage.z = mul_div_u64(a, b, c);
    }
}
