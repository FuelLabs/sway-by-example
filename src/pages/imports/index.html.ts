// metadata
export const version = "0.8.13"
export const title = "Imports"
export const description = "Importing libraries in Sway"
export const codes = [
    {
        fileName: "imports",
        code: "Y29udHJhY3Q7Ci8vIEltcG9ydGluZyB3aXRoaW4gdGhlIHNhbWUgcHJvamVjdAovLyBBQkkKLy8gbXVzdCBiZSBpbXBvcnRlZCBmaXJzdApkZXAgaW1wb3J0c19saWJyYXJ5OwoKdXNlIGltcG9ydHNfbGlicmFyeTo6KjsKCi8vIEltcG9ydGluZyB0aGUgc3RhbmRhcmQgbGlicmFyeQovLyBTVEQgTGliCi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9GdWVsTGFicy9zd2F5L3RyZWUvbWFzdGVyL3N3YXktbGliLXN0ZAp1c2Ugc3RkOjp7CiAgICBpZGVudGl0eTo6KiwKICAgIGFkZHJlc3M6OiosCiAgICBjb25zdGFudHM6OiosCiAgICBhdXRoOjptc2dfc2VuZGVyLAp9OwoKLy8gSW1wb3J0aW5nIGxpYnJhcnkgZnJvbSBhIGRpZmZlcmVudCBwcm9qZWN0Ci8vIE1hdGggbGlicmFyaWVzIGNvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2F5LWxpYnMvY29uY2VudHJhdGVkLWxpcXVpZGl0eS8KdXNlIG1hdGhfbGliOjpmdWxsX21hdGg6Oio7CgpzdG9yYWdlIHsKICAgIHo6IHU2NCA9IDAsCiAgICBsYXN0X3VzZXI6IElkZW50aXR5ID0gSWRlbnRpdHk6OkFkZHJlc3MoQWRkcmVzczo6ZnJvbShaRVJPX0IyNTYpKSwKfQoKaW1wbCBJbXBvcnRzIGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2Uod3JpdGUpXQogICAgZm4gYWRkKHg6IHU2NCwgeTogdTY0KSB7CiAgICAgICAgc3RvcmFnZS56ID0geCArIHk7CiAgICB9CgogICAgI1tzdG9yYWdlKHdyaXRlKV0KICAgIGZuIGxhc3RfdXNlcigpIHsKICAgICAgICBzdG9yYWdlLmxhc3RfdXNlciA9IG1zZ19zZW5kZXIoKS51bndyYXAoKTsKICAgIH0KCiAgICAjW3N0b3JhZ2Uod3JpdGUpXQogICAgZm4gZml4ZWRfcG9pbnRfbXVsdGlwbHlfYW5kX2RpdmlkZShhOiB1NjQsIGI6IHU2NCwgYzogdTY0KSB7CiAgICAgICAgc3RvcmFnZS56ID0gbXVsX2Rpdl91NjQoYSwgYiwgYyk7CiAgICB9Cn0K",
    },
]

const html = `<p>Imports are very useful for code reuseability and interactions. Generally all Sway program types follow the same import paradigm.</p>
<p>main.sw</p>
<pre><code class="language-rust">contract;
<span class="hljs-comment">// Importing within the same project</span>
<span class="hljs-comment">// ABI</span>
<span class="hljs-comment">// must be imported first</span>
dep imports_library;

<span class="hljs-keyword">use</span> imports_library::*;

<span class="hljs-comment">// Importing the standard library</span>
<span class="hljs-comment">// STD Lib</span>
<span class="hljs-comment">// https://github.com/FuelLabs/sway/tree/master/sway-lib-std</span>
<span class="hljs-keyword">use</span> std::{
    identity::*,
    address::*,
    constants::*,
    auth::msg_sender,
};

<span class="hljs-comment">// Importing library from a different project</span>
<span class="hljs-comment">// Math libraries copied from https://github.com/sway-libs/concentrated-liquidity/</span>
<span class="hljs-keyword">use</span> math_lib::full_math::*;

storage {
    z: <span class="hljs-type">u64</span> = <span class="hljs-number">0</span>,
    last_user: Identity = Identity::<span class="hljs-title function_ invoke__">Address</span>(Address::<span class="hljs-title function_ invoke__">from</span>(ZERO_B256)),
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Imports</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">add</span>(x: <span class="hljs-type">u64</span>, y: <span class="hljs-type">u64</span>) {
        storage.z = x + y;
    }

    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">last_user</span>() {
        storage.last_user = <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>();
    }

    <span class="hljs-meta">#[storage(write)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">fixed_point_multiply_and_divide</span>(a: <span class="hljs-type">u64</span>, b: <span class="hljs-type">u64</span>, c: <span class="hljs-type">u64</span>) {
        storage.z = <span class="hljs-title function_ invoke__">mul_div_u64</span>(a, b, c);
    }
}
</code></pre>
<h3 id="standard-library">Standard Library</h3>
<h3 id="local">Local</h3>
<p>This is the folder structure.
note external ABIs as well
mention errors here</p>
<pre><code>└── Import   
    └── src
        ├── main.sw
        └── imports_library.sw
</code></pre>
<h3 id="external">External</h3>
<p>This is the project structure.</p>
<pre><code>├── Import   
│   ├── src
│   │   └── main.sw
│   └── Forc.toml
└── math_lib
    └── math_lib.sw
</code></pre>
`

export default html
