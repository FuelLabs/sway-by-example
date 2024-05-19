// metadata
export const version = "0.59.0"
export const title = "Blockchain Types"
export const description = "Blockchain types in Sway"

export const tempFileName = "blockchain_types.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=dcf2078aa589ed7f5db81539ee10bc5e"

export const keywords = [
  "blockchain",
  "blockchains",
  "data",
  "type",
  "types",
  "variable",
  "variables",
  "id",
  "ids",
  "address",
  "addresses",
  "contract",
  "contracts identity",
  "identities",
  "match",
  "matches",
]

export const codes = [
  {
    fileName: "blockchain.rs",
    code: "Y29udHJhY3Q7CgovLyBBZGRyZXNzCi8vIENvbnRyYWN0IElkCi8vIElkZW50aXR5CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBJZGVudGl0eTsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBJZGVudGl0eSB7CiAgICAgICAgLy8gQWRkcmVzcwogICAgICAgIGxldCBiOiBiMjU2ID0gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDJBOwogICAgICAgIGxldCBhZGRyOiBBZGRyZXNzID0gQWRkcmVzczo6ZnJvbShiKTsKICAgICAgICBsZXQgYjogYjI1NiA9IGFkZHIuaW50bygpOwoKICAgICAgICAvLyBDb250cmFjdCBpZAogICAgICAgIGxldCBiOiBiMjU2ID0gMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDJBOwogICAgICAgIGxldCBteV9jb250cmFjdF9pZDogQ29udHJhY3RJZCA9IENvbnRyYWN0SWQ6OmZyb20oYik7CiAgICAgICAgbGV0IGI6IGIyNTYgPSBteV9jb250cmFjdF9pZC5pbnRvKCk7CgogICAgICAgIC8vIElkZW50aXR5IHR5cGUKICAgICAgICBsZXQgcmF3X2FkZHI6IGIyNTYgPSAweGRkZWMwZTdlNmE5YTRhNGUzZTU3ZDA4ZDA4MGQ3MWEyOTljNjI4YTQ2YmM2MDlhYWI0NjI3Njk1Njc5NDIxY2E7CiAgICAgICAgbGV0IGFkZHIgPSBBZGRyZXNzOjpmcm9tKHJhd19hZGRyKTsKICAgICAgICBsZXQgbXlfaWQ6IElkZW50aXR5ID0gSWRlbnRpdHk6OkFkZHJlc3MoYWRkcik7CgogICAgICAgIC8vIE1hdGNoIG9uIGlkZW50aXR5CiAgICAgICAgbGV0IGlkOiBBZGRyZXNzID0gbWF0Y2ggbXlfaWQgewogICAgICAgICAgICBJZGVudGl0eTo6QWRkcmVzcyhhZGRyKSA9PiBhZGRyLAogICAgICAgICAgICBJZGVudGl0eTo6Q29udHJhY3RJZChpZCkgPT4gcmV2ZXJ0KDApLAogICAgICAgIH07CgogICAgICAgIG15X2lkCiAgICB9Cn0K",
  },
]

const html = `<p>Examples of blockchain data types in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Address</span>
<span class="hljs-comment">// Contract Id</span>
<span class="hljs-comment">// Identity</span>

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Identity;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Identity {
        <span class="hljs-comment">// Address</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b</span>: b256 = <span class="hljs-number">0x000000000000000000000000000000000000000000000000000000000000002A</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">addr</span>: Address = Address::<span class="hljs-title function_ invoke__">from</span>(b);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b</span>: b256 = addr.<span class="hljs-title function_ invoke__">into</span>();

        <span class="hljs-comment">// Contract id</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b</span>: b256 = <span class="hljs-number">0x000000000000000000000000000000000000000000000000000000000000002A</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">my_contract_id</span>: ContractId = ContractId::<span class="hljs-title function_ invoke__">from</span>(b);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">b</span>: b256 = my_contract_id.<span class="hljs-title function_ invoke__">into</span>();

        <span class="hljs-comment">// Identity type</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">raw_addr</span>: b256 = <span class="hljs-number">0xddec0e7e6a9a4a4e3e57d08d080d71a299c628a46bc609aab4627695679421ca</span>;
        <span class="hljs-keyword">let</span> <span class="hljs-variable">addr</span> = Address::<span class="hljs-title function_ invoke__">from</span>(raw_addr);
        <span class="hljs-keyword">let</span> <span class="hljs-variable">my_id</span>: Identity = Identity::<span class="hljs-title function_ invoke__">Address</span>(addr);

        <span class="hljs-comment">// Match on identity</span>
        <span class="hljs-keyword">let</span> <span class="hljs-variable">id</span>: Address = <span class="hljs-keyword">match</span> my_id {
            Identity::<span class="hljs-title function_ invoke__">Address</span>(addr) =&gt; addr,
            Identity::<span class="hljs-title function_ invoke__">ContractId</span>(id) =&gt; <span class="hljs-title function_ invoke__">revert</span>(<span class="hljs-number">0</span>),
        };

        my_id
    }
}
</code></pre>`

export default html
