import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    const registerUser = (e) => {

        e.preventDefault();

        if (
            user.name === "" ||
            user.email === "" ||
            user.password === ""
        ) {
            setMessage("Please fill all required fields");
            return;
        }

        API.post("/users/add", user)
            .then(response => {

                console.log(response.data);

                setMessage("Registration Successful!");

                setTimeout(() => {
                    navigate("/login");
                }, 1000);

            })
            .catch(error => {

                console.log(error);

                setMessage("Registration Failed");

            });
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                📝 Register
                            </h2>

                            <form onSubmit={registerUser}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={user.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Phone
                                    </label>

                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control"
                                        value={user.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />

                                </div>


                                <div className="mb-3">

                                    <label className="form-label">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={user.password}
                                        onChange={handleChange}
                                        placeholder="Enter password"
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Register
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

export default Register;