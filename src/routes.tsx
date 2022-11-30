import component_abi_decode from "./pages/abi-decode"
import component_abi_encode from "./pages/abi-encode"
import component_constants from "./pages/constants"
import component_first_app from "./pages/first-app"
import component_hello_world from "./pages/hello-world"
import component_ownership from "./pages/ownership"
import component_interface from "./pages/interface"
import component_initialization from "./pages/initialization"
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
    path: "/constants",
    component: component_constants,
  },
  {
    path: "/first-app",
    component: component_first_app,
  },
  {
    path: "/hello-world",
    component: component_hello_world,
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
    path: "",
    component: component_,
  },
]

export default routes
