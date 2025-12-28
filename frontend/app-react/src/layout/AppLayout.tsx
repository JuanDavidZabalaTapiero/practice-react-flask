// CHANGE CONTENT
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="vh-100 d-flex flex-column">
      {/* HEADER */}
      <Header />

      {/* SIDEBAR + MAIN */}
      <div className="flex-grow-1 w-100 d-flex">
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="flex-grow-1 p-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
