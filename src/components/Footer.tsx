import React from "react"
import { CRYPTO_JOBS_LIST_URL } from "../config"
import styles from "./Footer.module.css"
import sce from "./sce.png"
import youTube from "./youtube.png"
import telegram from "./telegram.png"
import discord from "./discord.png"

function Footer() {
  return (
    <div className={styles.component}>
      <div className={styles.row}>
        {/* <img src={sce} alt="smart contract engineer" className={styles.sce} /> */}
        Call Delegation 💚 Fuel Labs
        {/* <a href="https://twitter.com/calldelegation" target="__blank">
          Call Delegation
        </a> */}
      </div>
      <div className={styles.social}>
        <div className={styles.row}>
          {/* <img src={discord} alt="discord" className={styles.discord} /> */}
          <a href="https://github.com/FuelLabs/" target="__blank">
            Github
          </a>
        </div>
        {/* <div className={styles.row}>
          <img src={telegram} alt="telegram" className={styles.telegram} />
          <div className={styles.bar}>|</div>
          <a href="https://t.me/smartcontractprogrammer" target="__blank">
            Telegram
          </a>
        </div> */}
        <div className={styles.row}>
          {/* <img src={youTube} alt="youtube" className={styles.youTube} /> */}
          <div className={styles.bar}>|</div>
          <a href="https://docs.fuel.network/" target="__blank">
            Docs
          </a>
        </div>
        <div className={styles.row}>
          {/* <img src={youTube} alt="youtube" className={styles.youTube} /> */}
          <div className={styles.bar}>|</div>
          <a href="https://forum.fuel.network/" target="__blank">
            Forum
          </a>
        </div>
        <div className={styles.row}>
          {/* <img src={youTube} alt="youtube" className={styles.youTube} /> */}
          <div className={styles.bar}>|</div>
          <a href="https://twitter.com/fuel_network" target="__blank">
            Twitter
          </a>
        </div>
        <div className={styles.row}>
          {/* <img src={youTube} alt="youtube" className={styles.youTube} /> */}
          <div className={styles.bar}>|</div>
          <a href="https://discord.gg/fuelnetwork" target="__blank">
            Discord
          </a>
        </div>
      </div>
      {/* 
      <div className={styles.row}>
        Donate
        <span role="img" aria-label="smiley">
          🙂
        </span>
      </div>
      <div className={styles.row}>
        <a href={`https://etherscan.io/address/${ADDRESS}`} target="__blank">
          {ADDRESS.slice(0, 6)}...{ADDRESS.slice(-6, -1)}
        </a>
      </div>
      <div className={styles.row}>
        your ETH will directly go to
        <a href="https://khanacademy.org" target="__blank" className={styles.khan}>
          Khan Academy
        </a>
      </div>
      <div className={styles.row}>
        <a href="mailto:contact@solidity-by-example.org">
          contact@solidity-by-example.org
        </a>
      </div>
      <div className={styles.row}>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io"
          target="__blank"
        >
          source
        </a>
        <div className={styles.bar}>|</div>
        <a
          href="https://github.com/solidity-by-example/solidity-by-example.github.io/blob/gh-pages/LICENSE"
          target="__blank"
        >
          license
        </a>
      </div> */}
    </div>
  )
}

export default Footer
