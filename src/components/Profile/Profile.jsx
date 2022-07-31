import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ProfileUpdate__API } from "../../API/API__REQUEST";
import { getUserDetails } from "../../helper/SessionHelper";

const Profile = () => {
  useEffect(() => {
    ProfileUpdate__API();
  }, []);

  const ProfileData = useSelector((state) => state.profile.value);

  return (
    <div className="container profile">
      <div className="row">
        <div className="col-md-12">
          <div className="card__item">
            <div className="row">
              <div className="col">
                <div className="img__file">
                  <img src={ProfileData.photo} alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="heading__text">Profile Image</p>
                <input className="input__file" type="file" name="" id="" />
              </div>

              <div className="col-md-4">
                <p className="heading__text">First Name</p>
                <input
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  value={ProfileData.fastName}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Last Name</p>
                <input
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  value={ProfileData.lastName}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <p className="heading__text">Mobile</p>
                <input
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  value={ProfileData.mobile}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Email Address</p>
                <input
                  readOnly={true}
                  className="input__"
                  type="text"
                  name=""
                  id=""
                  value={ProfileData.email}
                />
              </div>
              <div className="col-md-4">
                <p className="heading__text">Password</p>
                <input
                  className="input__"
                  type="password"
                  name=""
                  id=""
                  value={ProfileData.password}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <button className="my__btn">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
