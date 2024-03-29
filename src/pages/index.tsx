import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"

interface Route {
  path: string
  title: string
}

const SWAY_ROUTES: Route[] = [
  {
    path: "hello-sway",
    title: "Hello Sway",
  },
  {
    path: "imports",
    title: "Imports",
  },
  {
    path: "error-handling",
    title: "Error Handling",
  },
  {
    path: "account-types",
    title: "Account Types",
  },
  {
    path: "initialization",
    title: "Initialization",
  },
  {
    path: "ownership",
    title: "Ownership",
  },
  {
    path: "events",
    title: "Events",
  },
  {
    path: "tokens",
    title: "Tokens",
  },
  {
    path: "contract-calls",
    title: "Contract Calls",
  },
  {
    path: "variables",
    title: "Variables",
  },
  {
    path: "primitive-types",
    title: "Primitive Types",
  },
  {
    path: "compound-types",
    title: "Compound Types",
  },
  {
    path: "blockchain-types",
    title: "Blockchain Types",
  },
  {
    path: "functions",
    title: "Functions",
  },
  {
    path: "structs",
    title: "Structs",
  },
  {
    path: "tuples",
    title: "Tuples",
  },
  {
    path: "enums",
    title: "Enums",
  },
  {
    path: "constants",
    title: "Constants",
  },
  {
    path: "configurable-constants",
    title: "Configurable Constants",
  },
  {
    path: "options",
    title: "Options",
  },
  {
    path: "results",
    title: "Results",
  },
  {
    path: "control-flow-if",
    title: "Control Flow - If",
  },
  {
    path: "control-flow-match",
    title: "Control Flow - Match",
  },
  {
    path: "control-flow-while-loop",
    title: "Control Flow - While Loop",
  },
  {
    path: "logging",
    title: "Logging",
  },
  {
    path: "storage-map",
    title: "Storage Map",
  },
  {
    path: "vector",
    title: "Vector",
  },
  {
    path: "base-asset",
    title: "Base Asset",
  },
]

const APP_ROUTES: Route[] = [
  {
    path: "ownership",
    title: "Ownership",
  },
  {
    path: "wallet",
    title: "Wallet",
  },
]

const HACK_ROUTES: Route[] = []

const CHEATSHEET: Route[] = [
  {
    path: "cheatsheet",
    title: "Solidity ★",
  },
]

const DEFI_ROUTES = [
  {
    path: "flashloans",
    title: "Flashloans",
  },
  {
    path: "staking-contract",
    title: "Staking",
  },
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "Cheatsheet",
    routes: CHEATSHEET.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Basics",
    routes: SWAY_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  {
    title: "Apps",
    routes: APP_ROUTES.map((route) => ({
      ...route,
      path: `/apps/${route.path}`,
    })),
  },
  {
    title: "DeFi",
    routes: DEFI_ROUTES.map((route) => ({
      ...route,
      path: `/defi/${route.path}`,
    })),
  },
]

const ROUTES = ROUTES_BY_CATEGORY.map(({ routes }) => routes).flat()
const ROUTE_INDEX_BY_PATH = ROUTES.reduce((map, route: Route, i) => {
  // @ts-ignore
  map[route.path] = i
  return map
}, {})

export function getPrevNextPaths(path: string): {
  prev: Route | null
  next: Route | null
} {
  // @ts-ignore
  const index = ROUTE_INDEX_BY_PATH[path]
  if (index >= 0) {
    const prev = ROUTES[index - 1] || null
    const next = ROUTES[index + 1] || null
    return { prev, next }
  }
  return {
    prev: null,
    next: null,
  }
}

export default function HomePage() {
  return (
    <div className={styles.component}>
      <SEO
        title="Sway by Example | v0.35.4"
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Sway by Example 🏖️</a>
      </h1>
      <div className={styles.subHeader}>v0.35.4</div>
      <div className={styles.main}>
        <p>
          an introduction to{" "}
          <a
            href="https://fuellabs.github.io/sway/latest/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sway
          </a>{" "}
          with simple examples | New! ★
        </p>

        {ROUTES_BY_CATEGORY.map(({ routes, title }, i) => (
          <div key={i}>
            {title && <h3 className={styles.category}>{title}</h3>}

            <ul className={styles.list}>
              {routes.map(({ path, title }) => (
                <li className={styles.listItem} key={path}>
                  <a href={path}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
