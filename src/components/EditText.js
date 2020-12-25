import React, { Component } from 'react';
import { View, Text, TextInput, Platform } from 'react-native';
import R from '../global/R';
import { validateNumeric, validateMobileNumber, validWeek, validMonth, validPercentage, validCharacter } from '../global/CommonValidation';
/*
#   EditText props
-----------------------------------------------------------------------------------------------------------------------------------------------------
#   @labelTitle   :: To set title label of EditText               ??? Datatype :: String  ??? DefaultProps :: ""
#   @maxLength    :: To set Maximum Length of EditText text value ??? Datatype :: Integer ??? DefaultProps :: 200
#   @keyboardType :: To set EditText Keyboard Type                ??? Datatype :: Integer ??? DefaultProps :: R.strings.KEY_TYPE_DEFAULT ### Ref :: strings.js
#   @visibility   :: To set visibility of EditText Panel box      ??? Datatype :: boolean ??? DefaultProps :: true
#   @hint         :: To set EditText placeholder/Hint             ??? Datatype :: String  ??? DefaultProps :: "hint"
#   @multiline    :: Is EditText have multiline                   ??? Datatype :: boolean ??? DefaultProps :: false || ignore multiple line and set default line-1
#   @value        :: To set EditText Value                        ??? Datatype :: String  ??? DefaultProps :: "value"
#   @validate     :: To check validation on EditText or not       ??? Datatype :: boolean ??? DefaultProps :: false || ignore validation
#   @onlyDigit    :: EditText Validation Type                     ??? Datatype :: boolean ??? DefaultProps :: ignore validation ### Ref :: [onlyDigit, mobileNumber, validWeek, validMonth, validPercentage, onlyCharacters](EditText.js)
#   @isPassword   :: EditText is password or not                  ??? Datatype :: boolean ??? DefaultProps :: ignore validation ### Ref :: [true || false)
#   @isLable      :: If you want to lable                         ??? Datatype :: boolean ??? DefaultProps :: ignore validation ### Ref :: [true || false)
#   @editable     :: To set EditText editable                     ??? Datatype :: boolean ??? DefaultProps :: true
*/

