import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function TrainList() {

    const [trains, setTrains] = useState([]);
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [message, setMessage] = useState("");

    // Load all trains
    const getAllTrains = () => {

        API.get("/trains")
            .then(response => {
                setTrains(response.data);
                setMessage("");
            })
            .catch(error => {
                console.log(error);
                setMessage("Unable to load trains");
            });
    };

    useEffect(() => {
        getAllTrains();
    }, []);

    // Search trains
    const searchTrain = () => {

        if (source === "" || destination === "") {
            setMessage("Please enter source and destination");
            return;
        }

        API.get("/trains/search", {
            params: {
                source: source,
                destination: destination
            }
        })
        .then(response => {

            setTrains(response.data);

            if (response.data.length === 0) {
                setMessage("No trains found");
            } else {
                setMessage("");
            }

        })
        .catch(error => {
            console.log(error);
            setMessage("Error while searching trains");
        });
    };

    return (

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                🚆 Search Trains
            </h2>

            {/* Search Section */}

            <div className="card shadow-sm p-4 mb-4">

                <div className="row">

                    <div className="col-md-5 mb-3">

                        <label className="form-label">
                            Source
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter source"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        />

                    </div>


                    <div className="col-md-5 mb-3">

                        <label className="form-label">
                            Destination
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter destination"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />

                    </div>


                    <div className="col-md-2 mb-3 d-flex align-items-end">

                        <button
                            className="btn btn-primary w-100"
                            onClick={searchTrain}
                        >
                            Search
                        </button>

                    </div>

                </div>

                <button
                    className="btn btn-secondary"
                    onClick={getAllTrains}
                >
                    Show All Trains
                </button>

            </div>


            {/* Message */}

            {message && (
                <div className="alert alert-warning">
                    {message}
                </div>
            )}


            {/* Train Cards */}

            <div className="row">

                {trains.map(train => (

                    <div
                        className="col-md-6 col-lg-4 mb-4"
                        key={train.id}
                    >

                        <div className="card h-100 shadow-sm">

                            <div className="card-body">

                                <h5 className="card-title">
                                    🚆 {train.trainName}
                                </h5>

                                <p className="text-muted">
                                    Train No: {train.trainNo}
                                </p>

                                <hr />

                                <p>
                                    <strong>From:</strong> {train.source}
                                </p>

                                <p>
                                    <strong>To:</strong> {train.destination}
                                </p>

                                <p>
                                    <strong>Available Seats:</strong>{" "}
                                    {train.seats}
                                </p>

                                <p>
                                    <strong>Fare:</strong>{" "}
                                    ₹{train.fare}
                                </p>

                                {train.seats > 0 ? (

                                    <Link
                                        to={`/book/${train.trainNo}`}
                                        className="btn btn-success w-100"
                                    >
                                        Book Ticket
                                    </Link>

                                ) : (

                                    <button
                                        className="btn btn-danger w-100"
                                        disabled
                                    >
                                        No Seats Available
                                    </button>

                                )}

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default TrainList;