import React from "react";

const SendOTP = () => {
  return (
    <div>
      <div className="container SendOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>Email Address</h5>
              <br />
              <form>
                <label
                  htmlFor=""
                  className="animate__animated animate__fadeInUp"
                >
                  Your Email Address
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="animate__animated animate__fadeInUp"
                />
                <button className="my__btn animate__animated animate__fadeInUp">
                  NEXT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendOTP;
