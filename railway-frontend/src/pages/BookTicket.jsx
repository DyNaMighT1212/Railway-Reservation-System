import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function BookTicket() {

    const { trainNo } = useParams();
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [seatsBooked, setSeatsBooked] = useState(1);
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const bookTicket = () => {

        if (!user) {
            setMessage("Please login before booking a ticket");
            setSuccess(false);
            return;
        }

        if (seatsBooked <= 0) {
            setMessage("Please enter a valid number of seats");
            setSuccess(false);
            return;
        }

        const booking = {
            userName: user.name,
            trainNo: trainNo,
            seatsBooked: Number(seatsBooked)
        };

        API.post("/bookings/book", booking)
            .then(response => {

                setMessage(response.data);
                setSuccess(true);

            })
            .catch(error => {

                console.log(error);

                setMessage("Unable to book ticket");
                setSuccess(false);

            });
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow">

                        <div className="card-body p-4">

                            <h2 className="text-center mb-4">
                                🎫 Book Ticket
                            </h2>

                            {!user && (
                                <div className="alert alert-warning">
                                    Please login before booking a ticket.
                                </div>
                            )}

                            <div className="mb-3">

                                <label className="form-label">
                                    Passenger
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={user ? user.name : ""}
                                    readOnly
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Train Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={trainNo}
                                    readOnly
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Number of Seats
                                </label>

                                <input
                                    type="number"
                                    min="1"
                                    className="form-control"
                                    value={seatsBooked}
                                    onChange={(e) =>
                                        setSeatsBooked(e.target.value)
                                    }
                                />

                            </div>

                            <button
                                className="btn btn-success w-100"
                                onClick={bookTicket}
                                disabled={!user}
                            >
                                Book Ticket
                            </button>

                            {message && (
                                <div
                                    className={`alert mt-3 ${
                                        success
                                            ? "alert-success"
                                            : "alert-danger"
                                    }`}
                                >
                                    {message}
                                </div>
                            )}

                            {success && (
                                <button
                                    className="btn btn-primary w-100 mt-2"
                                    onClick={() =>
                                        navigate("/my-bookings")
                                    }
                                >
                                    View My Bookings
                                </button>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BookTicket;