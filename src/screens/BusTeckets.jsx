import React from "react";
import "../Styles/styles.css";
import Header from "../components/HeaderSection/Header";
import Filter from "../components/FilterSection/Filter";
import BusListDetails from "../components/BusListDetails/BusListDetails";

export const BusTicket = () => {
  return (
    <>
      <section className="p-0 ">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Filter />
            </div>
            <div className="col-lg-9">
              <BusListDetails />
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
