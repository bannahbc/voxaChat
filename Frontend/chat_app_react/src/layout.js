import { Outlet, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function PrivateLayout() {
  const token = localStorage.getItem("access"); // or from context/state

  if (!token) {
    // If no token, redirect to login
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <main className="flex flex-col h-screen bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">
        <div className="sticky top-0 z-50 shadow-md h-16">
          <Navbar />
        </div>
        <Outlet /> {/* renders child routes */}
      </main>
    </div>
  );
}

export default PrivateLayout;
