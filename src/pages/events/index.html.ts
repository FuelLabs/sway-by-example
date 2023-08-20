// metadata
export const version = "0.8.13"
export const title = "Events"
export const description = "Introduction to Sway"
export const codes = [
  {
    fileName: "events",
    code: "Y29udHJhY3Q7CgpkZXAgZXZlbnRzOwoKdXNlIGV2ZW50czo6KjsKdXNlIHN0ZDo6ewogICAgbG9nZ2luZzo6bG9nLAogICAgYXV0aDo6ewogICAgICAgIG1zZ19zZW5kZXIKICAgIH0sCiAgICBjb25zdGFudHM6OlpFUk9fQjI1NiwKfTsKCmFiaSBORlQgewogICAgZm4gbWludCgpOwp9CgppbXBsIE5GVCBmb3IgQ29udHJhY3QgewogICAgZm4gbWludCgpIHsKICAgICAgICBsZXQgc2VuZGVyID0gSWRlbnRpdHk6OkFkZHJlc3MoQWRkcmVzcyB7dmFsdWU6IFpFUk9fQjI1Nn0pOwogICAgICAgIGxldCB1c2VyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgICAgIAogICAgICAgIC8vIC4uLiBzb21lIG1pbnRpbmcgY29kZSAuLi4KCiAgICAgICAgbG9nKFRyYW5zZmVyIHsKICAgICAgICAgICAgc2VuZGVyLCAKICAgICAgICAgICAgcmVjaXBpZW50OiB1c2VyLCAKICAgICAgICAgICAgdG9rZW5faWQ6IDQyLCAKICAgICAgICB9KQogICAgfQp9",
  },
  {
    fileName: "lib",
    code: "bGlicmFyeSBldmVudHM7CgpwdWIgc3RydWN0IFRyYW5zZmVyIHsKICAgIHNlbmRlcjogSWRlbnRpdHksCiAgICByZWNpcGllbnQ6IElkZW50aXR5LAogICAgdG9rZW5faWQ6IHU2NCwKfQ==",
  },
]

const html = `<p>In Sway <code>events</code> are defined as <code>structs</code> typically as its own library to be imported in like errors or interfaces. By utilizing <code>logs</code> from the standard library, custom events can be <code>emitted</code> to be picked up and indexed at the end of function runs.</p>
<p><code>main.sw</code></p>
<pre><code class="language-rust">contract;

dep events;

<span class="hljs-keyword">use</span> events::*;
<span class="hljs-keyword">use</span> std::{
    logging::log,
    auth::{
        msg_sender
    },
    constants::ZERO_B256,
};

abi NFT {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">mint</span>();
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">NFT</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">mint</span>() {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">sender</span> = Identity::<span class="hljs-title function_ invoke__">Address</span>(Address {value: ZERO_B256});
        <span class="hljs-keyword">let</span> <span class="hljs-variable">user</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
        
        <span class="hljs-comment">// ... some minting code ...</span>

        <span class="hljs-title function_ invoke__">log</span>(Transfer {
            sender, 
            recipient: user, 
            token_id: <span class="hljs-number">42</span>, 
        })
    }
}
</code></pre>
<p><code>events.sw</code></p>
<pre><code class="language-rust">library events;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">struct</span> <span class="hljs-title class_">Transfer</span> {
    sender: Identity,
    recipient: Identity,
    token_id: <span class="hljs-type">u64</span>,
}
</code></pre>
`

export default html
