import { Link } from "react-router-dom";

function Home() {

    return (

        <div>

            {/* Hero Section */}

            <section className="bg-primary text-white py-5">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-md-7">

                            <h1 className="display-4 fw-bold">
                                Book Your Journey
                                <br />
                                With Ease 🚆
                            </h1>

                            <p className="lead mt-3">
                                Search trains, book tickets and manage
                                your railway reservations from one place.
                            </p>

                            <Link
                                to="/trains"
                                className="btn btn-light btn-lg mt-3"
                            >
                                Search Trains
                            </Link>

                        </div>


                        <div className="col-md-5 text-center mt-4 mt-md-0">

                            <div
                                style={{
                                    fontSize: "150px"
                                }}
                            >
                                🚆
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Features */}

            <section className="py-5">

                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Why Choose Us?
                    </h2>

                    <div className="row">


                        <div className="col-md-4 mb-4">

                            <div className="card h-100 shadow-sm text-center">

                                <div className="card-body p-4">

                                    <div className="fs-1">
                                        🔍
                                    </div>

                                    <h4 className="mt-3">
                                        Easy Train Search
                                    </h4>

                                    <p className="text-muted">
                                        Find trains quickly by entering
                                        your source and destination.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-4 mb-4">

                            <div className="card h-100 shadow-sm text-center">

                                <div className="card-body p-4">

                                    <div className="fs-1">
                                        🎫
                                    </div>

                                    <h4 className="mt-3">
                                        Simple Booking
                                    </h4>

                                    <p className="text-muted">
                                        Book your seats quickly and get
                                        your reservation confirmed.
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="col-md-4 mb-4">

                            <div className="card h-100 shadow-sm text-center">

                                <div className="card-body p-4">

                                    <div className="fs-1">
                                        📖
                                    </div>

                                    <h4 className="mt-3">
                                        Manage Bookings
                                    </h4>

                                    <p className="text-muted">
                                        View your bookings and cancel
                                        tickets whenever required.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Call To Action */}

            <section className="bg-light py-5">

                <div className="container text-center">

                    <h2 className="fw-bold">
                        Ready to start your journey?
                    </h2>

                    <p className="text-muted">
                        Search for your train and book your ticket today.
                    </p>

                    <Link
                        to="/trains"
                        className="btn btn-primary btn-lg"
                    >
                        Find a Train 🚆
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default Home;