import { Link } from "react-router-dom";

function Home() {

    return (

        <div>

            {/* Hero Section */}

            <div className="bg-primary text-white py-5">

                <div className="container text-center">

                    <h1 className="display-4 fw-bold">
                        🚆 Railway Reservation System
                    </h1>

                    <p className="lead mt-3">
                        Book your train journey quickly and easily.
                    </p>

                    <Link
                        to="/trains"
                        className="btn btn-light btn-lg mt-3"
                    >
                        Search Trains
                    </Link>

                </div>

            </div>


            {/* Features */}

            <div className="container mt-5">

                <h2 className="text-center mb-4">
                    Why Choose Us?
                </h2>

                <div className="row">

                    <div className="col-md-4 mb-3">

                        <div className="card text-center h-100 shadow-sm">

                            <div className="card-body">

                                <h3>🚆</h3>

                                <h5 className="card-title">
                                    Search Trains
                                </h5>

                                <p className="card-text">
                                    Find trains between your source
                                    and destination.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4 mb-3">

                        <div className="card text-center h-100 shadow-sm">

                            <div className="card-body">

                                <h3>🎫</h3>

                                <h5 className="card-title">
                                    Easy Booking
                                </h5>

                                <p className="card-text">
                                    Book your train tickets easily
                                    through our system.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="col-md-4 mb-3">

                        <div className="card text-center h-100 shadow-sm">

                            <div className="card-body">

                                <h3>📖</h3>

                                <h5 className="card-title">
                                    Manage Bookings
                                </h5>

                                <p className="card-text">
                                    View and cancel your bookings
                                    whenever you need.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Home;