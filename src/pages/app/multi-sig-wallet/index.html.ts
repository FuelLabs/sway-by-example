// metadata
export const version = "0.59.0"
export const title = "Multi-Sig Wallet"
export const description = "An example of multi-sig wallet in Sway"

export const tempFileName = "multisig.sw"
export const tempPlaygroundLink =
  "https://www.sway-playground.org/?toolchain=beta-5&transpile=false&gist=a5b8872384c02b993b1f317ed8249afe"

export const keywords = ["app", "application", "multi", "sig", "signature", "wallet"]

export const codes = [
  {
    fileName: "MultiSigWallet.rs",
    code: "cHJlZGljYXRlOwoKdXNlIHN0ZDo6ewogICAgdHg6OnsKICAgICAgICB0eF93aXRuZXNzX2RhdGEsCiAgICAgICAgdHhfd2l0bmVzc2VzX2NvdW50LAogICAgICAgIHR4X2lkCiAgICB9LAogICAgY29uc3RhbnRzOjpaRVJPX0IyNTYsCiAgICBiNTEyOjpCNTEyLAogICAgZWNyOjplY19yZWNvdmVyX2FkZHJlc3MKfTsKCmNvbmZpZ3VyYWJsZSB7CiAgICBSRVFVSVJFRF9TSUdOQVRVUkVTOiB1NjQgPSAwLAogICAgU0lHTkVSUzogW0FkZHJlc3M7IDNdID0gWwogICAgICAgIEFkZHJlc3M6OmZyb20oMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwKSwKICAgICAgICBBZGRyZXNzOjpmcm9tKDB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCksCiAgICAgICAgQWRkcmVzczo6ZnJvbSgweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApCiAgICBdICAgCn0KCmZuIHZlcmlmeV9zaWduYXR1cmUoaTogdTY0KSAtPiB1NjQgewogICAgLy8gRGlzY2FyZCBhbnkgb3V0IG9mIGJvdW5kcyBzaWduYXR1cmVzCiAgICBpZiAoaSA+PSB0eF93aXRuZXNzZXNfY291bnQoKSkgewogICAgICAgIHJldHVybiAwOwogICAgfQoKICAgIGxldCB0eF9oYXNoID0gdHhfaWQoKTsKIAogICAgbGV0IG11dCBqID0gMDsKCiAgICB3aGlsZSBqIDwgMyB7CiAgICAgICAgbGV0IGN1cnJlbnRfc2lnbmF0dXJlID0gdHhfd2l0bmVzc19kYXRhOjo8QjUxMj4oaik7CiAgICAgICAgCiAgICAgICAgbGV0IGN1cnJlbnRfYWRkcmVzcyA9IGVjX3JlY292ZXJfYWRkcmVzcyhjdXJyZW50X3NpZ25hdHVyZSwgdHhfaGFzaCkudW53cmFwKCk7CgogICAgICAgIGlmIGN1cnJlbnRfYWRkcmVzcyA9PSBTSUdORVJTW2ldIHsKICAgICAgICAgICAgcmV0dXJuIDE7CiAgICAgICAgfQoKICAgICAgICBqICs9IDE7CiAgICB9CiAgICByZXR1cm4gMDsKfQoKZm4gbWFpbigpIC0+IGJvb2wgewogICAgbGV0IG11dCB2YWxpZF9zaWduYXR1cmVzID0gMDsKCiAgICAvLyBWZXJpZml5aW5nIGVhY2ggcG90ZW50aWFsIHNpZ25hdHVyZSAKICAgIHZhbGlkX3NpZ25hdHVyZXMgPSB2ZXJpZnlfc2lnbmF0dXJlKDApOwogICAgdmFsaWRfc2lnbmF0dXJlcyA9IHZhbGlkX3NpZ25hdHVyZXMgKyB2ZXJpZnlfc2lnbmF0dXJlKDEpOwogICAgdmFsaWRfc2lnbmF0dXJlcyA9IHZhbGlkX3NpZ25hdHVyZXMgKyB2ZXJpZnlfc2lnbmF0dXJlKDIpOwoKICAgIGlmIHZhbGlkX3NpZ25hdHVyZXMgPj0gUkVRVUlSRURfU0lHTkFUVVJFUyB7CiAgICAgICAgcmV0dXJuIHRydWU7CiAgICB9CiAgICByZXR1cm4gZmFsc2U7Cn0K",
  },
]

const html = `<p>Examples of a <code>Predicate</code> based multi-sig in Sway</p>
<pre><code class="language-rust">predicate;

<span class="hljs-keyword">use</span> std::{
    tx::{
        tx_witness_data,
        tx_witnesses_count,
        tx_id
    },
    constants::ZERO_B256,
    b512::B512,
    ecr::ec_recover_address
};

configurable {
    REQUIRED_SIGNATURES: <span class="hljs-type">u64</span> = <span class="hljs-number">0</span>,
    SIGNERS: [Address; <span class="hljs-number">3</span>] = [
        Address::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-number">0x0000000000000000000000000000000000000000000000000000000000000000</span>),
        Address::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-number">0x0000000000000000000000000000000000000000000000000000000000000000</span>),
        Address::<span class="hljs-title function_ invoke__">from</span>(<span class="hljs-number">0x0000000000000000000000000000000000000000000000000000000000000000</span>)
    ]   
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">verify_signature</span>(i: <span class="hljs-type">u64</span>) <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">u64</span> {
    <span class="hljs-comment">// Discard any out of bounds signatures</span>
    <span class="hljs-keyword">if</span> (i &gt;= <span class="hljs-title function_ invoke__">tx_witnesses_count</span>()) {
        <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
    }

    <span class="hljs-keyword">let</span> <span class="hljs-variable">tx_hash</span> = <span class="hljs-title function_ invoke__">tx_id</span>();
 
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">j</span> = <span class="hljs-number">0</span>;

    <span class="hljs-keyword">while</span> j &lt; <span class="hljs-number">3</span> {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">current_signature</span> = tx_witness_data::&lt;B512&gt;(j);
        
        <span class="hljs-keyword">let</span> <span class="hljs-variable">current_address</span> = <span class="hljs-title function_ invoke__">ec_recover_address</span>(current_signature, tx_hash).<span class="hljs-title function_ invoke__">unwrap</span>();

        <span class="hljs-keyword">if</span> current_address == SIGNERS[i] {
            <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
        }

        j += <span class="hljs-number">1</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}

<span class="hljs-keyword">fn</span> <span class="hljs-title function_">main</span>() <span class="hljs-punctuation">-&gt;</span> <span class="hljs-type">bool</span> {
    <span class="hljs-keyword">let</span> <span class="hljs-keyword">mut </span><span class="hljs-variable">valid_signatures</span> = <span class="hljs-number">0</span>;

    <span class="hljs-comment">// Verifiying each potential signature </span>
    valid_signatures = <span class="hljs-title function_ invoke__">verify_signature</span>(<span class="hljs-number">0</span>);
    valid_signatures = valid_signatures + <span class="hljs-title function_ invoke__">verify_signature</span>(<span class="hljs-number">1</span>);
    valid_signatures = valid_signatures + <span class="hljs-title function_ invoke__">verify_signature</span>(<span class="hljs-number">2</span>);

    <span class="hljs-keyword">if</span> valid_signatures &gt;= REQUIRED_SIGNATURES {
        <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
    }
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
}
</code></pre>`

export default html
