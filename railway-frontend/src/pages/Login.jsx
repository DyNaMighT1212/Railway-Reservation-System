import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginUser = (e) => {

        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        API.post("/users/login", user)
            .then(response => {

                if (response.data) {

                    // Save complete user information
                    localStorage.setItem(
                        "user",
                        JSON.stringify(response.data)
                    );

                    setMessage("Login Successful!");

                    setTimeout(() => {

                        if (response.data.role === "ADMIN") {

                            navigate("/admin");

                        } else {

                            navigate("/trains");

                        }

                    }, 500);

                } else {

                    setMessage("Invalid Email or Password");

                }

            })
            .catch(error => {

                console.log(error);
                setMessage("Invalid Email or Password");

            });
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                🔐 Login
                            </h2>

                            <form onSubmit={loginUser}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter email"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        placeholder="Enter password"
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </form>

                            {message && (

                                <div className="alert alert-info mt-3">
                                    {message}
                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Login;