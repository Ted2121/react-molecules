import { Box, CssBaseline } from "@mui/material"
import TestPage from "./pages/test-page"
import ElevatedAppBar from "./navigation-bars/appbar/elevated-appbar/ts/elevated-appbar"
import PinnedBoxExample from "./navigation-bars/appbar/elevated-appbar/ts/pinned-box-example"
import { elevatedAppBarStyles } from "./navigation-bars/appbar/elevated-appbar/ts/styles/appbar-stylesheet-example"

function App() {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar pinned={<PinnedBoxExample/>} styles={elevatedAppBarStyles()}/>
      <TestPage />
    </>
  )
}


export default App
