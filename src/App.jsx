import { Favorite, RoundaboutLeft } from "@mui/icons-material";
import "./App.css";
import Home from "./pages/Home";
import Favorites from "./pages/favorite";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
