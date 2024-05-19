import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"
// import { tempFileName } from "../pages/cheatsheet/solidity/index.html"

interface Path {
  title: string
  path: string
}

interface Code {
  fileName: string
  code: string
}

interface Props {
  title: string
  description: string
  version: "0.59.0"
  html: string
  prev: Path | null
  next: Path | null
  codes: Code[]
  tempFileName: string
  tempPlaygroundLink: string
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  html,
  prev,
  next,
  codes,
  tempFileName,
  tempPlaygroundLink,
}) => {
  return (
    <div className={styles.component}>
      <SEO
        title={`${title} | Sway by Example | ${version}`}
        description={description}
      />
      <div className={styles.content}>
        <h2>{title}</h2>

        <Html html={html} />

        <div className={styles.prevNext}>
          {prev && (
            <a href={prev.path}>
              {`< `}
              {prev.title}
            </a>
          )}
          {next && (
            <a href={next.path}>
              {next.title}
              {` >`}
            </a>
          )}
        </div>

        <h3>Try on Sway Playground</h3>
        <ul>
          {/* {codes.map(({ fileName, code }, i) => (
            <li key={i}>
              <a
                href={`https://remix.ethereum.org/?#code=${code}`}
                target="_blank"
                rel="noreferrer"
              >
                {fileName}
              </a>
            </li>
          ))} */}
          <li>
            <a href={tempPlaygroundLink} target="_blank" rel="noreferrer">
              {tempFileName}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Example
