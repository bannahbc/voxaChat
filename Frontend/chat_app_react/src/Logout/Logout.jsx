import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear tokens
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    // Optionally clear other user data
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/", { replace: true });
  }, [navigate]);

  return null; // No UI needed, just performs logout
}

export default Logout;
