import { Outlet, Navigate } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#C1A5A9]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Add a new component for root path redirection
export function RootRedirect() {
  return <Navigate to="/home" replace />;
}
