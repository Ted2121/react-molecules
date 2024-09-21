import "./examples/appbar/appbar-styling-with-class.example.css";
import { Box, CssBaseline } from "@mui/material";
import TestPage from "./examples/appbar/text-page.example";
import ElevatedAppBar from "./navigation-bars/appbar/elevated-appbar/elevated-appbar.component";
import PinnedBoxExample from "./examples/appbar/pinned-box.example";
import { getElevatedAppBarStyles } from "./examples/appbar/appbar-stylesheet.example";
import { Route, Routes } from "react-router-dom";
import TestContactsPage from "./examples/button/test-contacts-page.example";
import RouteLayout from "./routing/route-layout";

function App() {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar pinned={<PinnedBoxExample />} styles={getElevatedAppBarStyles()} />
      <Routes>
        <Route path='/' element={<RouteLayout />}>
          {/* public routes */}
          <Route path='/' element={<TestPage />} />
          <Route path='test-contacts' element={<TestContactsPage />} />
          {/* private routes */}
          {/* <Route element={<RequireAuth />}>
          </Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
