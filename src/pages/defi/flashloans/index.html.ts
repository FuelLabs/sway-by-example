// metadata
export const version = "0.8.13"
export const title = "Flashloans"
export const description = "Introduction to Sway"
export const codes = [
    {
        fileName: "flashloaner",
        code: "Y29udHJhY3Q7CgpkZXAgaW50ZXJmYWNlczsKCnVzZSBsaXF1aWRpdHlfcG9vbDo6KjsKCnVzZSBzdGQ6OnsKICAgIGNhbGxfZnJhbWVzOjp7CiAgICAgICAgY29udHJhY3RfaWQsCiAgICB9Cn07CgphYmkgRmxhc2hMb2FuZXIgewogICAgLy8gZmxhc2hDYWxsYmFjawogICAgZm4gY2FsbGJhY2soCiAgICAgICAgZmVlMDogdTY0LAogICAgICAgIGZlZTE6IHU2NCwKICAgICAgICAvLyBzb21lIHNvcnQgb2YgZGF0YQogICAgKTsKICAgIGZuIGluaXRfZmxhc2goCiAgICAgICAgY3VydmU6IENvbnRyYWN0SWQsCiAgICApOwp9CgovLyBzaG91bGQganVzdCBwdXQgaXQgaW4gaGVyZSBmb3Igc2ltcGxpY2l0eQppbXBsIEZsYXNoTG9hbmVyIGZvciBDb250cmFjdCB7CiAgICBmbiBjYWxsYmFjayhmZWUwOiB1NjQsIGZlZTE6IHU2NCkgewogICAgICAgIC8vIFRPRE86IGRlZmluZSB0b2tlbjAsIHRva2VuMSwgYW5kIGxwIGNvbnRyYWN0IC0gc2hvdWxkIGJlIGNvbWluZyBmcm9tIGEgdGhpcmQgZmllbGQgd2hpY2ggaXMgdGhlIGRhdGEKICAgICAgICAvLyBDYW4ganVzdCBoYXJkY29kZSBmb3Igbm93CgogICAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBhbW91bnQgb2YgdG9rZW5zIHJlcXVlc3RlZCBleGlzdHMKCiAgICAgICAgLy8gRG8gc29tZXRoaW5nIHdpdGggdGhlIHRva2VucyEKCiAgICAgICAgLy8gY2FsY3VsYXRlIGhvdyBtdWNoIHRoZSB0b2tlbnMgbmVlZCB0byBiZSByZXR1cm5lZAoKICAgICAgICAvLyB0cmFuc2ZlciB0aGUgdG9rZW5zIGJhY2sgdG8gdGhlIG9yaWdpbmFsIGNvbnRyYWN0CiAgICB9CgogICAgLy8gYWRkIHNvbWUgbW9yZSBwYXJhbXMgaGVyZQogICAgZm4gaW5pdF9mbGFzaChscF9jb250cmFjdF9pZDogQ29udHJhY3RJZCl7CiAgICAgICAgLy8gZ2V0IHRoZSBhZGRyZXNzIG9mIHRoZSBmdW5jdGlvbiB3ZSdyZSBjYWxsaW5nCiAgICAgICAgbGV0IGxwX3Bvb2wgPSBhYmkoCiAgICAgICAgICAgIExpcXVpZGl0eVBvb2wsCiAgICAgICAgICAgIGxwX2NvbnRyYWN0X2lkLmludG8oKQogICAgICAgICk7CgogICAgICAgIC8vIGNhbGwgdGhlIGZsYXNoIGZ1bmN0aW9uCiAgICAgICAgbHBfcG9vbC5mbGFzaCgKICAgICAgICAgICAgSWRlbnRpdHk6OkNvbnRyYWN0SWQoY29udHJhY3RfaWQoKSksCiAgICAgICAgICAgIDEwLAogICAgICAgICAgICAxMCwKICAgICAgICApOwoKICAgIH0KfQ==",
    },
    {
        fileName: "liquidity_pool",
        code: "Y29udHJhY3Q7CgovKiAKaW1wb3J0cywKc3RkLWxpYiwKZXRjLgoqLyAKCnB1YiBzdHJ1Y3QgZmxhc2hEYXRhIHsKICAgIGFtb3VudDogdTY0LAogICAgbGlxdWlkaXR5X3Bvb2w6IEFkZHJlc3MsCn0KCnN0b3JhZ2UgewogICAgc3RhdGU6IFN0YXRlID0gU3RhdGU6Ok5vdEluaXRpYWxpemVkLAogICAgdG9rZW4wOiBDb250cmFjdElkID0gQ29udHJhY3RJZHt2YWx1ZToweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDB9LAogICAgdG9rZW4xOiBDb250cmFjdElkID0gQ29udHJhY3RJZHt2YWx1ZToweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDB9LAogICAgZmxhc2hfZmVlOiB1NjQgPSAwLAp9CgppbXBsIExpcXVpZGl0eVBvb2wgZm9yIENvbnRyYWN0IHsKICAgIC8vIGluaXRpYWxpemUgdGhlIHRva2VucwogICAgI1tzdG9yYWdlKHJlYWQsIHdyaXRlKV0KICAgIGZuIGluaXQoX3Rva2VuMDogQ29udHJhY3RJZCwgX3Rva2VuMTogQ29udHJhY3RJZCwgc3dhcF9mZWU6IHU2NCkgewogICAgICAgIHJlcXVpcmUoc3RvcmFnZS5zdGF0ZSA9PSBTdGF0ZTo6Tm90SW5pdGlhbGl6ZWQsIEluaXRpYWxpemF0aW9uRXJyb3I6OkNhbm5vdFJlaW5pdGlhbGl6ZSk7CiAgICAgICAgc3RvcmFnZS5zdGF0ZSA9IFN0YXRlOjpJbml0aWFsaXplZDsKICAgICAgICBzdG9yYWdlLnRva2VuMCA9IF90b2tlbjA7CiAgICAgICAgc3RvcmFnZS50b2tlbjEgPSBfdG9rZW4xOwoKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBmbGFzaCgKICAgICAgICByZWNpcGllbnQ6IElkZW50aXR5LAogICAgICAgIGFtb3VudDA6IHU2NCwKICAgICAgICBhbW91bnQxOiB1NjQsCiAgICAgICAgLy8gVE9ETyBhZGQgc29tZSBzb3J0IG9mIGN1c3RvbSBkYXRhCiAgICAgICAgLy8gc29tZSBzdHJ1Y3QgY29udGFpbmluZyBkYXRhIChiZXR0ZXIgaWYgdGhlcmUgd2FzIGN1c3RvbSBkYXRhKQogICAgKSB7CiAgICAgICAgcmVlbnRyYW5jeV9ndWFyZCgpOwogICAgICAgIAogICAgICAgIGxldCBzZW5kZXIgPSBtc2dfc2VuZGVyKCkudW53cmFwKCk7CgogICAgICAgIC8vIFJlcXVpcmUgdGhhdCB0aGVyZSBpcyBzb21lIGxpcXVpZGl0eSB0byBmbGFzaGxvYW4KICAgICAgICBsZXQgYmFsYW5jZV9iZWZvcmUwID0gdGhpc19iYWxhbmNlKHN0b3JhZ2UudG9rZW4wKTsKICAgICAgICBsZXQgYmFsYW5jZV9iZWZvcmUxID0gdGhpc19iYWxhbmNlKHN0b3JhZ2UudG9rZW4xKTsKCiAgICAgICAgcmVxdWlyZShiYWxhbmNlX2JlZm9yZTAgPiAwLCAidG9rZW4wLXplcm8tbGlxdWlkaXR5LWRlcHRoIik7CiAgICAgICAgcmVxdWlyZShiYWxhbmNlX2JlZm9yZTEgPiAwLCAidG9rZW4xLXplcm8tbGlxdWlkaXR5LWRlcHRoIik7CgogICAgICAgIC8vIENhbGN1bGF0ZSBmZWUgaW4gdGVybXMgb2YgaG93IG11Y2ggaXMgYmVpbmcgcHVsbGVkIG91dAogICAgICAgIGxldCBmZWVfYW1vdW50MCA9IG11bF9kaXZfcm91bmRpbmdfdXBfdTY0KGFtb3VudDAsIHN0b3JhZ2UuZmxhc2hfZmVlLCAxMDAwMDAwKTsKICAgICAgICBsZXQgZmVlX2Ftb3VudDEgPSBtdWxfZGl2X3JvdW5kaW5nX3VwX3U2NChhbW91bnQxLCBzdG9yYWdlLmZsYXNoX2ZlZSwgMTAwMDAwMCk7CgogICAgICAgIC8vIFNlbmQgdG9rZW5zIGFsb25nCiAgICAgICAgaWYgKGFtb3VudDAgPiAwKSB7IHRyYW5zZmVyKGFtb3VudDAsIHN0b3JhZ2UudG9rZW4wLCByZWNpcGllbnQpIH07CiAgICAgICAgaWYgKGFtb3VudDEgPiAwKSB7IHRyYW5zZmVyKGFtb3VudDEsIHN0b3JhZ2UudG9rZW4xLCByZWNpcGllbnQpIH07CgogICAgICAgIGxldCBmbGFzaGxvYW5lcl9jb250cmFjdCA9IGFiaSgKICAgICAgICAgICAgLy8gVE9ETyBiYWQgbmFtaW5nIGNhc2UKICAgICAgICAgICAgRmxhc2hMb2FuZXIsIAogICAgICAgICAgICBjYWxsZXJfY29udHJhY3RfaWQoKS5pbnRvKCkKICAgICAgICApOwoKICAgICAgICBmbGFzaGxvYW5lcl9jb250cmFjdC5jYWxsYmFjayhmZWVfYW1vdW50MCwgZmVlX2Ftb3VudDEpOwoKICAgICAgICBsZXQgYmFsYW5jZV9hZnRlcjAgPSB0aGlzX2JhbGFuY2Uoc3RvcmFnZS50b2tlbjApOwogICAgICAgIGxldCBiYWxhbmNlX2FmdGVyMSA9IHRoaXNfYmFsYW5jZShzdG9yYWdlLnRva2VuMSk7CgogICAgICAgIC8vIFRPRE8gY2hhbmdlICc8JyB0byAnPD0nIG9uY2UgdGhlIFUxMjggc3RkIGxpYnJhcnkgdXBkYXRlcwogICAgICAgIHJlcXVpcmUoKGJhbGFuY2VfYmVmb3JlMCArIHN0b3JhZ2UuZmxhc2hfZmVlKSA8IGJhbGFuY2VfYWZ0ZXIwLCAidG9rZW4wLWluc3VmZmljaWVudC1yZXR1cm5lZCIpOwogICAgICAgIHJlcXVpcmUoKGJhbGFuY2VfYmVmb3JlMSArIHN0b3JhZ2UuZmxhc2hfZmVlKSA8IGJhbGFuY2VfYWZ0ZXIxLCAidG9rZW4xLWluc3VmZmljaWVudC1yZXR1cm5lZCIpOwogICAgICAgIAogICAgICAgIC8vIHN1YiBpcyBzYWZlIGJlY2F1c2Ugd2Uga25vdyBiYWxhbmNlQWZ0ZXIgaXMgZ3QgYmFsYW5jZUJlZm9yZSBieSBhdCBsZWFzdCBmZWUKICAgICAgICBsZXQgcGFpZDAgPSBiYWxhbmNlX2FmdGVyMCAtIGJhbGFuY2VfYmVmb3JlMDsKICAgICAgICBsZXQgcGFpZDEgPSBiYWxhbmNlX2FmdGVyMSAtIGJhbGFuY2VfYmVmb3JlMTsKCiAgICAgICAgbG9nKEZsYXNoRXZlbnQgewogICAgICAgICAgICBzZW5kZXIsIAogICAgICAgICAgICByZWNpcGllbnQsIAogICAgICAgICAgICBhbW91bnQwLCAKICAgICAgICAgICAgYW1vdW50MSwgCiAgICAgICAgICAgIHBhaWQwLCAKICAgICAgICAgICAgcGFpZDEKICAgICAgICB9KTsKICAgIH0KICAgIAoKICAgIC8qIAogICAgd2l0aGRyYXdzCiAgICBkZXBvc2l0cwogICAgKi8gCn0=",
    },
]

