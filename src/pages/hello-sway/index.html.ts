// metadata
export const version = "0.37"
export const title = "Hello Sway"
export const description = "Introduction to Sway"
export const codes = [
    {
        fileName: "hello_sway",
        code: "Ly8gVGhlIHVuZGVybHlpbmcgc21hcnQgY29udHJhY3RzIHdyaXR0ZW4gaW4gU3dheSBhcmUgbm8gZGlmZmVyZW50IHRoYW4gdGhvc2UgaW4gU29saWRpdHkKLy8gU29tZSBieXRlY29kZSBpcyBkZXBsb3llZCB3aXRoIGFuIEFQSSBhbmQgc3RhdGUgdG8gaW50ZXJhY3Qgd2l0aApjb250cmFjdDsKCi8vIFRoZSBBQkkgKEFwcGxpY2F0aW9uIEJpbmFyeSBJbnRlcmZhY2UpIGNsZWFybHkgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIG9mIHRoZSBmdW5jdGlvbnMgcHJlc2VudCBpbiB0aGUgY29udHJhY3QKYWJpIEhlbGxvTW9kdWxhciB7CiAgICAvLyBUaGUgImFubm90YXRpb24iIHN0b3JhZ2UgaW5kaWNhdGVzIHRoZSBpbXB1cmUgYWN0aW9ucyBvZiB0aGUgZnVuY3Rpb24KICAgIC8vIEluIHRoaXMgY2FzZSB0aGUgZ3JlZXQoKSBmdW5jdGlvbiBvbmx5IGhhcyByZWFkaW5nIGNhcGFiaWxpdGllcy4KICAgIC8vIE5vdGU6IFN0b3JhZ2UgY2FuIG9ubHkgYmUgZm91bmQgaW4gY29udHJhY3QgdHlwZSBwcm9ncmFtcwogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gZ3JlZXQoKSAtPiBzdHJbMTZdOwp9CgovLyBTdG9yYWdlIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3RhdGUgYXZhaWxhYmxlIGluIHRoZSBjb250cmFjdCAKc3RvcmFnZSB7CiAgICBncmVldDogc3RyWzE2XSA9ICJXZWxjb21lIHRvIFN3YXkhIgp9CgovLyBUaGUgYWN0dWFsIGltcGxlbWVudGF0aW9uIG9mIEFCSSBmb3IgdGhlIGNvbnRyYWN0CmltcGwgSGVsbG9Nb2R1bGFyIGZvciBDb250cmFjdCB7CiAgICAjW3N0b3JhZ2UocmVhZCldCiAgICBmbiBncmVldCgpIC0+IHN0clsxNl0gewogICAgICAgIHN0b3JhZ2UuZ3JlZXQKICAgIH0KfQo=",
    },
]

const html = `<p>The <code>contract</code> keyword at the top defines one of the four program types found in Sway. Others being libraries, scripts and predicates.</p>
<pre><code class="language-rust"><span class="hljs-comment">// The underlying smart contracts written in Sway are no different than those in Solidity</span>
<span class="hljs-comment">// Some bytecode is deployed with an API and state to interact with</span>
contract;

<span class="hljs-comment">// The ABI (Application Binary Interface) clearly defines the signature of the functions present in the contract</span>
abi HelloModular {
    <span class="hljs-comment">// The "annotation" storage indicates the impure actions of the function</span>
    <span class="hljs-comment">// In this case the greet() function only has reading capabilities.</span>
    <span class="hljs-comment">// Note: Storage can only be found in contract type programs</span>
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">greet</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">str</span>[<span class="hljs-number">16</span>];
}

<span class="hljs-comment">// Storage contains all of the state available in the contract </span>
storage {
    greet: <span class="hljs-type">str</span>[<span class="hljs-number">16</span>] = <span class="hljs-string">"Welcome to Sway!"</span>
}

<span class="hljs-comment">// The actual implementation of ABI for the contract</span>
<span class="hljs-keyword">impl</span> <span class="hljs-title class_">HelloModular</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">greet</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">str</span>[<span class="hljs-number">16</span>] {
        storage.greet
    }
}
</code></pre>
`

export default html
