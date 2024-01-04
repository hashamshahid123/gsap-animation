import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="form-text">
        <h1 className="from-h1">
          <span className="form-s">Our</span> <br /> Services
        </h1>
        <p className="form-p">Discover How We Can Help</p>
      </div>
      <div className="form">
        <select className="form-select" aria-label="Default select example">
          <option selected>Brand Designing</option>
          <option value="1">One</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>UI/UX</option>
          <option value="1">One</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>Web Development</option>
          <option value="1">One</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>SEO</option>
          <option value="1">One</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>Digital Marketing</option>
          <option value="1">One</option>
        </select>
        <select className="form-select" aria-label="Default select example">
          <option selected>Packing & Logo Design</option>
          <option value="1">One</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
