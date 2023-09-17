// metadata
export const version = "0.37"
export const title = "Account Types"
export const description = "Introduction to Sway"
export const codes = [
  {
    fileName: "accounts",
    code: "Y29udHJhY3Q7CgpkZXAgaW50ZXJmYWNlOwp1c2UgaW50ZXJmYWNlOjoqOwoKdXNlIHN0ZDo6ewogICAgY29uc3RhbnRzOjpaRVJPX0IyNTYsCiAgICBhdXRoOjptc2dfc2VuZGVyLAogICAgaWRlbnRpdHk6OiosCn07CgpzdG9yYWdlIHsKICAgIG15X2FkZHJlc3NfaWRlbnRpdHk6IEFkZHJlc3MgPSBBZGRyZXNzOjpmcm9tKHNlY3JldF9iMjU2KSwKICAgIG15X2NvbnRyYWN0X2lkZW50aXR5OiBDb250cmFjdElkID0gQ29udHJhY3RJZDo6ZnJvbShzZWNyZXRfYjI1NiksCn0KCmltcGwgQWNjb3VudFR5cGVzIGZvciBDb250cmFjdCB7CiAgICBmbiBjb252ZXJ0X2IyNTZfdG9fYWRkcmVzcyhzb21lX2IyNTY6IGIyNTYpIC0+IEFkZHJlc3MgewogICAgICAgIHJldHVybiBBZGRyZXNzOjpmcm9tKHNvbWVfYjI1Nik7CiAgICB9CgogICAgZm4gY29udmVydF9iMjU2X3RvX2NvbnRyYWN0KHNvbWVfYjI1NjogYjI1NikgLT4gQ29udHJhY3RJZCB7CiAgICAgICAgcmV0dXJuIENvbnRyYWN0SWQ6OmZyb20oc29tZV9iMjU2KTsKICAgIH0KCiAgICBmbiBjb252ZXJ0X2IyNTZfdG9faWRlbnRpdHkoc29tZV9iMjU2OiBiMjU2KSAtPiBJZGVudGl0eSB7CiAgICAgICAgcmV0dXJuIElkZW50aXR5OjpDb250cmFjdElkKENvbnRyYWN0SWQ6OmZyb20oc29tZV9iMjU2KSk7CiAgICAgICAgLy8gcmV0dXJuIElkZW50aXR5OjpBZGRyZXNzKEFkZHJlc3M6OmZyb20oc29tZV9iMjU2KSk7CiAgICB9CiAgICAKICAgIC8vIEV4cGVjdGluZyBib3RoIENvbnRyYWN0cyBhbmQvb3IgRU9BcyB0byBiZSBjYWxsaW5nIHRoaXMgZnVuY3Rpb24KICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIG1hdGNoX2lkZW50aXR5KHNvbWVfaWRlbnRpdHk6IElkZW50aXR5KSAtPiBzdHJbMTddIHsKICAgICAgICBsZXQgbXlfY29udHJhY3RfaWRlbnRpdHkgPSBzdG9yYWdlLm15X2NvbnRyYWN0X2lkZW50aXR5OwogICAgICAgIGxldCBteV9hZGRyZXNzX2lkZW50aXR5ID0gc3RvcmFnZS5teV9hZGRyZXNzX2lkZW50aXR5OwoKICAgICAgICBtYXRjaCBzb21lX2lkZW50aXR5IHsKICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUgdG9rZW4gdHJhbnNmZXJzIGFyZSBoYW5kbGVkIGRpZmZlcmVudGx5IGJldHdlZW4gY29udHJhY3RzIGFuZCBFT0FzCiAgICAgICAgICAgIG15X2NvbnRyYWN0X2lkZW50aXR5ID0+IHsKICAgICAgICAgICAgICAgIC8qIAogICAgICAgICAgICAgICAgRG8gc29tZXRoaW5nIENPTlRSQUNUIHJlbGF0ZWQhCiAgICAgICAgICAgICAgICB0cmFuc2Zlcl90b19hZGRyZXNzKGFtb3VudCwgdG9rZW5faWQsIGFkZHJlc3MpCiAgICAgICAgICAgICAgICAqLwogICAgICAgICAgICAgICAgIkNvbnRyYWN0IElkZW50aXR5IgogICAgICAgICAgICB9LAogICAgICAgICAgICBteV9hZGRyZXNzX2lkZW50aXR5ID0+IHsKICAgICAgICAgICAgICAgIC8qIAogICAgICAgICAgICAgICAgRG8gc29tZXRoaW5nIEFERFJFU1MgcmVsYXRlZCEKICAgICAgICAgICAgICAgIGZvcmNlX3RyYW5zZmVyX3RvX2NvbnRyYWN0KGFtb3VudCwgdG9rZW5faWQsIGNvbnRyYWN0X2lkKQogICAgICAgICAgICAgICAgKi8KICAgICAgICAgICAgICAgICJBZGRyZXNzIElkZW50aXR5ISIKICAgICAgICAgICAgfSwKICAgICAgICAgICAgXyA9PiAiTWlzbWF0Y2ggSWRlbnRpdHkiLAogICAgICAgIH0KICAgIH0KfQo=",
  },
]

