import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {

    const [users, setUsers] = useState([]);
    const [trains, setTrains] = useState([]);
    const [bookings, setBookings] = useState([]);

    const [train, setTrain] = useState({
        id: "",
        trainNo: "",
        trainName: "",
        source: "",
        destination: "",
        seats: "",
        fare: ""
    });

    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState("");

    const getUsers = () => {

        API.get("/users/all")
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getTrains = () => {

        API.get("/trains")
            .then(response => {
                setTrains(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getBookings = () => {

        API.get("/bookings/all")
            .then(response => {
                setBookings(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {

        getUsers();
        getTrains();
        getBookings();

    }, []);

    const handleChange = (e) => {

        setTrain({
            ...train,
            [e.target.name]: e.target.value
        });

    };

    const saveTrain = (e) => {

        e.preventDefault();

        const trainData = {
            id: train.id,
            trainNo: train.trainNo,
            trainName: train.trainName,
            source: train.source,
            destination: train.destination,
            seats: Number(train.seats),
            fare: Number(train.fare)
        };

        if (editing) {

            API.put("/trains", trainData)
                .then(() => {

                    setMessage("Train updated successfully");

                    resetForm();
                    getTrains();

                })
                .catch(error => {

                    console.log(error);
                    setMessage("Unable to update train");

                });

        } else {

            API.post("/trains", trainData)
                .then(() => {

                    setMessage("Train added successfully");

                    resetForm();
                    getTrains();

                })
                .catch(error => {

                    console.log(error);
                    setMessage("Unable to add train");

                });
        }
    };

    const editTrain = (selectedTrain) => {

        setTrain({
            id: selectedTrain.id,
            trainNo: selectedTrain.trainNo,
            trainName: selectedTrain.trainName,
            source: selectedTrain.source,
            destination: selectedTrain.destination,
            seats: selectedTrain.seats,
            fare: selectedTrain.fare
        });

        setEditing(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const resetForm = () => {

        setTrain({
            id: "",
            trainNo: "",
            trainName: "",
            source: "",
            destination: "",
            seats: "",
            fare: ""
        });

        setEditing(false);
    };

    const deleteTrain = (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this train?"
        );

        if (!confirmDelete) {
            return;
        }

        API.delete(`/trains/${id}`)
            .then(response => {

                setMessage(response.data);

                getTrains();

            })
            .catch(error => {

                console.log(error);
                setMessage("Unable to delete train");

            });
    };

    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                👨‍💼 Admin Dashboard
            </h2>

            {/* Statistics */}

            <div className="row mb-4">

                <div className="col-md-4 mb-3">

                    <div className="card text-center shadow-sm">

                        <div className="card-body">

                            <h1>👤</h1>

                            <h5>Total Users</h5>

                            <h2>{users.length}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card text-center shadow-sm">

                        <div className="card-body">

                            <h1>🚆</h1>

                            <h5>Total Trains</h5>

                            <h2>{trains.length}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-3">

                    <div className="card text-center shadow-sm">

                        <div className="card-body">

                            <h1>🎫</h1>

                            <h5>Total Bookings</h5>

                            <h2>{bookings.length}</h2>

                        </div>

                    </div>

                </div>

            </div>

            {message && (

                <div className="alert alert-info">
                    {message}
                </div>

            )}

            {/* Add / Edit Train */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-primary text-white">

                    <h4 className="mb-0">

                        {editing
                            ? "✏️ Edit Train"
                            : "🚆 Add New Train"}

                    </h4>

                </div>

                <div className="card-body">

                    <form onSubmit={saveTrain}>

                        <div className="row">

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Train Number
                                </label>

                                <input
                                    type="text"
                                    name="trainNo"
                                    className="form-control"
                                    value={train.trainNo}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Train Name
                                </label>

                                <input
                                    type="text"
                                    name="trainName"
                                    className="form-control"
                                    value={train.trainName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Source
                                </label>

                                <input
                                    type="text"
                                    name="source"
                                    className="form-control"
                                    value={train.source}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Destination
                                </label>

                                <input
                                    type="text"
                                    name="destination"
                                    className="form-control"
                                    value={train.destination}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Seats
                                </label>

                                <input
                                    type="number"
                                    name="seats"
                                    className="form-control"
                                    value={train.seats}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label className="form-label">
                                    Fare
                                </label>

                                <input
                                    type="number"
                                    name="fare"
                                    className="form-control"
                                    value={train.fare}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        <button
                            type="submit"
                            className="btn btn-success"
                        >
                            {editing
                                ? "Update Train"
                                : "Add Train"}
                        </button>

                        {editing && (

                            <button
                                type="button"
                                className="btn btn-secondary ms-2"
                                onClick={resetForm}
                            >
                                Cancel Edit
                            </button>

                        )}

                    </form>

                </div>

            </div>

            {/* Train Management */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-dark text-white">

                    <h4 className="mb-0">
                        🚆 Train Management
                    </h4>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-striped table-hover">

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>Train No</th>
                                    <th>Name</th>
                                    <th>Source</th>
                                    <th>Destination</th>
                                    <th>Seats</th>
                                    <th>Fare</th>
                                    <th>Action</th>
                                </tr>

                            </thead>

                            <tbody>

                                {trains.map(train => (

                                    <tr key={train.id}>

                                        <td>{train.id}</td>
                                        <td>{train.trainNo}</td>
                                        <td>{train.trainName}</td>
                                        <td>{train.source}</td>
                                        <td>{train.destination}</td>
                                        <td>{train.seats}</td>
                                        <td>₹{train.fare}</td>

                                        <td>

                                            <button
                                                className="btn btn-warning btn-sm me-2"
                                                onClick={() =>
                                                    editTrain(train)
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() =>
                                                    deleteTrain(train.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

            {/* All Bookings */}

            <div className="card shadow-sm mb-5">

                <div className="card-header bg-success text-white">

                    <h4 className="mb-0">
                        🎫 All Bookings
                    </h4>

                </div>

                <div className="card-body">

                    <div className="table-responsive">

                        <table className="table table-striped">

                            <thead>

                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Train</th>
                                    <th>Seats</th>
                                    <th>Total Fare</th>
                                </tr>

                            </thead>

                            <tbody>

                                {bookings.map(booking => (

                                    <tr key={booking.id}>

                                        <td>{booking.id}</td>
                                        <td>{booking.userName}</td>
                                        <td>{booking.trainName}</td>
                                        <td>{booking.seatsBooked}</td>
                                        <td>₹{booking.totalFare}</td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminDashboard;