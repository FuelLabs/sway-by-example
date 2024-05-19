// metadata
export const version = "0.59.0"
export const title = "ABI Decode"
export const description = "ABI decode bytes"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["abi", "decode", "bytes"]

export const codes = [
  {
    fileName: "AbiDecode.rs",
    code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuNTkuMDsKCmNvbnRyYWN0IEFiaURlY29kZSB7CiAgICBzdHJ1Y3QgTXlTdHJ1Y3QgewogICAgICAgIHN0cmluZyBuYW1lOwogICAgICAgIHVpbnQyNTZbMl0gbnVtczsKICAgIH0KCiAgICBmdW5jdGlvbiBlbmNvZGUoCiAgICAgICAgdWludDI1NiB4LAogICAgICAgIGFkZHJlc3MgYWRkciwKICAgICAgICB1aW50MjU2W10gY2FsbGRhdGEgYXJyLAogICAgICAgIE15U3RydWN0IGNhbGxkYXRhIG15U3RydWN0CiAgICApIGV4dGVybmFsIHB1cmUgcmV0dXJucyAoYnl0ZXMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoeCwgYWRkciwgYXJyLCBteVN0cnVjdCk7CiAgICB9CgogICAgZnVuY3Rpb24gZGVjb2RlKGJ5dGVzIGNhbGxkYXRhIGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgcmV0dXJucyAoCiAgICAgICAgICAgIHVpbnQyNTYgeCwKICAgICAgICAgICAgYWRkcmVzcyBhZGRyLAogICAgICAgICAgICB1aW50MjU2W10gbWVtb3J5IGFyciwKICAgICAgICAgICAgTXlTdHJ1Y3QgbWVtb3J5IG15U3RydWN0CiAgICAgICAgKQogICAgewogICAgICAgIC8vICh1aW50IHgsIGFkZHJlc3MgYWRkciwgdWludFtdIG1lbW9yeSBhcnIsIE15U3RydWN0IG15U3RydWN0KSA9IC4uLgogICAgICAgICh4LCBhZGRyLCBhcnIsIG15U3RydWN0KSA9CiAgICAgICAgICAgIGFiaS5kZWNvZGUoZGF0YSwgKHVpbnQyNTYsIGFkZHJlc3MsIHVpbnQyNTZbXSwgTXlTdHJ1Y3QpKTsKICAgIH0KfQo=",
  },
]

const html = `<p><code>abi.encode</code> encodes data into <code>bytes</code>.</p>
<p><code>abi.decode</code> decodes <code>bytes</code> back into data.</p>
<pre><code class="language-rust"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
pragma solidity ^<span class="hljs-number">0.59</span>.<span class="hljs-number">0</span>;

contract AbiDecode {
    <span class="hljs-keyword">struct</span> <span class="hljs-title class_">MyStruct</span> {
        string name;
        uint256[<span class="hljs-number">2</span>] nums;
    }

    function <span class="hljs-title function_ invoke__">encode</span>(
        uint256 x,
        address addr,
        uint256[] calldata arr,
        MyStruct calldata myStruct
    ) external pure <span class="hljs-title function_ invoke__">returns</span> (bytes memory) {
        <span class="hljs-keyword">return</span> abi.<span class="hljs-title function_ invoke__">encode</span>(x, addr, arr, myStruct);
    }

    function <span class="hljs-title function_ invoke__">decode</span>(bytes calldata data)
        external
        pure
        <span class="hljs-title function_ invoke__">returns</span> (
            uint256 x,
            address addr,
            uint256[] memory arr,
            MyStruct memory myStruct
        )
    {
        <span class="hljs-comment">// (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...</span>
        (x, addr, arr, myStruct) =
            abi.<span class="hljs-title function_ invoke__">decode</span>(data, (uint256, address, uint256[], MyStruct));
    }
}
</code></pre>`

export default html
