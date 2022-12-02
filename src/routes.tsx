import component_abi_decode from "./pages/abi-decode"
import component_abi_encode from "./pages/abi-encode"
import component_error_handling from "./pages/error-handling"
import component_imports from "./pages/imports"
import component_hello_sway from "./pages/hello-sway"
import component_ownership from "./pages/ownership"
import component_interface from "./pages/interface"
import component_initialization from "./pages/initialization"
import component_defi_staking_contract from "./pages/defi/staking-contract"
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
    path: "/error-handling",
    component: component_error_handling,
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
    path: "/interface",
    component: component_interface,
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
