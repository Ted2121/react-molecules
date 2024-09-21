import { Box, CssBaseline } from "@mui/material";
import TestPage from "./examples/appbar/text-page.example";
import ElevatedAppBar from "./navigation-bars/appbar/elevated-appbar/elevated-appbar.component";
import PinnedBoxExample from "./examples/appbar/pinned-box.example";
import { getElevatedAppBarStyles } from "./examples/appbar/appbar-stylesheet.example";
import "./examples/appbar/appbar-styling-with-class.example.css";
import Buttons from "./examples/button/buttons.example";

function App() {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar pinned={<PinnedBoxExample />} styles={getElevatedAppBarStyles()} />
      <Buttons ></Buttons>
      <TestPage />
    </>
  )
}


export default App
