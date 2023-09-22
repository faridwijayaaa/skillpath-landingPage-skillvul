let handleGetFormData = () => {
  let formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  };

  return formData;
};

function isNumber(s) {
  if (isNaN(s)) {
    return false;
  } else {
    return true;
  }
}

function checkboxIsChecked() {
  if (handleGetFormData().status) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  if (
    !isNumber(formData.zipCode) ||
    !checkboxIsChecked() ||
    formData === null
  ) {
    return false;
  } else {
    return true;
  }
}

let submit = () => {
  let warningDiv = document.getElementById("warning");

  let formData = handleGetFormData();

  if (validateFormData(formData)) {
    warningDiv.textContent = "";
  } else {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  }
};

let submtBtn = document.getElementById("submit-form");
submtBtn.addEventListener("click", (event) => {
  event.preventDefault();
  submit();
});
