contract;

/* 
imports,
std-lib,
etc.
*/ 

pub struct flashData {
    amount: u64,
    liquidity_pool: Address,
}

storage {
    state: State = State::NotInitialized,
    token0: ContractId = ContractId{value:0x0000000000000000000000000000000000000000000000000000000000000000},
    token1: ContractId = ContractId{value:0x0000000000000000000000000000000000000000000000000000000000000000},
    flash_fee: u64 = 0,
}

impl LiquidityPool for Contract {
    // initialize the tokens
    #[storage(read, write)]
    fn init(_token0: ContractId, _token1: ContractId, swap_fee: u64) {
        require(storage.state == State::NotInitialized, InitializationError::CannotReinitialize);
        storage.state = State::Initialized;
        storage.token0 = _token0;
        storage.token1 = _token1;

    }

    #[storage(read)]
    fn flash(
        recipient: Identity,
        amount0: u64,
        amount1: u64,
        // TODO add some sort of custom data
        // some struct containing data (better if there was custom data)
    ) {
        reentrancy_guard();
        
        let sender = msg_sender().unwrap();

        // Require that there is some liquidity to flashloan
        let balance_before0 = this_balance(storage.token0);
        let balance_before1 = this_balance(storage.token1);

        require(balance_before0 > 0, "token0-zero-liquidity-depth");
        require(balance_before1 > 0, "token1-zero-liquidity-depth");

        // Calculate fee in terms of how much is being pulled out
        let fee_amount0 = mul_div_rounding_up_u64(amount0, storage.flash_fee, 1000000);
        let fee_amount1 = mul_div_rounding_up_u64(amount1, storage.flash_fee, 1000000);

        // Send tokens along
        if (amount0 > 0) { transfer(amount0, storage.token0, recipient) };
        if (amount1 > 0) { transfer(amount1, storage.token1, recipient) };

        let flashloaner_contract = abi(
            // TODO bad naming case
            FlashLoaner, 
            caller_contract_id().into()
        );

        flashloaner_contract.callback(fee_amount0, fee_amount1);

        let balance_after0 = this_balance(storage.token0);
        let balance_after1 = this_balance(storage.token1);

        // TODO change '<' to '<=' once the U128 std library updates
        require((balance_before0 + storage.flash_fee) < balance_after0, "token0-insufficient-returned");
        require((balance_before1 + storage.flash_fee) < balance_after1, "token1-insufficient-returned");
        
        // sub is safe because we know balanceAfter is gt balanceBefore by at least fee
        let paid0 = balance_after0 - balance_before0;
        let paid1 = balance_after1 - balance_before1;

        log(FlashEvent {
            sender, 
            recipient, 
            amount0, 
            amount1, 
            paid0, 
            paid1
        });
    }
    

    /* 
    withdraws
    deposits
    */ 
}