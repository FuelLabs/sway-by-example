import component_abi_decode from "./pages/abi-decode"
import component_abi_encode from "./pages/abi-encode"
import component_account_types from "./pages/account-types"
import component_blockchain_types from "./pages/blockchain-types"
import component_cheatsheet from "./pages/cheatsheet"
import component_compound_types from "./pages/compound-types"
import component_configurable_constants from "./pages/configurable-constants"
import component_constants from "./pages/constants"
import component_contract_calls from "./pages/contract-calls"
import component_control_flow_if from "./pages/control-flow-if"
import component_control_flow_match from "./pages/control-flow-match"
import component_control_flow_while_loop from "./pages/control-flow-while-loop"
import component_defi_flashloans from "./pages/defi/flashloans"
import component_defi_staking_contract from "./pages/defi/staking-contract"
import component_enums from "./pages/enums"
import component_error_handling from "./pages/error-handling"
import component_events from "./pages/events"
import component_functions from "./pages/functions"
import component_hello_sway from "./pages/hello-sway"
import component_imports from "./pages/imports"
import component_initialization from "./pages/initialization"
import component_interface from "./pages/interface"
import component_logging from "./pages/logging"
import component_options from "./pages/options"
import component_ownership from "./pages/ownership"
import component_primitive_types from "./pages/primitive-types"
import component_results from "./pages/results"
import component_storage_map from "./pages/storage-map"
import component_structs from "./pages/structs"
import component_tokens from "./pages/tokens"
import component_tuples from "./pages/tuples"
import component_variables from "./pages/variables"
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
        component: component_abi_decode
    },
    {
        path: "/abi-encode",
        component: component_abi_encode
    },
    {
        path: "/account-types",
        component: component_account_types
    },
    {
        path: "/blockchain-types",
        component: component_blockchain_types
    },
    {
        path: "/cheatsheet",
        component: component_cheatsheet
    },
    {
        path: "/compound-types",
        component: component_compound_types
    },
    {
        path: "/configurable-constants",
        component: component_configurable_constants
    },
    {
        path: "/constants",
        component: component_constants
    },
    {
        path: "/contract-calls",
        component: component_contract_calls
    },
    {
        path: "/control-flow-if",
        component: component_control_flow_if
    },
    {
        path: "/control-flow-match",
        component: component_control_flow_match
    },
    {
        path: "/control-flow-while-loop",
        component: component_control_flow_while_loop
    },
    {
        path: "/defi/flashloans",
        component: component_defi_flashloans
    },
    {
        path: "/defi/staking-contract",
        component: component_defi_staking_contract
    },
    {
        path: "/enums",
        component: component_enums
    },
    {
        path: "/error-handling",
        component: component_error_handling
    },
    {
        path: "/events",
        component: component_events
    },
    {
        path: "/functions",
        component: component_functions
    },
    {
        path: "/hello-sway",
        component: component_hello_sway
    },
    {
        path: "/imports",
        component: component_imports
    },
    {
        path: "/initialization",
        component: component_initialization
    },
    {
        path: "/interface",
        component: component_interface
    },
    {
        path: "/logging",
        component: component_logging
    },
    {
        path: "/options",
        component: component_options
    },
    {
        path: "/ownership",
        component: component_ownership
    },
    {
        path: "/primitive-types",
        component: component_primitive_types
    },
    {
        path: "/results",
        component: component_results
    },
    {
        path: "/storage-map",
        component: component_storage_map
    },
    {
        path: "/structs",
        component: component_structs
    },
    {
        path: "/tokens",
        component: component_tokens
    },
    {
        path: "/tuples",
        component: component_tuples
    },
    {
        path: "/variables",
        component: component_variables
    },
    {
        path: "",
        component: component_
    },
]

export default routes