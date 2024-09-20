import { Box, CssBaseline } from "@mui/material"
import TestPage from "./examples/appbar/example-page"
import ElevatedAppBar from "./navigation-bars/appbar/elevated-appbar/ts/elevated-appbar"
import PinnedBoxExample from "./navigation-bars/appbar/elevated-appbar/ts/pinned-box-example"
import { elevatedAppBarStyles } from "./examples/appbar/appbar-stylesheet-example"
import '../src/examples/appbar/example-appbar-styling-with-class.css'

function App() {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar pinned={<PinnedBoxExample />} styles={elevatedAppBarStyles()} />
      <TestPage />
    </>
  )
}


export default App
