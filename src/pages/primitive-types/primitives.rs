contract;

// Primitive types
// - Unsigned integers
// - Fixed length string
// - Boolean
// - 256 bits = 32 bytes

abi MyContract {
    fn test_func() -> bool;
}

impl MyContract for Contract {
    fn test_func() -> bool {
        // Unsigned integers
        // 0 <= u8 <= 2**8 - 1
        let u_8: u8 = 123;
        // 0 <= u16 <= 2**16 - 1
        let u_16: u16 = 123;
        // 0 <= u32 <= 2**32 - 1
        let u_32: u32 = 123;
        // 0 <= u64 <= 2**64 - 1
        let u_64: u64 = 123;

        let u_64_max = u64::max();

        // Fixed length string
        let s: str[4] = "fuel";
        // Boolean
        let boo: bool = true;
        // 256 bits = 32 bytes
        let b_256: b256 = 0x1111111111111111111111111111111111111111111111111111111111111111;

        true
    }
}