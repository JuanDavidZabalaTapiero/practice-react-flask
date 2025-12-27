// RUTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUT
import AppLayout from "./layout/AppLayout";

// PAGES
import Home from "./pages/Home";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
