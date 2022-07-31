import cogoToast from "cogo-toast";

let emailRegx = /\S+@\S+\.\S+/;

let mobileRegx = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }
  IsMobile(value) {
    return !mobileRegx.test(value);
  }
  IsEmail(value) {
    return !emailRegx.test(value);
  }

  ErrorTost(msg) {
    cogoToast.error(msg, { position: "bottom-center" });
  }
  SuccessTost(msg) {
    cogoToast.success(msg, { position: "bottom-center" });
  }
}

export const { IsEmpty, IsMobile, IsEmail, ErrorTost, SuccessTost } =
  new FormHelper();
