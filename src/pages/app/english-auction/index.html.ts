// metadata
export const version = "0.59.0"
export const title = "English Auction"
export const description = "An example of English auction in Solidity"

export const tempFileName = ""
export const tempPlaygroundLink = ""

export const keywords = ["app", "application", "english", "auction", "auctions"]

export const codes = []

const html = `<p>English auction for NFT.</p>
<h3>Auction</h3>
<ol>
<li>Seller of NFT deploys this contract.</li>
<li>Auction lasts for 7 days.</li>
<li>Participants can bid by depositing ETH greater than the current highest bidder.</li>
<li>All bidders can withdraw their bid if it is not the current highest bid.</li>
</ol>
<h3>After the auction</h3>
<ol>
<li>Highest bidder becomes the new owner of NFT.</li>
<li>The seller receives the highest bid of ETH.</li>
</ol>
<pre><code class="language-rust">
</code></pre>`

export default html
