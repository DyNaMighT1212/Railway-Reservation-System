import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {

    const user = JSON.parse(localStorage.getItem("user"));

    // Not logged in
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Role doesn't match
    if (role && user.role !== role) {
        return <Navigate to="/trains" replace />;
    }

    return children;
}

export default ProtectedRoute;