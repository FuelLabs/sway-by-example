// metadata
export const version = "0.59.0"
export const title = "Solidity Cheatsheet"
export const description = "Introduction to Sway"

export const tempFileName = "cheatsheet.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=3558084e6e355ffb81606e34e483b0ec"

export const keywords = [
  "sol",
  "solidity",
  "cheatsheet",
  "converstion",
  "convert",
  "converstions",
]

export const codes = [
  {
    fileName: "solidity.rs",
    code: "Y29udHJhY3Q7Cgp1c2Ugc3RkOjp7CiAgICBpZGVudGl0eTo6SWRlbnRpdHksCiAgICBibG9jazo6eyBoZWlnaHQsIHRpbWVzdGFtcCB9LAogICAgYXV0aDo6bXNnX3NlbmRlciwKICAgIGNvbnN0YW50czo6KiwKICAgIHUxMjg6OlUxMjgKfTsKCmFiaSBTb2xpZGl0eUNoZWF0c2hlZXQgewogICAgZm4gZ2V0X2Jsb2NrbnVtYmVyKCkgLT4gdTMyOwogICAgZm4gZ2V0X2Jsb2NrdGltZSgpIC0+IHU2NDsKICAgIGZuIGdldF9tc2dfc2VuZGVyKCkgLT4gSWRlbnRpdHk7CiAgICBmbiBnZXRfdTEyOF9udW1iZXIoKSAtPiBVMTI4Owp9CgppbXBsIFNvbGlkaXR5Q2hlYXRzaGVldCBmb3IgQ29udHJhY3QgewogICAgZm4gZ2V0X2Jsb2NrbnVtYmVyKCkgLT4gdTMyIHsKICAgICAgICByZXR1cm4gaGVpZ2h0KCk7IC8vIGJsb2NrLm51bWJlciBlcXVpdmFsZW50CiAgICB9CiAgICAKICAgIGZuIGdldF9ibG9ja3RpbWUoKSAtPiB1NjQgewogICAgICAgIHJldHVybiB0aW1lc3RhbXAoKTsgLy8gYmxvY2sudGltZXN0YW1wIGVxdWl2YWxlbnQKICAgIH0KICAgIAogICAgZm4gZ2V0X21zZ19zZW5kZXIoKSAtPiBJZGVudGl0eSB7CiAgICAgICAgcmV0dXJuIG1zZ19zZW5kZXIoKS51bndyYXAoKTsgLy8gbXNnLnNlbmRlciBlcXVpdmFsZW50CiAgICB9CgogICAgZm4gZ2V0X3UxMjhfbnVtYmVyKCkgLT4gVTEyOCB7IAogICAgICAgIC8qICBUaGVyZSBpcyBubyB1aW50MTI4IGluIFN3YXkgc28gaXQgaXMgY29tcG9zZWQgb2YgdHdvIDY0LWJpdCBjb21wb25lbnRzCiAgICAgICAgICAgIFdpdGhpbiB0aGUgbGlicmFyeSBTd2F5IHRlYW0gaGFzIGFsc28gcHJvdmlkZWQgZnVsbCBsaXN0IG9mIG9wZXJhdGlvbnMgCiAgICAgICAgICAgIGkuZS4gZXhwb25lbnRzLCBwbHVzLCBtaW51cywgbXVsdGlwbHksIGRpdmlkZSwgc3F1YXJlIHJvb3RzLCBldGMKICAgICAgICAgICAgRnVsbCBvZiBvcGVyYXRpb25zIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL0Z1ZWxMYWJzL3N3YXkvYmxvYi9tYXN0ZXIvc3dheS1saWItc3RkL3NyYy91MTI4LnN3CiAgICAgICAgICAgIE5vdGUgdGhlcmUgaXMgYWxzbyBhbiBlcXVpdmFsZW50IGZvciB1aW50MjU2IGNvbXBvc2VkIG9mIGZvdXIgNjQtYml0IGNvbXBvbmVudHMKICAgICAgICAqLwogICAgICAgIHJldHVybiBVMTI4Ojpmcm9tKCgwLCAxMikpICsgVTEyODo6ZnJvbSgoMCwgMTIpKTsgLy8gdWludDEyOCBlcXVpdmFsZW50CiAgICB9Cn0K",
  },
]

const html = `<p>A quick <code>Solidity</code> &rarr; <code>Sway</code> cross reference for the most commonly used items</p>
<ul>
<li>block.timestamp</li>
<li>msg.sender</li>
<li>etc</li>
</ul>
<p>If something is missing here you can most likely find it in the <a href="https://github.com/FuelLabs/sway/tree/master/sway-lib-std">Sway STD Library</a></p>
<pre><code class="language-rust">contract;

<span class="hljs-keyword">use</span> std::{
    identity::Identity,
    block::{ height, timestamp },
    auth::msg_sender,
    constants::*,
    <span class="hljs-type">u128</span>::U128
};

abi SolidityCheatsheet {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocknumber</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u32</span>;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocktime</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_msg_sender</span>() <span class="hljs-punctuation">-&gt;</span> Identity;
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_u128_number</span>() <span class="hljs-punctuation">-&gt;</span> U128;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">SolidityCheatsheet</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocknumber</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u32</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">height</span>(); <span class="hljs-comment">// block.number equivalent</span>
    }
    
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocktime</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">timestamp</span>(); <span class="hljs-comment">// block.timestamp equivalent</span>
    }
    
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_msg_sender</span>() <span class="hljs-punctuation">-&gt;</span> Identity {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">msg_sender</span>().<span class="hljs-title function_ invoke__">unwrap</span>(); <span class="hljs-comment">// msg.sender equivalent</span>
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_u128_number</span>() <span class="hljs-punctuation">-&gt;</span> U128 { 
        <span class="hljs-comment">/*  There is no uint128 in Sway so it is composed of two 64-bit components
            Within the library Sway team has also provided full list of operations 
            i.e. exponents, plus, minus, multiply, divide, square roots, etc
            Full of operations here https://github.com/FuelLabs/sway/blob/master/sway-lib-std/src/u128.sw
            Note there is also an equivalent for uint256 composed of four 64-bit components
        */</span>
        <span class="hljs-keyword">return</span> U128::<span class="hljs-title function_ invoke__">from</span>((<span class="hljs-number">0</span>, <span class="hljs-number">12</span>)) + U128::<span class="hljs-title function_ invoke__">from</span>((<span class="hljs-number">0</span>, <span class="hljs-number">12</span>)); <span class="hljs-comment">// uint128 equivalent</span>
    }
}
</code></pre>`

export default html
