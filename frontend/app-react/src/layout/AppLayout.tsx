// CHANGE CONTENT
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* HEADER */}
      <Header />

      {/* SIDEBAR + CONTENT */}
      <div className="d-flex flex-grow-1">
        <Sidebar />

        <main className="flex-grow-1 p-4 bg-light">
          {/* VARIABLE CONTENT */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
