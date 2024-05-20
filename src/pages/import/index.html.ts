// metadata
export const version = "0.59.0"
export const title = "Imports"
export const description = "Importing libraries in Sway"

export const tempFileName = "imports.sw"
export const tempPlaygroundLink = "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=ceb06dd4b2978d0767e750927a232ccd"

export const keywords = [
    "import",
    "imports",
    "library",
    "libraries",
]

export const codes = [
    {
        fileName: "forc.rs",
        code: "W3Byb2plY3RdCmF1dGhvcnMgPSBbIkNhbGwgRGVsZWdhdGlvbiJdCmVudHJ5ID0gIm1haW4uc3ciCmxpY2Vuc2UgPSAiQXBhY2hlLTIuMCIKbmFtZSA9ICJpbXBvcnRzIgoKW2RlcGVuZGVuY2llc10KbGlicmFyaWVzID0geyBwYXRoID0gIi4uL2xpYnJhcmllcy8iIH0K",
    },
    {
        fileName: "imports.rs",
        code: "Y29udHJhY3Q7Ci8vIEltcG9ydGluZyB3aXRoaW4gdGhlIHNhbWUgcHJvamVjdAovLyBBQkkKLy8gbXVzdCBiZSBpbXBvcnRlZCBmaXJzdAptb2QgaW1wb3J0c19saWJyYXJ5OwoKLy8gVW5saWtlIHRoZSBwcmV2aW91cyBoZWxsbyB3b3JsZCBleGFtcGxlIGl0IGlzIGFjdHVhbGx5IGdvb2QgcHJhY3RpY2UgdG8gaW1wb3J0IGluIEFCSQovLyBJdCBpcyBhbHNvIGdvb2QgcHJhY3RpY2UgZGVmaW5lIGFuZCBpbXBvcnQgY3VzdG9tIGVycm9ycyB0aGlzIHdheSBhcyB3ZWxsCgovLyAxLiBJbXBvcnRpbmcgd2l0aGluIHRoZSBzYW1lIHByb2plY3QKLy8gInVzZSIga2V5d29yZCBpbXBvcnRzIGluIHRoZSBsaWJyYXJ5CnVzZSA6OmltcG9ydHNfbGlicmFyeTo6KjsKCi8vIDIuIEltcG9ydGluZyB0aGUgc3RhbmRhcmQgbGlicmFyeQovLyBUaGUgc3RhbmRhcmQgbGlicmFyeSBjb250YWlucwovLyAgICAgYS4gbGFuZ3VhZ2UgcHJpbWF0aXZlcwovLyAgICAgYi4gYmxvY2tjaGFpbiBjb250ZXh0dWFsIG9wZXJhdGlvbnMKLy8gICAgIGMuIG5hdGl2ZSBhc3NldCBtYW5hZ2VtZW50Ci8vICAgICBldGMuCi8vIFRoaW5ncyBpbiBzb2xpZGl0eSBsaWtlIG1zZy5zZW5kZXIoKSBibG9jay50aW1lc3RhbXAoKSBhcmUgZm91bmQgaGVyZQovLyBodHRwczovL2dpdGh1Yi5jb20vRnVlbExhYnMvc3dheS90cmVlL21hc3Rlci9zd2F5LWxpYi1zdGQKdXNlIHN0ZDo6ewogICAgaWRlbnRpdHk6OiosCiAgICBhZGRyZXNzOjoqLAogICAgY29uc3RhbnRzOjoqLAogICAgYXV0aDo6bXNnX3NlbmRlciwKfTsKCi8vIDMuIEltcG9ydGluZyBsaWJyYXJ5IGZyb20gYSBkaWZmZXJlbnQgcHJvamVjdAp1c2UgbGlicmFyaWVzOjpkYXRhX3N0cnVjdHVyZXM6OlBsYXllcjsKCmltcGwgSW1wb3J0cyBmb3IgQ29udHJhY3QgewogICAgZm4gYWRkKF94OiB1NjQsIF95OiB1NjQpIHsKICAgICAgICBsZXQgeiA9IF94ICsgX3k7CiAgICB9CgogICAgZm4gbGFzdF91c2VyKCkgewogICAgICAgIGxldCB1c2VyID0gbXNnX3NlbmRlcigpLnVud3JhcCgpOwogICAgfQoKICAgIGZuIGNyZWF0ZV9wbGF5ZXIoX3Njb3JlOiB1NjQpIHsKICAgICAgICBsZXQgcGxheWVyID0gUGxheWVyIHsKICAgICAgICAgICAgaWQ6IG1zZ19zZW5kZXIoKS51bndyYXAoKSwKICAgICAgICAgICAgc2NvcmU6IF9zY29yZQogICAgICAgIH07CiAgICB9Cn0K",
    },
    {
        fileName: "library.rs",
        code: "bGlicmFyeTsKCnB1YiBtb2QgZGF0YV9zdHJ1Y3R1cmVzOw==",
    },
]

