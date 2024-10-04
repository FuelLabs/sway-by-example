contract;
// Importing within the same project
// ABI
// must be imported first
mod imports_library;

// Unlike the previous hello world example it is actually good practice to import in ABI
// It is also good practice define and import custom errors this way as well

// 1. Importing within the same project
// "use" keyword imports in the library
use ::imports_library::*;

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
use libraries::data_structures::Player;

impl Imports for Contract {
    fn add(_x: u64, _y: u64) {
        let z = _x + _y;
    }

    fn last_user() {
        let user = msg_sender().unwrap();
    }

    fn create_player(_score: u64) {
        let player = Player {
            id: msg_sender().unwrap(),
            score: _score
        };
    }
}
