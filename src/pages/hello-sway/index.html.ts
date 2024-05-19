// metadata
export const version = "0.59.0"
export const title = "Hello Sway"
export const description = "Introduction to Sway"

export const tempFileName = "hello_sway.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=699fb8b542003e6c551e3e941e308079"

export const keywords = ["hello", "world", "sway", "intro"]

export const codes = [
  {
    fileName: "hello_sway.rs",
    code: "Ly8gVGhlIHVuZGVybHlpbmcgc21hcnQgY29udHJhY3RzIHdyaXR0ZW4gaW4gU3dheSBhcmUgbm8gZGlmZmVyZW50IHRoYW4gdGhvc2UgaW4gU29saWRpdHkKLy8gU29tZSBieXRlY29kZSBpcyBkZXBsb3llZCB3aXRoIGFuIEFQSSBhbmQgc3RhdGUgdG8gaW50ZXJhY3Qgd2l0aApjb250cmFjdDsKCi8vIFRoZSBBQkkgKEFwcGxpY2F0aW9uIEJpbmFyeSBJbnRlcmZhY2UpIGNsZWFybHkgZGVmaW5lcyB0aGUgc2lnbmF0dXJlIG9mIHRoZSBmdW5jdGlvbnMgcHJlc2VudCBpbiB0aGUgY29udHJhY3QKYWJpIEhlbGxvTW9kdWxhciB7CiAgICAvLyBUaGUgImFubm90YXRpb24iIHN0b3JhZ2UgaW5kaWNhdGVzIHRoZSBpbXB1cmUgYWN0aW9ucyBvZiB0aGUgZnVuY3Rpb24KICAgIC8vIEluIHRoaXMgY2FzZSB0aGUgZ3JlZXQoKSBmdW5jdGlvbiBvbmx5IGhhcyByZWFkaW5nIGNhcGFiaWxpdGllcy4KICAgIC8vIE5vdGU6IFN0b3JhZ2UgY2FuIG9ubHkgYmUgZm91bmQgaW4gY29udHJhY3QgdHlwZSBwcm9ncmFtcwogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gbXlfbHVja3lfbnVtYmVyKCkgLT4gdTY0Owp9CgovLyBTdG9yYWdlIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3RhdGUgYXZhaWxhYmxlIGluIHRoZSBjb250cmFjdCAKc3RvcmFnZSB7CiAgICBsdWNreV9udW1iZXI6IHU2NCA9IDc3NywKfQoKLy8gVGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiBvZiBBQkkgZm9yIHRoZSBjb250cmFjdAppbXBsIEhlbGxvTW9kdWxhciBmb3IgQ29udHJhY3QgewogICAgI1tzdG9yYWdlKHJlYWQpXQogICAgZm4gbXlfbHVja3lfbnVtYmVyKCkgLT4gdTY0IHsKICAgICAgICBzdG9yYWdlLmx1Y2t5X251bWJlci5yZWFkKCkKICAgIH0KfQo=",
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
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">my_lucky_number</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span>;
}

<span class="hljs-comment">// Storage contains all of the state available in the contract </span>
storage {
    lucky_number: <span class="hljs-type">u64</span> = <span class="hljs-number">777</span>,
}

<span class="hljs-comment">// The actual implementation of ABI for the contract</span>
<span class="hljs-keyword">impl</span> <span class="hljs-title class_">HelloModular</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-meta">#[storage(read)]</span>
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">my_lucky_number</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
        storage.lucky_number.<span class="hljs-title function_ invoke__">read</span>()
    }
}
</code></pre>`

export default html
