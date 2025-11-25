import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return children;

  // If admin → send to admin panel
  if (user.role === "admin") return <Navigate to="/adminPanel" />;

  // If normal user → send to home
  return <Navigate to="/home" />;
};

export default PublicRoute;
