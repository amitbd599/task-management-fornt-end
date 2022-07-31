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
  GetBase64(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log("RESULT", reader.result);
    };
    reader.readAsDataURL(file);
  }
}

export const { IsEmpty, IsMobile, IsEmail, ErrorTost, SuccessTost } =
  new FormHelper();
