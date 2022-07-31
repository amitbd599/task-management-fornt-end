import axios from "axios";
import { ErrorTost, SuccessTost } from "../helper/FormHelper";
import { getToken, setToken, setUserDetails } from "../helper/SessionHelper";
import { SetProfile } from "../redux/stateSlice/ProfileSlice";
import { HideLoader, ShowLoader } from "../redux/stateSlice/Setting-slice";
import { SetSummary } from "../redux/stateSlice/Summary-slice";
import {
  SetCanceledTask,
  SetCompletedTask,
  SetNewTask,
  SetProgressTask,
} from "../redux/stateSlice/Task-slice";
import store from "../redux/store/Store";

const BaseURL = "http://localhost:8080/api/v1";
// const BaseURL = "https://task-manager-amit.herokuapp.com/api/v1";
const AxiosToken = { headers: { token: getToken() } };

export const Registration__Request__API = (
  email,
  fastName,
  lastName,
  mobile,
  password,
  photo
) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/registration";
  let postBody = {
    email: email,
    fastName: fastName,
    lastName: lastName,
    mobile: mobile,
    password: password,
    photo: photo,
  };

  return axios
    .post(URL, postBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (res.data["status"] === "Fail") {
          if (res.data["data"]["keyPattern"]["email"] === 1) {
            ErrorTost("Email already Exist");
            return false;
          } else {
            ErrorTost("Something Went Wrong1.");
            return false;
          }
        } else {
          SuccessTost("Registration Success.");
          return true;
        }
      } else {
        ErrorTost("Something Went Wrong2.");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorTost("Something Went Wrong3.");
      return false;
    });
};

export const login__Request__API = (email, password) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/login";
  let postBody = {
    email: email,
    password: password,
  };

  return axios
    .post(URL, postBody)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessTost("Login Success");
        setToken(res.data["token"]);
        setUserDetails(res.data["data"]);

        return true;
      } else {
        ErrorTost("Invalid Email or Password");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorTost("Something Went Wrong loginPage.");

      return false;
    });
};

export const CreateNew__API = (title, description, status) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/createTask";
  let postBody = {
    title: title,
    description: description,
    status: "New",
  };

  return axios
    .post(URL, postBody, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessTost("Create Task Success");
        return true;
      } else {
        ErrorTost("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorTost("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
};

export const TaskListByStatus = (Status) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/listTaskByStatus/" + Status;

  axios
    .get(URL, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        if (Status === "New") {
          store.dispatch(SetNewTask(res.data["data"]));
        } else if (Status === "Completed") {
          store.dispatch(SetCompletedTask(res.data["data"]));
        } else if (Status === "Progress") {
          store.dispatch(SetProgressTask(res.data["data"]));
        } else if (Status === "Canceled") {
          store.dispatch(SetCanceledTask(res.data["data"]));
        } else {
          ErrorTost("Something Went Wrong");
        }
      }
    })
    .catch((error) => {
      ErrorTost("Something Went Wrong");
      store.dispatch(HideLoader());
    });
};

export const Summary__API = () => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/taskStatusCount";
  axios
    .get(URL, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        store.dispatch(SetSummary(res.data["data"]));

        return true;
      } else {
        ErrorTost("Something Went Wrong1");
        return false;
      }
    })
    .catch((error) => {
      ErrorTost("Something Went Wrong 2");
      store.dispatch(HideLoader());
      return false;
    });
};

export const Delete__API = (id) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/deleteTask/" + id;
  return axios
    .delete(URL, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());

      if (res.status === 200) {
        SuccessTost("Delete Successful");

        return true;
      } else {
        ErrorTost("Something Went Wrong1");
        return false;
      }
    })
    .catch((error) => {
      ErrorTost("Something Went Wrong2");
      store.dispatch(HideLoader());
      return false;
    });
};

export const UpdateStatus__API = (id, status) => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/updateTaskStatus/" + id + "/" + status;
  return axios
    .get(URL, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());
      if (res.status === 200) {
        SuccessTost("Update Status Successful");
        return true;
      } else {
        ErrorTost("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(HideLoader());
      ErrorTost("Something Went Wrong");
    });
};

export const ProfileUpdate__API = () => {
  store.dispatch(ShowLoader());
  let URL = BaseURL + "/updateProfileDetails";
  return axios
    .get(URL, AxiosToken)
    .then((res) => {
      store.dispatch(HideLoader());

      if (res.status === 200) {
        store.dispatch(SetProfile(res.data["data"][0]));
        return true;
      } else {
        ErrorTost("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      ErrorTost("Something Went Wrong");
      store.dispatch(HideLoader());
      return false;
    });
};
