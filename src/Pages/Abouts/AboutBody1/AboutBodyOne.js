import React from "react";
import aboutImg from "./../../../Images/About/about-3.jpg";
const AboutBodyOne = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 my-5">
            <div className="title">
              <h4 className="sub-heading text-start">ABOUT TRAVEL GURU</h4>
              <h1 className="heading ts-1 fw-bold w-75 text-start">
                 A New Travel Agency with New Hopes
              </h1>
              <p className="ts-4 text-gray">
                Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale. ... For hosts, participating in Airbnb is a way to earn some income from their property, but with the risk that the guest might do damage to it.
              </p>
              <button className="btn btn-travel">Find Tour</button>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div>
              <img
                src={aboutImg}
                className="img-fluid my-5 p-4 shadow rounded "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBodyOne;
