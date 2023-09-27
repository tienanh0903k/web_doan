function Validator(options) {
  var selectRules = {};
  var formElement = document.querySelector(options.form);

  function Validate(inputElement, rule) {
    var errorElement =
      inputElement.parentElement.querySelector(".form-message");
    var errorMessage;
    var rules = selectRules[rule.selector];
    for (var i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value);
      if (errorMessage) {
        break;
      }
    }
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
    return !errorMessage;  
  }

  var formElement = document.querySelector(options.form);
  if (formElement) {
    formElement.onsubmit = function(e) {
      e.preventDefault();
      
      var isFormValid = true;
      options.rules.forEach(function (rule) {
        var inputElement = formElement.querySelector(rule.selector);
        var isValid = Validate(inputElement, rule);
        if (!isValid) {
          isFormValid = false;
        }
      });
      if(isFormValid) {
        if (typeof options.onSubmit == 'function') {
          var enableInput = formElement.querySelectorAll('[name]');
          var formValues = Array.from(enableInput).reduce((values, input)=> {
            values[input.name] = input.value;
            return values;
          },{});
          options.onSubmit(formValues);
          var storedForms =
            JSON.parse(localStorage.getItem("storedForms")) || [];

          // Add the current form data to the array
          storedForms.push(formValues);

          // Save the updated array to local storage
          localStorage.setItem("storedForms", JSON.stringify(storedForms));
          alert("Dang kí thanh cong");
          window.location.href = "login.html";
        }
      }
    }

    options.rules.forEach(function (rule) {
      if (Array.isArray(selectRules[rule.selector])) {
        selectRules[rule.selector].push(rule.test);
      } else {
        selectRules[rule.selector] = [rule.test];
      }
      var inputElement = formElement.querySelector(rule.selector);
      inputElement.onblur = function () {
        Validate(inputElement, rule);
      };

      inputElement.oninput = function () {
        var errElement = inputElement.parentElement.querySelector(
          options.errorSelect
        );
        errElement.innerText = "";
        inputElement.parentElement.classList.remove("invalid");
      }; 
    });
  }
}

Validator.isFullname = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};

Validator.isUsername = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "Vui long nhap truong nay";
    },
  };
};

Validator.isEmail = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return regex.test(value) ? undefined : "Vui long nhap Email";
    },
  };
};
Validator.isPhone = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^[0-9]{10,}$/;
      return regex.test(value) ? undefined : "Vui long nhap so dien thoai";
    },
  };
};

Validator.minLength = function (selector, min) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined : `Vui long nhap toi thieu ${min}`;
    },
  };
};
Validator.isComfirm = function (selector, getComfirmValue) {
  return {
    selector: selector,
    test: function (value) {
      return value === getComfirmValue() ? undefined : "Mat khau khong trung";
    },
  };
};
