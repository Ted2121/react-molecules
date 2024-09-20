import { Box, CssBaseline } from "@mui/material"
import TestPage from "./pages/test-page"
import ElevatedAppBar from "./navigation-bars/appbar/elevated-appbar/ts/elevated-appbar"

function App() {
  return (
    <>
      <CssBaseline />
      <ElevatedAppBar pinned={pinnedBox} />
      <TestPage />
    </>
  )
}

const pinnedBox = (<Box
  sx={{
    width: '100%',
    padding: '16px',
    backgroundColor: 'red',
  }}
>
</Box>)

export default App
