import component_abi_decode from "./pages/abi-decode"
import component_abi_encode from "./pages/abi-encode"
import component_cheatsheet from "./pages/cheatsheet"
import component_error_handling from "./pages/error-handling"
import component_account_types from "./pages/account-types"
import component_imports from "./pages/imports"
import component_hello_sway from "./pages/hello-sway"
import component_ownership from "./pages/ownership"
import component_events from "./pages/events"
import component_tokens from "./pages/tokens"
import component_contract_calls from "./pages/contract-calls"
import component_interface from "./pages/interface"
import component_initialization from "./pages/initialization"
import component_defi_staking_contract from "./pages/defi/staking-contract"
import component_defi_flashloans from "./pages/defi/flashloans"
import component_ from "./pages"

interface Path {
  title: string
  path: string
}

interface Paths {
  prev: Path | null
  next: Path | null
}

interface Route {
  path: string
  component: React.FC<Paths>
  breakingChanges?: boolean
}

const routes: Route[] = [
  {
    path: "/abi-decode",
    component: component_abi_decode,
  },
  {
    path: "/abi-encode",
    component: component_abi_encode,
  },
  {
    path: "/cheatsheet",
    component: component_cheatsheet,
  },
  {
    path: "/error-handling",
    component: component_error_handling,
  },
  {
    path: "/account-types",
    component: component_account_types,
  },
  {
    path: "/imports",
    component: component_imports,
  },
  {
    path: "/hello-sway",
    component: component_hello_sway,
  },
  {
    path: "/initialization",
    component: component_initialization,
  },
  {
    path: "/ownership",
    component: component_ownership,
  },
  {
    path: "/events",
    component: component_events,
  },
  {
    path: "/tokens",
    component: component_tokens,
  },
  {
    path: "/contract-calls",
    component: component_contract_calls,
  },
  {
    path: "/interface",
    component: component_interface,
  },
  {
    path: "/defi/flashloans",
    component: component_defi_flashloans,
  },
  {
    path: "/defi/staking-contract",
    component: component_defi_staking_contract,
  },
  {
    path: "",
    component: component_,
  },
]

export default routes