const html = `<p>Account types encapsulate a <code>b256</code> hash to clearly and safely define it&#39;s specific use case. Each respective type differs in tokens that can be owned and how they are handled.</p>
<ol>
<li>Addresses includes <code>Externally Owned Accounts (EOAs)</code> and <code>Predicates</code></li>
<li>ContractIds includes <code>Contracts</code>.</li>
</ol>
<table>
<thead>
<tr>
<th></th>
<th>UTXOs</th>
<th>Assets</th>
</tr>
</thead>
<tbody><tr>
<td>Address</td>
<td>✅</td>
<td>✅</td>
</tr>
<tr>
<td>ContractId</td>
<td>❌</td>
<td>✅</td>
</tr>
</tbody></table>
<br/>

<p><code>Identity</code> account types umbrellas over the previous discussed <code>Address</code> and <code>ContractId</code> types. It should be used when the excepted type is agnostic.</p>
<pre><code>Identity
├── Address
└── ContractId
</code></pre>
<br/>

<pre><code class="language-rust">contract;

dep interface;
<span class="hljs-keyword">use</span> interface::*;

<span class="hljs-keyword">use</span> std::{
    constants::ZERO_B256,
    auth::msg_sender,
    identity::*,
};

storage {
    my_address_identity: Address = Address::<span class="hljs-title function_ invoke__">from</span>(secret_b256),
    my_contract_identity: ContractId = ContractId::<span class="hljs-title function_ invoke__">from</span>(secret_b256),
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">AccountTypes</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">convert_b256_to_address</span>(some_b256: b256) <span class="hljs-punctuation">-&gt;</span> Address {
        <span class="hljs-keyword">return</span> Address::<span class="hljs-title function_ invoke__">from</span>(some_b256);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">convert_b256_to_contract</span>(some_b256: b256) <span class="hljs-punctuation">-&gt;</span> ContractId {
        <span class="hljs-keyword">return</span> ContractId::<span class="hljs-title function_ invoke__">from</span>(some_b256);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">convert_b256_to_identity</span>(some_b256: b256) <span class="hljs-punctuation">-&gt;</span> Identity {
        <span class="hljs-keyword">return</span> Identity::<span class="hljs-title function_ invoke__">ContractId</span>(ContractId::<span class="hljs-title function_ invoke__">from</span>(some_b256));
        <span class="hljs-comment">// return Identity::Address(Address::from(some_b256));</span>
    }
    
    <span class="hljs-comment">// Expecting both Contracts and/or EOAs to be calling this function</span>
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">match_identity</span>(some_identity: Identity) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">str</span>[<span class="hljs-number">17</span>] {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">my_contract_identity</span> = storage.my_contract_identity;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">my_address_identity</span> = storage.my_address_identity;

        <span class="hljs-keyword">match</span> some_identity {
            <span class="hljs-comment">// For example token transfers are handled differently between contracts and EOAs</span>
            my_contract_identity =&gt; {
                <span class="hljs-comment">/* 
                Do something CONTRACT related!
                transfer_to_address(amount, token_id, address)
                */</span>
                <span class="hljs-string">"Contract Identity"</span>
            },
            my_address_identity =&gt; {
                <span class="hljs-comment">/* 
                Do something ADDRESS related!
                force_transfer_to_contract(amount, token_id, contract_id)
                */</span>
                <span class="hljs-string">"Address Identity!"</span>
            },
            _ =&gt; <span class="hljs-string">"Mismatch Identity"</span>,
        }
    }
}
</code></pre>
`

export default html
