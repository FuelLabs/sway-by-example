// metadata
export const version = "0.59.0"
export const title = "Dutch Auction"
export const description = "An example of Dutch auction in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = [
    "app",
    "application",
    "dutch",
    "auction",
    "auctions",
]

export const codes = [
]

const html = `<p>Dutch auction for NFT.</p>
<h3>Auction</h3>
<ol>
<li>Seller of NFT deploys this contract setting a starting price for the NFT.</li>
<li>Auction lasts for 7 days.</li>
<li>Price of NFT decreases over time.</li>
<li>Participants can buy by depositing ETH greater than the current price computed by the smart contract.</li>
<li>Auction ends when a buyer buys the NFT.</li>
</ol>
<pre><code class="language-rust">
</code></pre>`

export default html
