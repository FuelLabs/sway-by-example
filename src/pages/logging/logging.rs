contract;

use std::logging::log;

abi MyContract {
    fn test_func(msg: str[4]);
}

impl MyContract for Contract {
    fn test_func(msg: str[4]) {
        log(msg);
    }
}
