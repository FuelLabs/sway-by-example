// metadata
export const version = "0.8.13"
export const title = "Initialization"
export const description = "Local, state and global variables"
export const codes = [
    {
        fileName: "initialization",
        code: "Y29udHJhY3Q7CgpkZXAgbGliOwpkZXAgZXJyb3JzOwoKdXNlIGxpYjo6KjsKdXNlIGVycm9yczo6KjsKCmFiaSBJbml0aWFsaXphdGlvbiB7CiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gaW5pdGlhbGl6ZSgpOwoKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiB1cGdyYWRlX2Jsb2NrY2hhaW4oKTsKCiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBibG9ja2NoYWluKCkgLT4gc3RyWzExXTsKfQoKc3RvcmFnZSB7CiAgICBzdGF0ZTogU3RhdGUgPSBTdGF0ZTo6Tm90SW5pdGlhbGl6ZWQsCiAgICAKICAgIGJsb2NrY2hhaW5fdHlwZTogc3RyWzExXSA9ICJtb25vbGl0aGljISIsCn0KCmltcGwgSW5pdGlhbGl6YXRpb24gZm9yIENvbnRyYWN0IHsKICAgICNbc3RvcmFnZShyZWFkLCB3cml0ZSldCiAgICBmbiBpbml0aWFsaXplKCkgewogICAgICAgIHJlcXVpcmUoc3RvcmFnZS5zdGF0ZSA9PSBTdGF0ZTo6Tm90SW5pdGlhbGl6ZWQsIEluaXRpYWxpemF0aW9uRXJyb3I6OkNhbm5vdFJlaW5pdGlhbGl6ZSk7CiAgICAgICAgCiAgICAgICAgc3RvcmFnZS5zdGF0ZSA9IFN0YXRlOjpJbml0aWFsaXplZDsKICAgIH0KCiAgICAjW3N0b3JhZ2UocmVhZCwgd3JpdGUpXQogICAgZm4gdXBncmFkZV9ibG9ja2NoYWluKCkgewogICAgICAgIHJlcXVpcmUoc3RvcmFnZS5zdGF0ZSA9PSBTdGF0ZTo6SW5pdGlhbGl6ZWQsIEluaXRpYWxpemF0aW9uRXJyb3I6OkNvbnRyYWN0Tm90SW5pdGlhbGl6ZWQpOwogICAgICAgIHN0b3JhZ2UuYmxvY2tjaGFpbl90eXBlID0gIioqbW9kdWxhcioqIgogICAgfQoKICAgICNbc3RvcmFnZShyZWFkKV0KICAgIGZuIGJsb2NrY2hhaW4oKSAtPiBzdHJbMTFdIHsKICAgICAgICBzdG9yYWdlLmJsb2NrY2hhaW5fdHlwZQogICAgfQp9Cg==",
    },
]

const html = `<p>Key Differences</p>
<ul>
<li>No constructors</li>
</ul>
<pre><code class="language-rust">contract;

dep lib;
dep errors;

<span class="hljs-keyword">use</span> lib::*;
<span class="hljs-keyword">use</span> errors::*;

abi Initialization {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">initialize</span>();

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">upgrade_blockchain</span>();

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">blockchain</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">str</span>[<span class="hljs-number">11</span>];
}

storage {
    state: State = State::NotInitialized,
    
    blockchain_type: <span class="hljs-type">str</span>[<span class="hljs-number">11</span>] = <span class="hljs-string">"monolithic!"</span>,
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Initialization</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">initialize</span>() {
        <span class="hljs-title function_ invoke__">require</span>(storage.state == State::NotInitialized, InitializationError::CannotReinitialize);
        
        storage.state = State::Initialized;
    }

    <span class="hljs-meta">#[storage(read, write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">upgrade_blockchain</span>() {
        <span class="hljs-title function_ invoke__">require</span>(storage.state == State::Initialized, InitializationError::ContractNotInitialized);
        storage.blockchain_type = <span class="hljs-string">"**modular**"</span>
    }

    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">blockchain</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">str</span>[<span class="hljs-number">11</span>] {
        storage.blockchain_type
    }
}
</code></pre>
`

export default html
