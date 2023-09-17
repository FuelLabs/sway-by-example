// metadata
export const version = "0.37"
export const title = "Enums"
export const description = "Enums in Sway"
export const codes = [
  {
    fileName: "enums",
    code: "Y29udHJhY3Q7CgovLyBFbnVtcwovLyAtIEJhc2ljcwovLyAtIEVudW1zIG9mIHN0cnVjdHMKLy8gLSBFbnVtIG9mIGVudW1zCgplbnVtIENvbG9yIHsKICAgIFJlZDogKCksCiAgICBCbHVlOiAoKSwKICAgIEdyZWVuOiAoKSwKfQoKLy8gRW51bXMgb2Ygc3RydWN0cwpzdHJ1Y3QgUG9pbnQgewogICAgeDogdTY0LAogICAgeTogdTY0LAp9CgplbnVtIFNoYXBlIHsKICAgIENpcmNsZTogKFBvaW50LCB1NjQpLAogICAgVHJpYW5nbGU6IFtQb2ludDsgM10sCn0KCi8vIEVudW0gb2YgZW51bXMKZW51bSBFcnJvciB7CiAgICBBdXRoOiBBdXRoRXJyb3IsCiAgICBUcmFuc2ZlcjogVHJhbnNmZXJFcnJvciwKfQoKZW51bSBBdXRoRXJyb3IgewogICAgTm90T3duZXI6ICgpLAogICAgTm90QXBwcm92ZWQ6ICgpLAp9CgplbnVtIFRyYW5zZmVyRXJyb3IgewogICAgVHJhbnNmZXJUb1plcm9BZGRyZXNzOiAoKSwKICAgIEluc3VmZmljaWVudEJhbGFuY2U6ICgpLAp9CgphYmkgTXlDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBFcnJvcjsKfQoKaW1wbCBNeUNvbnRyYWN0IGZvciBDb250cmFjdCB7CiAgICBmbiB0ZXN0X2Z1bmMoKSAtPiBFcnJvciB7CiAgICAgICAgbGV0IGNvbG9yID0gQ29sb3I6OkJsdWU7CgogICAgICAgIGxldCBjaXJjbGUgPSBTaGFwZTo6Q2lyY2xlKChQb2ludCB7IHg6IDAsIHk6IDAgfSwgMSkpOwogICAgICAgIGxldCB0cmlhbmdsZSA9IFNoYXBlOjpUcmlhbmdsZShbCiAgICAgICAgICAgIFBvaW50IHsgeDogMCwgeTogMCB9LAogICAgICAgICAgICBQb2ludCB7IHg6IDEsIHk6IDEgfSwKICAgICAgICAgICAgUG9pbnQgeyB4OiAyLCB5OiAwIH0sCiAgICAgICAgXSk7CgogICAgICAgIGxldCBlcnJvciA9IEVycm9yOjpBdXRoKEF1dGhFcnJvcjo6Tm90T3duZXIpOwoKICAgICAgICBlcnJvcgogICAgfQp9Cg==",
  },
]

const html = `<p>Examples of enums in Sway</p>
<pre><code class="language-rust">contract;

<span class="hljs-comment">// Enums</span>
<span class="hljs-comment">// - Basics</span>
<span class="hljs-comment">// - Enums of structs</span>
<span class="hljs-comment">// - Enum of enums</span>

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">Color</span> {
    Red: (),
    Blue: (),
    Green: (),
}

<span class="hljs-comment">// Enums of structs</span>
<span class="hljs-keyword">struct</span> <span class="hljs-title class_">Point</span> {
    x: <span class="hljs-type">u64</span>,
    y: <span class="hljs-type">u64</span>,
}

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">Shape</span> {
    Circle: (Point, <span class="hljs-type">u64</span>),
    Triangle: [Point; <span class="hljs-number">3</span>],
}

<span class="hljs-comment">// Enum of enums</span>
<span class="hljs-keyword">enum</span> <span class="hljs-title class_">Error</span> {
    Auth: AuthError,
    Transfer: TransferError,
}

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">AuthError</span> {
    NotOwner: (),
    NotApproved: (),
}

<span class="hljs-keyword">enum</span> <span class="hljs-title class_">TransferError</span> {
    TransferToZeroAddress: (),
    InsufficientBalance: (),
}

abi MyContract {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Error;
}

<span class="hljs-keyword">impl</span> <span class="hljs-title class_">MyContract</span> <span class="hljs-keyword">for</span> <span class="hljs-title class_">Contract</span> {
    <span class="hljs-keyword">fn</span> <span class="hljs-title function_">test_func</span>() <span class="hljs-punctuation">-&gt;</span> Error {
        <span class="hljs-keyword">let</span> <span class="hljs-variable">color</span> = Color::Blue;

        <span class="hljs-keyword">let</span> <span class="hljs-variable">circle</span> = Shape::<span class="hljs-title function_ invoke__">Circle</span>((Point { x: <span class="hljs-number">0</span>, y: <span class="hljs-number">0</span> }, <span class="hljs-number">1</span>));
        <span class="hljs-keyword">let</span> <span class="hljs-variable">triangle</span> = Shape::<span class="hljs-title function_ invoke__">Triangle</span>([
            Point { x: <span class="hljs-number">0</span>, y: <span class="hljs-number">0</span> },
            Point { x: <span class="hljs-number">1</span>, y: <span class="hljs-number">1</span> },
            Point { x: <span class="hljs-number">2</span>, y: <span class="hljs-number">0</span> },
        ]);

        <span class="hljs-keyword">let</span> <span class="hljs-variable">error</span> = Error::<span class="hljs-title function_ invoke__">Auth</span>(AuthError::NotOwner);

        error
    }
}
</code></pre>
`

export default html
