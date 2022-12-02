// metadata
export const version = "0.8.13"
export const title = "Error Handling"
export const description = "Handling different types of errors in Sway"
export const codes = [
    {
        fileName: "error_handling",
        code: "Y29udHJhY3Q7CgpkZXAgZXJyb3JzOwoKdXNlIGVycm9yczo6KjsKCnVzZSBzdGQ6OnsKICAgIHJldmVydDo6cmVxdWlyZSwKICAgIGFzc2VydDo6YXNzZXJ0LAogICAgbG9nZ2luZzo6bG9nCn07CgphYmkgRXJyb3IgewogICAgZm4gdGVzdF9yZXF1aXJlKHNwZWNpYWxfbnVtYmVyOiB1NjQpOwogICAgZm4gdGVzdF9hc3NlcnQoc3BlY2lhbF9udW1iZXI6IHU2NCk7CiAgICBmbiB0ZXN0X3JlcXVpcmVfaW1wb3J0KHNwZWNpYWxfbnVtYmVyOiB1NjQpOwp9CgppbXBsIEVycm9yIGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X3JlcXVpcmUoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIHJlcXVpcmUoc3BlY2lhbF9udW1iZXIgPT0gNDIsICJTcGVjaWFsIG51bWJlciBtdXN0IGJlIGVxdWFsIHRvIDQyIik7CiAgICB9CgogICAgZm4gdGVzdF9hc3NlcnQoc3BlY2lhbF9udW1iZXI6IHU2NCkgewogICAgICAgIGFzc2VydChzcGVjaWFsX251bWJlciA9PSA0Mik7CiAgICB9CgogICAgZm4gdGVzdF9yZXF1aXJlX2ltcG9ydChzcGVjaWFsX251bWJlcjogdTY0KSB7CiAgICAgICAgcmVxdWlyZShzcGVjaWFsX251bWJlciA9PSA0MiwgSW5wdXRFcnJvcjo6SW5wdXRTbWFsbGVyVGhhbjQyKTsKICAgIH0KfQo=",
    },
]

const html = `<p>Tinggggg</p>
<pre><code class="language-rust">contract;

dep errors;

<span class="hljs-keyword">use</span> errors::*;

<span class="hljs-keyword">use</span> std::{
    revert::require,
    assert::assert,
    logging::log
};

abi Error {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require</span>(special_number: <span class="hljs-type">u64</span>);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_assert</span>(special_number: <span class="hljs-type">u64</span>);
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require_import</span>(special_number: <span class="hljs-type">u64</span>);
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">Error</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, <span class="hljs-string">"Special number must be equal to 42"</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_assert</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">assert</span>(special_number == <span class="hljs-number">42</span>);
    }

    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_require_import</span>(special_number: <span class="hljs-type">u64</span>) {
        <span class="hljs-title function_ invoke__">require</span>(special_number == <span class="hljs-number">42</span>, InputError::InputSmallerThan42);
    }
}
</code></pre>
`

export default html
