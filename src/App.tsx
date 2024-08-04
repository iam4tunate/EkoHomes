import { Route, Routes } from "react-router-dom";
import Home from "./_root/pages/Home";
import RootLayout from "./_root/RootLayout";
import About from "./_root/pages/About";
import Explore from "./_root/pages/Explore";
import Services from "./_root/pages/Services";
import Login from "./_auth/forms/Login";
import Register from "./_auth/forms/Register";
import Create from "./_auth/forms/Create";
import { Toaster } from "./components/ui/toaster";

export default function App() {
  return (
    <div className="">
      <Routes>
        <Route element={<RootLayout />}>
          {/* private routes  */}

          {/* public routes  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>

      <Toaster />
    </div>
  );
}
