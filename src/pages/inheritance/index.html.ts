// metadata
export const version = "0.59.0"
export const title = "Inheritance"
export const description = "Example of inheritance in Solidity"

export const keywords = [
  "inheritance",
  "super",
  "override",
  "virtual",
  "is",
  "contract",
  "contracts",
]

export const codes = [
  {
    fileName: "Inheritance.sol",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yNDsKCi8qIEdyYXBoIG9mIGluaGVyaXRhbmNlCiAgICBBCiAgIC8gXAogIEIgICBDCiAvIFwgLwpGICBELEUKCiovCgpjb250cmFjdCBBIHsKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIHZpcnR1YWwgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiQSI7CiAgICB9Cn0KCi8vIENvbnRyYWN0cyBpbmhlcml0IG90aGVyIGNvbnRyYWN0cyBieSB1c2luZyB0aGUga2V5d29yZCAnaXMnLgpjb250cmFjdCBCIGlzIEEgewogICAgLy8gT3ZlcnJpZGUgQS5mb28oKQogICAgZnVuY3Rpb24gZm9vKCkgcHVibGljIHB1cmUgdmlydHVhbCBvdmVycmlkZSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuICJCIjsKICAgIH0KfQoKY29udHJhY3QgQyBpcyBBIHsKICAgIC8vIE92ZXJyaWRlIEEuZm9vKCkKICAgIGZ1bmN0aW9uIGZvbygpIHB1YmxpYyBwdXJlIHZpcnR1YWwgb3ZlcnJpZGUgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiAiQyI7CiAgICB9Cn0KCi8vIENvbnRyYWN0cyBjYW4gaW5oZXJpdCBmcm9tIG11bHRpcGxlIHBhcmVudCBjb250cmFjdHMuCi8vIFdoZW4gYSBmdW5jdGlvbiBpcyBjYWxsZWQgdGhhdCBpcyBkZWZpbmVkIG11bHRpcGxlIHRpbWVzIGluCi8vIGRpZmZlcmVudCBjb250cmFjdHMsIHBhcmVudCBjb250cmFjdHMgYXJlIHNlYXJjaGVkIGZyb20KLy8gcmlnaHQgdG8gbGVmdCwgYW5kIGluIGRlcHRoLWZpcnN0IG1hbm5lci4KCmNvbnRyYWN0IEQgaXMgQiwgQyB7CiAgICAvLyBELmZvbygpIHJldHVybnMgIkMiCiAgICAvLyBzaW5jZSBDIGlzIHRoZSByaWdodCBtb3N0IHBhcmVudCBjb250cmFjdCB3aXRoIGZ1bmN0aW9uIGZvbygpCiAgICBmdW5jdGlvbiBmb28oKSBwdWJsaWMgcHVyZSBvdmVycmlkZShCLCBDKSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIHN1cGVyLmZvbygpOwogICAgfQp9Cgpjb250cmFjdCBFIGlzIEMsIEIgewogICAgLy8gRS5mb28oKSByZXR1cm5zICJCIgogICAgLy8gc2luY2UgQiBpcyB0aGUgcmlnaHQgbW9zdCBwYXJlbnQgY29udHJhY3Qgd2l0aCBmdW5jdGlvbiBmb28oKQogICAgZnVuY3Rpb24gZm9vKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUoQywgQikgcmV0dXJucyAoc3RyaW5nIG1lbW9yeSkgewogICAgICAgIHJldHVybiBzdXBlci5mb28oKTsKICAgIH0KfQoKLy8gSW5oZXJpdGFuY2UgbXVzdCBiZSBvcmRlcmVkIGZyb20g4oCcbW9zdCBiYXNlLWxpa2XigJ0gdG8g4oCcbW9zdCBkZXJpdmVk4oCdLgovLyBTd2FwcGluZyB0aGUgb3JkZXIgb2YgQSBhbmQgQiB3aWxsIHRocm93IGEgY29tcGlsYXRpb24gZXJyb3IuCmNvbnRyYWN0IEYgaXMgQSwgQiB7CiAgICBmdW5jdGlvbiBmb28oKSBwdWJsaWMgcHVyZSBvdmVycmlkZShBLCBCKSByZXR1cm5zIChzdHJpbmcgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIHN1cGVyLmZvbygpOwogICAgfQp9Cg==",
  },
]

const html = `<p>Solidity supports multiple inheritance. Contracts can inherit other contract by using the <code>is</code> keyword.</p>
<p>Function that is going to be overridden by a child contract must be declared as <code>virtual</code>.</p>
<p>Function that is going to override a parent function must use the keyword <code>override</code>.</p>
<p>Order of inheritance is important.</p>
<p>You have to list the parent contracts in the order from “most base-like” to “most derived”.</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.59.0;</span>

<span class="hljs-comment">/* Graph of inheritance
    A
   / \\
  B   C
 / \\ /
F  D,E

*/</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"A"</span>;
    }
}

<span class="hljs-comment">// Contracts inherit other contracts by using the keyword &#x27;is&#x27;.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">B</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"B"</span>;
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">C</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span> </span>{
    <span class="hljs-comment">// Override A.foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">virtual</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-string">"C"</span>;
    }
}

<span class="hljs-comment">// Contracts can inherit from multiple parent contracts.</span>
<span class="hljs-comment">// When a function is called that is defined multiple times in</span>
<span class="hljs-comment">// different contracts, parent contracts are searched from</span>
<span class="hljs-comment">// right to left, and in depth-first manner.</span>

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">D</span> <span class="hljs-keyword">is</span> <span class="hljs-title">B</span>, <span class="hljs-title">C</span> </span>{
    <span class="hljs-comment">// D.foo() returns "C"</span>
    <span class="hljs-comment">// since C is the right most parent contract with function foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">B, C</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">E</span> <span class="hljs-keyword">is</span> <span class="hljs-title">C</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-comment">// E.foo() returns "B"</span>
    <span class="hljs-comment">// since B is the right most parent contract with function foo()</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">C, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}

<span class="hljs-comment">// Inheritance must be ordered from “most base-like” to “most derived”.</span>
<span class="hljs-comment">// Swapping the order of A and B will throw a compilation error.</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">F</span> <span class="hljs-keyword">is</span> <span class="hljs-title">A</span>, <span class="hljs-title">B</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span>(<span class="hljs-params">A, B</span>) <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">string</span> <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">super</span>.foo();
    }
}
</code></pre>`

export default html
