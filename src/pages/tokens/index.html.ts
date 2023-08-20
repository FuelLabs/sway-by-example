// metadata
export const version = "0.8.13"
export const title = "Tokens (UTXO)"
export const description = "Introduction to Sway"
export const codes = [
  {
    fileName: "tokens",
    code: "Ly8gRnVsbCBuYXRpdmUgVVRYTyB0b2tlbiBzdGFuZGFyZCBjb3BpZWQgZnJvbSAKLy8gaHR0cHM6Ly9naXRodWIuY29tL0Z1ZWxMYWJzL3N3YXkvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvbmF0aXZlX3Rva2VuL3NyYy9tYWluLnN3Cgpjb250cmFjdDsKCnVzZSBzdGQ6Ontjb250ZXh0OjoqLCB0b2tlbjo6Kn07CgphYmkgTmF0aXZlQXNzZXRUb2tlbiB7CiAgICBmbiBtaW50X2NvaW5zKG1pbnRfYW1vdW50OiB1NjQpOwogICAgZm4gYnVybl9jb2lucyhidXJuX2Ftb3VudDogdTY0KTsKICAgIGZuIGZvcmNlX3RyYW5zZmVyX2NvaW5zKGNvaW5zOiB1NjQsIGFzc2V0X2lkOiBDb250cmFjdElkLCB0YXJnZXQ6IENvbnRyYWN0SWQpOwogICAgZm4gdHJhbnNmZXJfY29pbnNfdG9fb3V0cHV0KGNvaW5zOiB1NjQsIGFzc2V0X2lkOiBDb250cmFjdElkLCByZWNpcGllbnQ6IEFkZHJlc3MpOwogICAgZm4gZGVwb3NpdCgpOwogICAgZm4gZ2V0X2JhbGFuY2UodGFyZ2V0OiBDb250cmFjdElkLCBhc3NldF9pZDogQ29udHJhY3RJZCkgLT4gdTY0OwogICAgZm4gbWludF9hbmRfc2VuZF90b19jb250cmFjdChhbW91bnQ6IHU2NCwgZGVzdGluYXRpb246IENvbnRyYWN0SWQpOwogICAgZm4gbWludF9hbmRfc2VuZF90b19hZGRyZXNzKGFtb3VudDogdTY0LCByZWNpcGllbnQ6IEFkZHJlc3MpOwp9CgouLi4KCi8vIGNvbnRyYWN0IGltcGxtZW50YXRpb24g",
  },
]

const html = `<h3 id="utxo-vs-erc20-account-model-analogy">UTXO vs ERC20 (Account Model) Analogy</h3>
<p>During token transactions instead of just updating the balance of their account like in a bank, the coins they are spending are marked as "spent" and new coins are created for the person they are sending the money to. Think of it like handing over cash to someone and getting change back, instead of just moving numbers around in a computer.</p>
<p>Comparing Fuel&#39;s native <code>UTXO</code> assets and <a href="https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20">Ethereum&#39;s ERC20 standard</a> there are several important differences. </p>
<ol>
<li>No <code>token.approval()</code></li>
<li>No <code>token.transferFrom()</code></li>
</ol>
<p>Using the analogy from before the token contract can be thought as the federal mint and just like in real life there are no <code>approvals</code> or <code>transferFroms</code> for them to move around the cash thats already minted in your wallet. </p>
<p>Bonus: No approvals and transferFroms means that a comprimised contract cannot steal the tokens in your wallet!</p>
<pre><code class="language-rust"><span class="hljs-comment">// Full native UTXO token standard copied from </span>
<span class="hljs-comment">// https://github.com/FuelLabs/sway/blob/master/examples/native_token/src/main.sw</span>

contract;

<span class="hljs-keyword">use</span> std::{context::*, token::*};

abi NativeAssetToken {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">mint_coins</span>(mint_amount: <span class="hljs-type">u64</span>);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">burn_coins</span>(burn_amount: <span class="hljs-type">u64</span>);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">force_transfer_coins</span>(coins: <span class="hljs-type">u64</span>, asset_id: ContractId, target: ContractId);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">transfer_coins_to_output</span>(coins: <span class="hljs-type">u64</span>, asset_id: ContractId, recipient: Address);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">deposit</span>();
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_balance</span>(target: ContractId, asset_id: ContractId) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">mint_and_send_to_contract</span>(amount: <span class="hljs-type">u64</span>, destination: ContractId);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">mint_and_send_to_address</span>(amount: <span class="hljs-type">u64</span>, recipient: Address);
}

...

<span class="hljs-comment">// contract implmentation </span>
</code></pre>
<p><code>Minting</code> and <code>Buring</code> of native UTXO assets still need to be done through the contract transfers can be done freely without the token contract. The federal mint is able to mint and burn toens but cannot control how people spend the cash. Balances are all handled by the <code>FuelVM</code> preventing contract storage bloat.</p>
`

export default html
