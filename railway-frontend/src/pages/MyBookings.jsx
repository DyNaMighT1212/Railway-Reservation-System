import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {

    const user = JSON.parse(localStorage.getItem("user"));

    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState("");

    const getBookings = () => {

        if (!user) {
            setMessage("Please login to view your bookings");
            return;
        }

        API.get(`/bookings/user/${user.name}`)
            .then(response => {

                setBookings(response.data);

                if (response.data.length === 0) {
                    setMessage("You don't have any bookings");
                } else {
                    setMessage("");
                }

            })
            .catch(error => {

                console.log(error);
                setMessage("Unable to load bookings");

            });
    };

    useEffect(() => {
        getBookings();
    }, []);

    const cancelBooking = (id) => {

        const confirmCancel = window.confirm(
            "Are you sure you want to cancel this booking?"
        );

        if (!confirmCancel) {
            return;
        }

        API.delete(`/bookings/cancel/${id}`)
            .then(response => {

                setMessage(response.data);

                getBookings();

            })
            .catch(error => {

                console.log(error);
                setMessage("Unable to cancel booking");

            });
    };

    if (!user) {

        return (
            <div className="container mt-5">

                <div className="alert alert-warning text-center">
                    Please login to view your bookings.
                </div>

            </div>
        );
    }

    return (

        <div className="container mt-5">

            <h2 className="text-center mb-2">
                📖 My Bookings
            </h2>

            <p className="text-center text-muted mb-4">
                Welcome, {user.name}
            </p>

            {message && (
                <div className="alert alert-info">
                    {message}
                </div>
            )}

            <div className="row">

                {bookings.map(booking => (

                    <div
                        className="col-md-6 mb-4"
                        key={booking.id}
                    >

                        <div className="card shadow-sm h-100">

                            <div className="card-body">

                                <h5 className="card-title">
                                    🎫 {booking.trainName}
                                </h5>

                                <hr />

                                <p>
                                    <strong>Booking ID:</strong>{" "}
                                    {booking.id}
                                </p>

                                <p>
                                    <strong>Train No:</strong>{" "}
                                    {booking.trainNo}
                                </p>

                                <p>
                                    <strong>Seats:</strong>{" "}
                                    {booking.seatsBooked}
                                </p>

                                <p>
                                    <strong>Total Fare:</strong>{" "}
                                    ₹{booking.totalFare}
                                </p>

                                <button
                                    className="btn btn-danger w-100"
                                    onClick={() =>
                                        cancelBooking(booking.id)
                                    }
                                >
                                    Cancel Ticket
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default MyBookings;