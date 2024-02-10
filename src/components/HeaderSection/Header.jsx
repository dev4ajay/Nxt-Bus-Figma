import React from "react";
import { headerRoutes, tourRoutes } from "../../Routes/AllRoute";

const Header = () => {
  return (
    <>
      <section className="p-0 section-content">
        <div className="container">
          <div className="d-flex gap-3">
            {headerRoutes.map((row) => (
              <>
                <p className="d-flex gap-3 align-items-center">
                  {row.title} {row.icon}
                </p>
              </>
            ))}
          </div>
        </div>
      </section>
      <section className=" p-3 section-content2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mt-2">Indore to Bhopal Bus</h2>
            </div>
            <div className="col-lg-6 d-flex justify-content-end align-items-center">
              {" "}
              <div className="d-flex gap-3">
                {tourRoutes.map((row) => (
                  <>
                    <p className="d-flex gap-3 align-items-center">
                      {row.title} {row.icon}
                    </p>
                  </>
                ))}
                <button className="modify">Modify</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mt-0" />
    </>
  );
};

export default Header;
