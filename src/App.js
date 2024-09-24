import { Box } from "@mui/material";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home/Home"));
const Weeding = lazy(() => import("./components/pages/Weeding/Weeding"));

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weeding" element={<Weeding />} />
      </Routes>
    </Box>
  );
}

export default App;
