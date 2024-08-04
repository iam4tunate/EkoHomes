import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import About from "./_root/pages/About";
import Explore from "./_root/pages/Explore";
import Services from "./_root/pages/Services";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
}
