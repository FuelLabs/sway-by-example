import React from "react"
import SEO from "./SEO"
import Html from "./Html"
import styles from "./Example.module.css"

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
  version: "0.37"
  html: string
  prev: Path | null
  next: Path | null
  codes: Code[]
}

const Example: React.FC<Props> = ({
  title,
  version,
  description,
  html,
  prev,
  next,
  codes,
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
      </div>
    </div>
  )
}

export default Example
