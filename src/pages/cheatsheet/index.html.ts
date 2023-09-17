// metadata
export const version = "0.37"
export const title = "Solidity Cheatsheet"
export const description = "Introduction to Sway"
export const codes = [
  {
    fileName: "cheatsheet",
    code: "Y29udHJhY3Q7CgpkZXAgaW50ZXJmYWNlOwp1c2UgaW50ZXJmYWNlOjoqOwoKdXNlIHN0ZDo6ewogICAgaWRlbnRpdHk6OklkZW50aXR5LAogICAgYmxvY2s6OnsgaGVpZ2h0LCB0aW1lc3RhbXAgfSwKICAgIGF1dGg6Om1zZ19zZW5kZXIsCiAgICBjb25zdGFudHM6OiosCiAgICB1MTI4OjpVMTI4Cn07CgppbXBsIFNvbGlkaXR5Q2hlYXRzaGVldCBmb3IgQ29udHJhY3QgewogICAgZm4gZ2V0X2Jsb2NrbnVtYmVyKCkgLT4gdTY0IHsKICAgICAgICByZXR1cm4gaGVpZ2h0KCk7IC8vIGJsb2NrLm51bWJlciBlcXVpdmFsZW50CiAgICB9CiAgICAKICAgIGZuIGdldF9ibG9ja3RpbWUoKSAtPiB1NjQgewogICAgICAgIHJldHVybiB0aW1lc3RhbXAoKTsgLy8gYmxvY2sudGltZXN0YW1wIGVxdWl2YWxlbnQKICAgIH0KICAgIAogICAgZm4gZ2V0X21zZ19zZW5kZXIoKSAtPiBJZGVudGl0eXsKICAgICAgICByZXR1cm4gbXNnX3NlbmRlcigpLnVud3JhcCgpOyAvLyBtc2cuc2VuZGVyIGVxdWl2YWxlbnQKICAgIH0KCiAgICBmbiBnZXRfdTEyOF9udW1iZXIoKSAtPiBVMTI4IHsgCiAgICAgICAgLyogIFRoZXJlIGlzIG5vIHVpbnQxMjggaW4gU3dheSBzbyBpdCBpcyBjb21wb3NlZCBvZiB0d28gNjQtYml0IGNvbXBvbmVudHMKICAgICAgICAgICAgV2l0aGluIHRoZSBsaWJyYXJ5IFN3YXkgdGVhbSBoYXMgYWxzbyBwcm92aWRlZCBmdWxsIGxpc3Qgb2Ygb3BlcmF0aW9ucyAKICAgICAgICAgICAgaS5lLiBleHBvbmVudHMsIHBsdXMsIG1pbnVzLCBtdWx0aXBseSwgZGl2aWRlLCBzcXVhcmUgcm9vdHMsIGV0YwogICAgICAgICAgICBGdWxsIG9mIG9wZXJhdGlvbnMgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vRnVlbExhYnMvc3dheS9ibG9iL21hc3Rlci9zd2F5LWxpYi1zdGQvc3JjL3UxMjguc3cKICAgICAgICAgICAgTm90ZSB0aGVyZSBpcyBhbHNvIGFuIGVxdWl2YWxlbnQgZm9yIHVpbnQyNTYgY29tcG9zZWQgb2YgZm91ciA2NC1iaXQgY29tcG9uZW50cwogICAgICAgICovCiAgICAgICAgcmV0dXJuIFUxMjg6OmZyb20oKDAsIDEyKSkgKyBVMTI4Ojpmcm9tKCgwLCAxMikpOyAvLyB1aW50MTI4IGVxdWl2YWxlbnQKICAgIH0KfQ==",
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

dep interface;
<span class="hljs-keyword">use</span> interface::*;

<span class="hljs-keyword">use</span> std::{
    identity::Identity,
    block::{ height, timestamp },
    auth::msg_sender,
    constants::*,
    <span class="hljs-type">u128</span>::U128
};

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">SolidityCheatsheet</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocknumber</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">height</span>(); <span class="hljs-comment">// block.number equivalent</span>
    }
    
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_blocktime</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        <span class="hljs-keyword">return</span> <span class="hljs-title function_ invoke__">timestamp</span>(); <span class="hljs-comment">// block.timestamp equivalent</span>
    }
    
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">get_msg_sender</span>() <span class="hljs-punctuation">-&gt;</span> Identity{
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
</code></pre>
`

export default html
