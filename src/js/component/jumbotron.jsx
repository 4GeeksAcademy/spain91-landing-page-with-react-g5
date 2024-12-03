import React from "react"

export const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3 text-center">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Landing Page con React</h1>
                <p className="col-md-8 mx-auto fs-4 text-center">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button className="btn btn-primary btn-lg" type="button">Pulsa aquí</button>
            </div>
        </div>
    )
};

