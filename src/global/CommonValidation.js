

//To check User Input is Empty or Not Validation
//If User Input is Empty then return true else return false
export function isEmpty(value) {
  var ReturnBit = false;
  try {
    if (value.toString() === '' || value === null || value == undefined || value == null) {
      ReturnBit = true;
    }
    else {
      ReturnBit = false;
    }
  } catch (err) {
    ReturnBit = true;
  }
  return ReturnBit;
}

export function validateValue(value) {
  try {
    return isEmpty(value) ? '-' : value.toString();
  } catch (e) {
    //logger(e.message)
    return value;
  }
}




export function isNull(value, defaultValue = "") {
  try {
    if (value != null && value != undefined) {
      return value;
    }
    else {
      return defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
}




export function validateGoogleAuthCode(code) {
  try {
    //Six Digits only for Google Auth Code
    return /^[0-9]{0,6}$/.test(code);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

export function validateAlphaNumeric(text) {
  try {
    // \w any word character (A-Z, a-z, 0-9).
    return /^[0-9a-zA-Z]+$/.test(text);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

export function validateMobileNumber(number) {
  try {
    //10 Digits for mobile nunber
    let reg = /^[0-9]{0,10}$/;
    return reg.test(number);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

//For Password Validation
export function validatePassword(password) {
  try {
    let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/;
    return reg.test(password);
  } catch (error) {
    //logger(error.message)
  }
}


export function validateNumeric(text) {
  try {
    // \w any Numeric character (0-9).
    return /^[0-9]+$/.test(text);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}


export function validWithdrawAddress(Address) {
  try {
    return /^[0-9A-Za-z?=]+$/.test(Address);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

export function multipleMobileNumber(number) {
  try {
    //for enter only digit and comma
    let reg = /^[0-9,]+$/;
    return reg.test(number);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

export function getCurruntDateTime() {
  try {
    var date = new Date().getDate();
    var Month = new Date().getMonth();
    var FullYear = new Date().getFullYear();

    return date + "-" + Month + "-" + FullYear;
  } catch (error) {
    console.log("getCurruntDateTime() :: ERROR ## " + error);
    return "" + error;
  }
}
export function validateGST(gstNumber) {
  try {
    //15 Digits for valid GST    
    let reg = /^[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}[0-9a-zA-Z]{1}[a-zA-Z]{1}[0-9a-zA-Z]{1}$/;
    return reg.test(gstNumber);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}

export function validatePAN(panNumber) {
  try {
    //15 Digits for valid GST    
    let reg = /^[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}$/;
    return reg.test(panNumber);
  } catch (error) {
    //logger(error.message)
    return false;
  }
}