const html = `<p>Imports are very useful for code reuseability and interactions. Generally all Sway program types follow the same import paradigm.</p>
<p><code>main.sw</code></p>
<pre><code class="language-rust">contract;
<span class="hljs-comment">// Importing within the same project</span>
<span class="hljs-comment">// ABI</span>
<span class="hljs-comment">// must be imported first</span>
<span class="hljs-keyword">mod</span> imports_library;

<span class="hljs-comment">// Unlike the previous hello world example it is actually good practice to import in ABI</span>
<span class="hljs-comment">// It is also good practice define and import custom errors this way as well</span>

<span class="hljs-comment">// 1. Importing within the same project</span>
<span class="hljs-comment">// "use" keyword imports in the library</span>
<span class="hljs-keyword">use</span> ::imports_library::*;

<span class="hljs-comment">// 2. Importing the standard library</span>
<span class="hljs-comment">// The standard library contains</span>
<span class="hljs-comment">//     a. language primatives</span>
<span class="hljs-comment">//     b. blockchain contextual operations</span>
<span class="hljs-comment">//     c. native asset management</span>
<span class="hljs-comment">//     etc.</span>
<span class="hljs-comment">// Things in solidity like msg.sender() block.timestamp() are found here</span>
<span class="hljs-comment">// https://github.com/FuelLabs/sway/tree/master/sway-lib-std</span>
<span class="hljs-keyword">use</span> std::{
    identity::*,
    address::*,
    constants::*,
    auth::msg_sender,
};

<span class="hljs-comment">// 3. Importing library from a different project</span>
<span class="hljs-keyword">use</span> libraries::data_structures::Player;

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Imports</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add</span>(_x: <span class="hljs-type">u64</span>, _y: <span class="hljs-type">u64</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">z</span> = _x + _y;
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">last_user</span>() {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">user</span> = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">create_player</span>(_score: <span class="hljs-type">u64</span>) {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">player</span> = Player {
            id: <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>(),
            score: _score
        };
    }
}
</code></pre><h3>Standard Library</h3>
<h3>Local</h3>
<p>This is the folder structure.</p>
<pre><code>└── Import
    └── src
        ├── main.sw
        └── imports_library.sw
</code></pre><h3>External</h3>
<p>This is the project structure.</p>
<pre><code>├── Import
│   ├── src
│   │   └── main.sw
│   └── Forc.toml
└── libraries
    ├── data_structures.sw
    └── lib.sw
</code></pre><p>External imports should be defined as a dependacy within <code>Forc.toml</code></p>
<p><code>Forc.toml</code></p>
<pre><code class="language-rust">[project]
authors = [<span class="hljs-string">"Call Delegation"</span>]
entry = <span class="hljs-string">"main.sw"</span>
license = <span class="hljs-string">"Apache-2.0"</span>
name = <span class="hljs-string">"imports"</span>

[dependencies]
libraries = { path = <span class="hljs-string">"../libraries/"</span> }
</code></pre><p>Note: It is good practice if you have a complex library to have an entry point for the sublibraries. Be sure to update the name of the entry point in the library if the default <code>main.sw</code> is not used. Make the necessary changes in the corresponding <code>Forc.toml</code> file of the library project.</p>
<p><code>library.sw</code></p>
<pre><code class="language-rust">library;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">mod</span> data_structures;
</code></pre>`

export default html
