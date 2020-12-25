

/**
 * Added for changing focus of EditText dynamically
 * @param {arrayTextInputs} inputArray : Array Of Text Inputs which can be in screen
 * @param {currentTextInput} input : Current Text Input among all Text Input
 */
export function changeFocus(inputArray = [], input = '') {
    if (Object.keys(inputArray).length > 0) {
        if (input === '') {
            Object.keys(inputArray).forEach(key => {
                inputArray[key].onLostFocus();
            })
        } else {
            Object.keys(inputArray).forEach(key => {
                if (key !== input) {
                    inputArray[key].onLostFocus();
                }
            })
        }
    }
}

//Added for getting widgth of slide
export function windowPercentage(percentage, viewportWidth) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

//For Parse Float Value
export function parseFloatVal(value) {
    try {
        return parseFloat(value);
    } catch (error) {
        return value;
    }
}

//For Parse Integer Value
export function parseIntVal(value) {
    try {
        return parseInt(value);
    } catch (error) {
        return value;
    }
}