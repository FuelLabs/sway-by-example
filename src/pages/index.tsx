import React from "react"
import SEO from "../components/SEO"
import styles from "./index.module.css"
import youTube from "../components/youtube.png"

const UPDATES = [
  "2022/11/15 - GitHub PR by thurendous",
  "2022/11/15 - GitHub PR by grbickon",
  "2022/11/15 - Unchecked math",
]

interface Route {
  path: string
  title: string
}

const SOL_ROUTES: Route[] = [
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
    path: "initialization",
    title: "Initialization",
  },
  {
    path: "ownership",
    title: "Ownership",
  },
  // {
  //   path: "interface",
  //   title: "Interface",
  // },
]

const APP_ROUTES: Route[] = [
]

const HACK_ROUTES: Route[] = [
]

const TEST_ROUTES: Route[] = [
]

const DEFI_ROUTES = [
  {
    path: "staking-contract",
    title: "Staking Contracts",
  }
]

export const ROUTES_BY_CATEGORY = [
  {
    title: "Basics",
    routes: SOL_ROUTES.map((route) => ({
      ...route,
      path: `/${route.path}`,
    })),
  },
  // {
  //   title: "Applications",
  //   routes: APP_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/app/${route.path}`,
  //   })),
  // },
  // {
  //   title: "Hacks",
  //   routes: HACK_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/hacks/${route.path}`,
  //   })),
  // },
  // {
  //   title: "Tests",
  //   routes: TEST_ROUTES.map((route) => ({
  //     ...route,
  //     path: `/tests/${route.path}`,
  //   })),
  // },
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
        title="Sway by Example | v0.31.3"
        description="Learn smart contract programming using Solidity"
      />
      <h1 className={styles.header}>
        <a href="/">Sway by Example 🏖️</a>
      </h1>
      <div className={styles.subHeader}>v0.31.3</div>
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
          with simple examples
        </p>

        {/* YOUTUBE STUFF */}
        {/* <div className={styles.youTube}>
          <img src={youTube} alt="logo" className={styles.youTubeLogo} />
          <a
            href="https://www.youtube.com/channel/UCJWh7F3AFyQ_x01VKzr9eyA"
            target="__blank"
          >
            Most code are explained here
          </a>
        </div> */}

        {/* UPDATES */}
        {/* <div className={styles.updates}>
          {UPDATES.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div> */}

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
