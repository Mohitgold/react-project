import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <div className="spinner-wrapper container">
      <div className="row justify-content-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
  );
};

export default Loader;
