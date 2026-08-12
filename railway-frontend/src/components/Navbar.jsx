import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();
    const location = useLocation();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");

        navigate("/login");
    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/"
                >
                    🚆 Railway Reservation
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/trains"
                            >
                                Trains
                            </Link>
                        </li>

                        {user && user.role === "USER" && (

                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/my-bookings"
                                >
                                    My Bookings
                                </Link>

                            </li>

                        )}

                        {user && user.role === "ADMIN" && (

                            <li className="nav-item">

                                <Link
                                    className="nav-link"
                                    to="/admin"
                                >
                                    👨‍💼 Admin
                                </Link>

                            </li>

                        )}

                        {!user && (

                            <>
                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/login"
                                    >
                                        Login
                                    </Link>

                                </li>

                                <li className="nav-item">

                                    <Link
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </Link>

                                </li>
                            </>

                        )}

                        {user && (

                            <>
                                <li className="nav-item">

                                    <span className="nav-link">
                                        👋 {user.name}
                                    </span>

                                </li>

                                <li className="nav-item">

                                    <button
                                        className="btn btn-danger btn-sm mt-1 ms-2"
                                        onClick={logout}
                                    >
                                        Logout
                                    </button>

                                </li>
                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;