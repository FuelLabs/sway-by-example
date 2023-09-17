contract;

// Configurable constants

configurable {
    MY_NUM: u64 = 123,
    STR: str[4] = "fuel",
    OWNER: Address = Address::from(0x3333333333333333333333333333333333333333333333333333333333333333),
    POINT: Point = Point { x: 1, y: 2 },
}

struct Point {
    x: u64,
    y: u64,
}

abi MyContract {
    fn test_func() -> (u64, str[4], Address, Point);
}

impl MyContract for Contract {
    fn test_func() -> (u64, str[4], Address, Point) {
        (MY_NUM, STR, OWNER, POINT)
    }
}