const html = `<p><em>STILL IN THE MIDDLE OF DEVELOPMENT AND TESTING</em></p>
<p><code>liquidity_pool.sw</code></p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">/* 
imports,
std-lib,
etc.
*/</span> 

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">struct</span> <span class="hljs-title class_">flashData</span> {
    amount: <span class="hljs-type">u64</span>,
    liquidity_pool: Address,
}

storage {
    state: State = State::NotInitialized,
    token0: ContractId = ContractId{value:<span class="hljs-number">0x0000000000000000000000000000000000000000000000000000000000000000</span>},
    token1: ContractId = ContractId{value:<span class="hljs-number">0x0000000000000000000000000000000000000000000000000000000000000000</span>},
    flash_fee: <span class="hljs-type">u64</span> = <span class="hljs-number">0</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">LiquidityPool</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-comment">// initialize the tokens</span>
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init</span>(_token0: ContractId, _token1: ContractId, swap_fee: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(storage.state == State::NotInitialized, InitializationError::CannotReinitialize);
        storage.state = State::Initialized;
        storage.token0 = _token0;
        storage.token1 = _token1;

    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">flash</span>(
        recipient: Identity,
        amount0: <span class="hljs-type">u64</span>,
        amount1: <span class="hljs-type">u64</span>,
        <span class="hljs-comment">// TODO add some sort of custom data</span>
        <span class="hljs-comment">// some struct containing data (better if there was custom data)</span>
    ) {
        <span class="hljs-title function_ invoke__">reentrancy_guard</span>();
        
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();

        <span class="hljs-comment">// Require that there is some liquidity to flashloan</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">balance_before0</span> = <span class="hljs-title function_ invoke__">this_balance</span>(storage.token0);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">balance_before1</span> = <span class="hljs-title function_ invoke__">this_balance</span>(storage.token1);

        <span class="hljs-title function_ invoke__">require</span>(balance_before0 &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"token0-zero-liquidity-depth"</span>);
        <span class="hljs-title function_ invoke__">require</span>(balance_before1 &gt; <span class="hljs-number">0</span>, <span class="hljs-string">"token1-zero-liquidity-depth"</span>);

        <span class="hljs-comment">// Calculate fee in terms of how much is being pulled out</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">fee_amount0</span> = <span class="hljs-title function_ invoke__">mul_div_rounding_up_u64</span>(amount0, storage.flash_fee, <span class="hljs-number">1000000</span>);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">fee_amount1</span> = <span class="hljs-title function_ invoke__">mul_div_rounding_up_u64</span>(amount1, storage.flash_fee, <span class="hljs-number">1000000</span>);

        <span class="hljs-comment">// Send tokens along</span>
        <span class="hljs-title function_ invoke__">if</span> (amount0 &gt; <span class="hljs-number">0</span>) { <span class="hljs-title function_ invoke__">transfer</span>(amount0, storage.token0, recipient) };
        <span class="hljs-title function_ invoke__">if</span> (amount1 &gt; <span class="hljs-number">0</span>) { <span class="hljs-title function_ invoke__">transfer</span>(amount1, storage.token1, recipient) };

        <span class="hljs-keyword">let</span> <span class="hljs-variable">flashloaner_contract</span> = <span class="hljs-title function_ invoke__">abi</span>(
            <span class="hljs-comment">// TODO bad naming case</span>
            FlashLoaner, 
            <span class="hljs-title function_ invoke__">caller_contract_id</span>().<span class="hljs-title function_ invoke__">into</span>()
        );

        flashloaner_contract.<span class="hljs-title function_ invoke__">callback</span>(fee_amount0, fee_amount1);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">balance_after0</span> = <span class="hljs-title function_ invoke__">this_balance</span>(storage.token0);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">balance_after1</span> = <span class="hljs-title function_ invoke__">this_balance</span>(storage.token1);

        <span class="hljs-comment">// TODO change &#x27;&lt;&#x27; to &#x27;&lt;=&#x27; once the U128 std library updates</span>
        <span class="hljs-title function_ invoke__">require</span>((balance_before0 + storage.flash_fee) &lt; balance_after0, <span class="hljs-string">"token0-insufficient-returned"</span>);
        <span class="hljs-title function_ invoke__">require</span>((balance_before1 + storage.flash_fee) &lt; balance_after1, <span class="hljs-string">"token1-insufficient-returned"</span>);
        
        <span class="hljs-comment">// sub is safe because we know balanceAfter is gt balanceBefore by at least fee</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">paid0</span> = balance_after0 - balance_before0;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">paid1</span> = balance_after1 - balance_before1;

        <span class="hljs-title function_ invoke__">log</span>(FlashEvent {
            sender, 
            recipient, 
            amount0, 
            amount1, 
            paid0, 
            paid1
        });
    }
    

    <span class="hljs-comment">/* 
    withdraws
    deposits
    */</span> 
}
</code></pre>
<p><code>flashloaner.sw</code></p>
<pre><code class="language-rust">contract;

dep interfaces;

<span class="hljs-keyword">use</span> liquidity_pool::*;

<span class="hljs-keyword">use</span> std::{
    call_frames::{
        contract_id,
    }
};

abi FlashLoaner {
    <span class="hljs-comment">// flashCallback</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">callback</span>(
        fee0: <span class="hljs-type">u64</span>,
        fee1: <span class="hljs-type">u64</span>,
        <span class="hljs-comment">// some sort of data</span>
    );
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init_flash</span>(
        curve: ContractId,
    );
}

<span class="hljs-comment">// should just put it in here for simplicity</span>
<span class="hljs-keyword">impl</span> <span class="hljs-title class_">FlashLoaner</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">callback</span>(fee0: <span class="hljs-type">u64</span>, fee1: <span class="hljs-type">u64</span>) {
        <span class="hljs-comment">// <span class="hljs-doctag">TODO:</span> define token0, token1, and lp contract - should be coming from a third field which is the data</span>
        <span class="hljs-comment">// Can just hardcode for now</span>

        <span class="hljs-comment">// ensure that the amount of tokens requested exists</span>

        <span class="hljs-comment">// Do something with the tokens!</span>

        <span class="hljs-comment">// calculate how much the tokens need to be returned</span>

        <span class="hljs-comment">// transfer the tokens back to the original contract</span>
    }

    <span class="hljs-comment">// add some more params here</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">init_flash</span>(lp_contract_id: ContractId){
        <span class="hljs-comment">// get the address of the function we&#x27;re calling</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">lp_pool</span> = <span class="hljs-title function_ invoke__">abi</span>(
            LiquidityPool,
            lp_contract_id.<span class="hljs-title function_ invoke__">into</span>()
        );

        <span class="hljs-comment">// call the flash function</span>
        lp_pool.<span class="hljs-title function_ invoke__">flash</span>(
            Identity::<span class="hljs-title function_ invoke__">ContractId</span>(<span class="hljs-title function_ invoke__">contract_id</span>()),
            <span class="hljs-number">10</span>,
            <span class="hljs-number">10</span>,
        );

    }
}
</code></pre>
<p align="center">
How to flashloan GIF is coming! Heres a cat instead
</p>
<p align="center">
    <img src="https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif" width="200" height="200" />
</p>`

export default html