export default class EditText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        };
    }

    onGetFocus = () => {
        if (this.props.focusable !== undefined && this.props.focusable)
            this.setState({ focused: true });
    }

    onLostFocus = () => {
        if (this.props.focusable !== undefined && this.props.focusable)
            this.setState({ focused: false });
    }

    //To check for common amount validation
    validate = (text) => {
        //For Only Digits
        if (this.props.onlyDigit) {
            if (text !== '') {
                if (validateNumeric(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        //For Only 10 Digit Mobile number
        else if (this.props.mobileNumber) {
            if (text !== '') {
                // console.log("Mobile::: " + validateMobileNumber(text) + " & Value::: " + text);
                if (validateMobileNumber(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        //For Week Validation
        //Enter 1 to 4 digits
        else if (this.props.validWeek) {
            if (text !== '') {
                if (validWeek(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        //For Month Validation
        //Enter 1 to 12 digits
        else if (this.props.validMonth) {
            if (text !== '') {
                if (validMonth(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        //For Percentage Validation
        //Enter 1 to 100 digits
        else if (this.props.validPercentage) {
            if (text !== '') {
                if (validPercentage(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        //For Only Characters Validation
        //Enter A-Z and a-z
        else if (this.props.onlyCharacters) {
            if (text !== '') {
                if (validCharacter(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
        else {
            if (text !== '') {
                if (CheckAmountValidation(text)) {
                    this.props.onChangeText(text);
                }
            } else {
                this.props.onChangeText(text);
            }
        }
    }


    render() {
        // VISIBILITY :::: TRUE = show & FALSE = hide
        const visibility = this.props.visibility === undefined ? true : this.props.visibility;
        // KEYBOARD BEHAVIOUR
        const keyboardType = this.props.keyboardType === undefined ? R.strings.KEY_TYPE_DEFAULT : this.props.keyboardType;
        // MAXIMUM LENGTH FOR CHARACTER
        const maxLength = this.props.maxLength === undefined ? 200 : this.props.maxLength;
        // IS TextInput is Editable ::: TRUE = YES & FALSE = user can not edit/insert anything
        const editable = this.props.editable === undefined ? true : this.props.editable;
        // Hint 
        const hint = this.props.hint === undefined ? "" : this.props.hint;
        // Multiline ::: TRUE & FALSE
        const Multiline = this.props.multiline === undefined ? false : this.props.multiline;
        // isPassword ::: TRUE & FALSE
        const isPassword = this.props.isPassword === undefined ? false : this.props.isPassword;
        // numberOfLine ::: 1 default set 
        const noOfLine = this.props.multiline != undefined && this.props.multiline == true ? 3 : 1;
        // isLable ::: true default set 
        const isLable = this.props.isLable === undefined ? true : this.props.isLable;
        // console.log(noOfLine);
        // Default fill value in TextInput 
        const defaultValue = this.props.value === undefined ? "" : this.props.value;
        // Check to apply validate on this EditText or not
        const isValidate = this.props.validate === undefined ? false : this.props.validate;

        // For handle editText focus
        let reference = this.props.reference === undefined ? "" : this.props.reference;
        let onSubmitEditing = this.props.onSubmitEditing === undefined ? "" : this.props.onSubmitEditing;
        let onFocus_flag = this.props.onFocus_flag === undefined ? "" : this.props.onFocus_flag;
        let returnKeyType = this.props.returnKeyType === undefined ? "done" : this.props.returnKeyType;

        let keyboardMode = 'default';
        switch (keyboardType) {
            case R.strings.KEY_TYPE_DEFAULT:
                keyboardMode = 'default';
                break;
            case R.strings.KEY_TYPE_NUMBER:
                keyboardMode = 'numeric';
                break;
            case R.strings.KEY_TYPE_DECIMAL:
                keyboardMode = Platform.OS === 'Android' ? 'numeric' : 'decimal-pad';
                break;
            case R.strings.KEY_TYPE_EMAIL:
                keyboardMode = 'email-address';
                break;
        }

        return (
            <View style={{ display: !visibility ? 'none' : 'flex', }}>
                {
                    isLable ? <Text style={this.styles().labelTitle}>{this.props.labelTitle}</Text> : <View></View>
                }
                <TextInput
                    ref={reference}
                    onSubmitEditing={() => {
                        this.onLostFocus();
                        if (this.props.onSubmitEditing !== undefined) {
                            this.props.onSubmitEditing();
                        }
                    }}
                    onFocus={() => {
                        this.onGetFocus();
                        if (onFocus_flag !== undefined && onFocus_flag != '') {
                            onFocus_flag();
                        }
                    }}
                    returnKeyType={returnKeyType}

                    style={[this.styles().inputText, this.props.style]}
                    keyboardType={keyboardMode}
                    maxLength={maxLength}
                    editable={editable}
                    multiline={Multiline}
                    secureTextEntry={isPassword}
                    numberOfLines={noOfLine}
                    underlineColorAndroid='transparent'
                    //If validate is passed as true then it will check amount validation otherwise it react as normal change text
                    onChangeText={(text) => isValidate ? this.validate(text) : this.props.onChangeText(text)}
                    value={this.props.value}
                    textAlignVertical={noOfLine == 1 ? "auto" : "top"}
                    placeholder={hint} />
            </View>
        )
    }

    styles = () => {
        return {
            labelTitle: {
                color: R.colors.textLableColor,
                fontSize: R.dimens.FONT_SIZE_12,
                margin: R.dimens.DIMENS_SIZE_4,
            },
            inputText: {
                borderWidth: R.dimens.DIMENS_SIZE_1,
                borderColor: R.colors.colorInputTextBorderColor,
                borderRadius: R.dimens.DIMENS_SIZE_6,
                color: R.colors.textValueColor,
                backgroundColor: (this.props.editable != undefined && this.props.editable == false) ? R.colors.greyLight : R.colors.colorWhite,
                marginLeft: R.dimens.DIMENS_SIZE_4,
                marginRight: R.dimens.DIMENS_SIZE_4,
                marginBottom: R.dimens.DIMENS_SIZE_2,
                paddingTop: R.dimens.DIMENS_SIZE_2,
                paddingBottom: R.dimens.DIMENS_SIZE_2,
                paddingLeft: R.dimens.DIMENS_SIZE_8,
                paddingRight: R.dimens.DIMENS_SIZE_4,
            },
        }
    }
}