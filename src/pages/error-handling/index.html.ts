// metadata
export const version = "0.8.13"
export const title = "Error Handling"
export const description = "Handling different types of errors in Sway"
export const codes = [
    {
        fileName: "error_handling",
        code: "Y29udHJhY3Q7CgpkZXAgZXJyb3JzOwpkZXAgaW50ZXJmYWNlOwoKdXNlIGVycm9yczo6KjsKdXNlIGludGVyZmFjZTo6KjsKCnVzZSBzdGQ6OnsKICAgIHJldmVydDo6cmVxdWlyZSwKICAgIGFzc2VydDo6YXNzZXJ0LAogICAgbG9nZ2luZzo6bG9nCn07CgppbXBsIEVycm9yIGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X3JldmVydChzcGVjaWFsX251bWJlcjogdTY0KSB7CiAgICAgICAgaWYgKHNwZWNpYWxfbnVtYmVyICE9IDQyKSB7CiAgICAgICAgICAgIHJldmVydCgwKQogICAgICAgIH0KICAgIH0KCiAgICBmbiB0ZXN0X3JlcXVpcmUoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIHJlcXVpcmUoc3BlY2lhbF9udW1iZXIgPT0gNDIsICJTcGVjaWFsIG51bWJlciBtdXN0IGJlIGVxdWFsIHRvIDQyIik7CiAgICB9CgogICAgZm4gdGVzdF9hc3NlcnQoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIGFzc2VydChzcGVjaWFsX251bWJlciA9PSA0Mik7CiAgICB9CgogICAgZm4gdGVzdF9jdXN0b21fcmVxdWlyZShzcGVjaWFsX251bWJlcjogdTY0KSB7CiAgICAgICAgcmVxdWlyZShzcGVjaWFsX251bWJlciA9PSA0MiwgSW5wdXRFcnJvcjo6SW5wdXRTbWFsbGVyVGhhbjQyKTsKICAgIH0KCiAgICBmbiB0ZXN0X29wdGlvbihzcGVjaWFsX251bWJlcjogT3B0aW9uPHU2ND4pIHsKICAgICAgICByZXF1aXJlKHNwZWNpYWxfbnVtYmVyLmlzX3NvbWUoKSwgSW5wdXRFcnJvcjo6TnVtYmVyRG9lc05vdEV4aXN0KTsKICAgICAgICAvLyByZXF1aXJlKHNwZWNpYWxfbnVtYmVyLmlzX25vbmUoKSwgSW5wdXRFcnJvcjo6TnVtYmVyRXhpc3QpOwogICAgfQoKICAgIGZuIHRlc3RfcmVzdWx0KHNwZWNpYWxfbnVtYmVyOiB1NjQpIC0+IFJlc3VsdDx1NjQsIElucHV0RXJyb3I+IHsKICAgICAgICBtYXRjaCBzcGVjaWFsX251bWJlciA9PSA0MiB7CiAgICAgICAgICAgIHRydWUgPT4gUmVzdWx0OjpPayhzcGVjaWFsX251bWJlciksCiAgICAgICAgICAgIGZhbHNlID0+IFJlc3VsdDo6RXJyKElucHV0RXJyb3I6OklucHV0SXNOb3Q0MiksCiAgICAgICAgfQogICAgfQp9Cg==",
    },
    {
        fileName: "errors",
        code: "bGlicmFyeSBlcnJvcnM7CgpwdWIgZW51bSBJbnB1dEVycm9yIHsKICAgIElucHV0U21hbGxlclRoYW40MjogKCksCiAgICBJbnB1dElzTm90NDI6ICgpLAogICAgTnVtYmVyRG9lc05vdEV4aXN0OiAoKSwKICAgIE51bWJlckV4aXN0OiAoKSwKfQ==",
    },
]

const html = `<p>Errors will revert all state changes made during a transaction. Similar to Solidity an error can be thrown by utilizing <code>revert</code>, <code>assert</code>, <code>require</code></p>
<ol>
<li><code>revert</code> function calls directly reverts the transaction</li>
<li><code>assert</code> only reverts if a conditional is not met to be <code>true</code></li>
<li><code>require</code> only reverts <em>with an error</em> if a conditional is not met to be <code>true</code></li>
</ol>
<p>Note: <code>revert</code> keyword will panic in a <code>predicate</code></p>
<pre><code class="language-rust">contract;

dep errors;
dep interface;

<span class="hljs-keyword">use</span> errors::*;
<span class="hljs-keyword">use</span> interface::*;

<span class="hljs-keyword">use</span> std::{
    revert::require,
    assert::assert,
    logging::log
};

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Error</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_revert</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">if</span> (special_number != <span class="hljs-number">42</span>) {
            <span class="hljs-title function_ invoke__">revert</span>(<span class="hljs-number">0</span>)
        }
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, <span class="hljs-string">"Special number must be equal to 42"</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_assert</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">assert</span>(special_number == <span class="hljs-number">42</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_custom_require</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, InputError::InputSmallerThan42);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_option</span>(special_number: <span class="hljs-type">Option</span>&lt;<span class="hljs-type">u64</span>&gt;) {
        <span class="hljs-title function_ invoke__">require</span>(special_number.<span class="hljs-title function_ invoke__">is_some</span>(), InputError::NumberDoesNotExist);
        <span class="hljs-comment">// require(special_number.is_none(), InputError::NumberExist);</span>
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_result</span>(special_number: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">Result</span>&lt;<span class="hljs-type">u64</span>, InputError&gt; {
        <span class="hljs-keyword">match</span> special_number == <span class="hljs-number">42</span> {
            <span class="hljs-literal">true</span> =&gt; <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Ok</span>(special_number),
            <span class="hljs-literal">false</span> =&gt; <span class="hljs-type">Result</span>::<span class="hljs-title function_ invoke__">Err</span>(InputError::InputIsNot42),
        }
    }
}
</code></pre>
<h3 id="external">External</h3>
<p>This is the project structure for importing your own custom errors</p>
<pre><code>└── Import   
    └── src
        ├── main.sw
        └── errors.sw
</code></pre>
<p>Note: Similar to Solidity using custom errors will help save on bytecode size and provide gas savings</p>
<pre><code class="language-rust">library errors;

<span class="hljs-keyword">pub</span> <span class="hljs-keyword">enum</span> <span class="hljs-title class_">InputError</span> {
    InputSmallerThan42: (),
    InputIsNot42: (),
    NumberDoesNotExist: (),
    NumberExist: (),
}
</code></pre>
`

export default html
