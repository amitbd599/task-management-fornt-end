import React from "react";
import ReactCodeInput from "react-code-input";

const VerifyOTP = () => {
  return (
    <div>
      <div className="container VerifyOTP">
        <div className="row">
          <div className="col-12">
            <div className="card__item">
              <h5>OTP Verification</h5>
              <br />
              <form>
                <label
                  htmlFor=""
                  className="animate__animated animate__fadeInUp"
                >
                  A 6 Digit verification code has been sent to your email
                  address
                </label>
                <ReactCodeInput type="text" fields={6} />
                <button className="my__btn animate__animated  animate__fadeInUp">
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

export default VerifyOTP;
