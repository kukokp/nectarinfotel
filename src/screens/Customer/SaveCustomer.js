import React, { Component } from 'react'
import { View, Text, Imagem, KeyboardAvoidingView, Platform, ScrollView, Alert, Keyboard } from 'react-native';
import { Card, Icon } from 'native-base';

//Style
import { styles } from './SaveCustomer-style.js';

//Controls
import Actionbar from '../../components/Actionbar';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Loader from '../../components/Loader';
import EditText from '../../components/EditText';
import SubmitButton from '../../components/SubmitButton';
import CancelButton from '../../components/CancelButton';


//Constant
import AppTitle from '../../utils/AppTitle';
import R from '../../global/R';
import AppConstant from '../../utils/AppConstant'
import AppLogger from '../../utils/AppLogger'


//Database :
import Databs from '../../database/db'
import { localDB } from '../../database/constans'
import DatabaseTransation from '../../database/DatabaseTransation'
import { changeFocus } from '../../global/CommonUtils';
import { isEmpty, isNull, emailValidator, mobileValidator } from "../../global/CommonValidation";


export class SaveCustomer extends Component {
    constructor(props) {
        super(props)

        //onFocus Changes move to Next Input,
        this.mainInputTexts = {};
        this.inputs = {};
        //To Bind All Method
        this.focusNextField = this.focusNextField.bind(this);
        //onFocus Changes move to Next Input,


        this.state = {

            isLoading: false,


            cusName: '',
            cusTitle: '',
            cusCorporation: '',
            cusAddressOne: '',
            cusAddressTwo: '',
            cusCity: '',
            cusState: '',
            cusZip: '',
            cusOfficePhone: '',
            cusCellPhone: '',
            cusEmail: '',
            cusURL: '',
            cusType: '',

        }
    }

    /***RN Methods. */
    componentDidMount() {


    }
    /***RN Methods. */

    /** this Method is used to focus on next feild*/
    focusNextField(id) {
        this.inputs[id].focus();
    }
    /** this Method is used to focus on next feild*/


    /****
     * Set State TextChange Methods
     */

    setCusName = (name) => {
        this.setState({ cusName: name });
    }
    setCusTitle = (title) => {
        this.setState({ cusTitle: title });
    }
    setCusCorporation = (corporation) => {
        this.setState({ cusCorporation: corporation });
    }
    setCusAddressOne = (AddressOne) => {
        this.setState({ cusAddressOne: AddressOne });
    }
    setCusAddressTwo = (AddressTwo) => {
        this.setState({ cusAddressTwo: AddressTwo });
    }
    setCusCity = (city) => {
        this.setState({ cusCity: city });
    }
    setCusState = (_state) => {
        this.setState({ cusState: _state });
    }
    setCusZip = (zip) => {
        this.setState({ cusZip: zip });
    }
    setCusOfficePhone = (officePhone) => {
        this.setState({ cusOfficePhone: officePhone });
    }
    setCusCellPhone = (cellPhone) => {
        this.setState({ cusCellPhone: cellPhone });
    }
    setCusEmail = (email) => {
        this.setState({ cusEmail: email });
    }
    setCusURL = (_URL) => {
        this.setState({ cusURL: _URL });
    }
    setCusType = (_Type) => {
        this.setState({ cusType: _Type });
    }

    /****
     * Set State TextChange Methods
     */


    /***Submit Details in DB. */
    onSubmitClick = () => {
        try {
            if (this.isValidateInformation()) {
                this.insertCustomerInformationInDB();
            }
        } catch (e) {
            AppLogger.showInfo("$SaveCustomer.js#onSubmitClick: Error :" + e)
        }
    }

      /***InsertQuery in DB. */
    insertCustomerInformationInDB = () => {

        DatabaseTransation.executeQuery('INSERT INTO ' + localDB.tableName.tblCustomer
            + ' (cusName,cusTitle,cusCorporation,cusAddressOne,cusAddressTwo,cusCity,cusState,cusZip,cusOfficeTel,cusCellTel,cusEmail,cusURL,cusCustomerType) '
            + ' VALUES (:cusName,:cusTitle,:cusCorporation,:cusAddressOne,:cusAddressTwo,:cusCity,:cusState,:cusZip,:cusOfficeTel,:cusCellTel,:cusEmail,:cusURL,:cusCustomerType)',
            [this.state.cusName, this.state.cusTitle, this.state.cusCorporation, this.state.cusAddressOne,
            this.state.cusAddressTwo, this.state.cusCity, this.state.cusState, this.state.cusZip,
            this.state.cusOfficePhone, this.state.cusCellPhone, this.state.cusEmail, this.state.cusURL, this.state.cusType])
            .then(result => {
                // after successfully clear the componentValue.
                AppLogger.showToast("Record Saved SuccessFully");
                this.clearComponentValue();
            })
            .catch(error => {
                AppLogger.showError("$SaveCustoemer.js$ #DatabaseTransation.executeQuery.catch()# :: " + error);
            });

    }




    /***
     * Validate All details.
     * All Details Are already validate in editText Component.
     */
    isValidateInformation = () => {
        var isValid = false;
        Keyboard.dismiss();
        if (isEmpty(this.state.cusName)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.NAME);
        } else if (isEmpty(this.state.cusTitle)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.TITLE);
        } else if (isEmpty(this.state.cusCorporation)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.CORPORATION);
        } else if (isEmpty(this.state.cusAddressOne)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.ADDRESS_ONE);
        } else if (isEmpty(this.state.cusAddressTwo)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.ADDRSS_TWO);
        } else if (isEmpty(this.state.cusCity)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.CITY);
        } else if (isEmpty(this.state.cusState)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.STATE);
        } else if (isEmpty(this.state.cusZip)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.ZIP);
        } else if (isEmpty(this.state.cusOfficePhone)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.OFFICE_PHONE);
        } else if (!mobileValidator(this.state.cusOfficePhone)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.VALID_PHONE);
        } else if (isEmpty(this.state.cusCellPhone)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.CELL_PHONE);
        } else if (!mobileValidator(this.state.cusCellPhone)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.VALID_PHONE);
        } else if (isEmpty(this.state.cusEmail)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.EMAIL);
        } else if (!emailValidator(this.state.cusEmail)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.VALID_EMAIL);
        } else if (isEmpty(this.state.cusURL)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.URL);
        }
        else if (isEmpty(this.state.cusType)) {
            AppLogger.showToast(AppConstant.TOAST.CUSTOMER.TYPE);
        }

        else {
            isValid = true;
        }
        return isValid;
    }



    /** onCancel Clicked */
    onCancelClick = () => {
        AppLogger.showInfo("$SaveCustomer.js#onCancelClicked == >");
        Alert.alert(
            AppConstant.COMMON.TITLE_CUSTOMER,
            AppConstant.COMMON.MESSAGE_CUSTOMER,
            [
                { text: AppConstant.COMMON.BNT_CANCEL, onPress: () => this.onNegativeButtonClicked(), style: 'cancel' },
                { text: AppConstant.COMMON.BTN_OK, onPress: () => this.onPositiveButtonClicked() },
            ],
            { cancelable: false }
        );
    }
    //onNegativeButton : cancel
    onNegativeButtonClicked() {
        AppLogger.showInfo('$SaveCustomer# onNegativeButtonClicked()');
    }
    //onPositiveButton : Ok
    onPositiveButtonClicked() {
        AppLogger.showInfo('$SaveCustomer# onPositiveButtonClicked() :');
        this.clearComponentValue();

    }
    /** onCancel Clicked */

    clearComponentValue() {
        this.setState({
            cusName: '',
            cusTitle: '',
            cusCorporation: '',
            cusAddressOne: '',
            cusAddressTwo: '',
            cusCity: '',
            cusState: '',
            cusZip: '',
            cusOfficePhone: '',
            cusCellPhone: '',
            cusEmail: '',
            cusURL: '',
            cusType: '',
        });
    }



    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={(Platform.OS === 'ios') ? "padding" : null} >

                <View style={{ flex: 1, backgroundColor: R.colors.mainBgColor }}>
                    <Loader loading={this.state.isLoading} />

                    {/* Import Statusbar */}
                    <GeneralStatusBarColor
                        barStyle="light-content" />
                    <View style={styles.maincontainer}>
                        {/* Import Actionbar */}
                        <Actionbar title={AppTitle.CUSTOMER.CUSTOMER} nav={this.props.navigation}
                            showBack={false} showMenu={false}
                            showFilter={false} showSearch={false}
                            showNotification={false} />
                        <View style={{ backgroundColor: R.colors.mainBgColor, flex: 1 }}>
                            <ScrollView style={styles.scrollViewContainer} keyboardShouldPersistTaps='always'>
                                <View style={{ flex: 1, padding: R.dimens.DIMENS_SIZE_3 }}>

                                    <Card style={{ padding: R.dimens.DIMENS_SIZE_10, margin: R.dimens.DIMENS_SIZE_10 }}>
                                        <Text style={styles.noteStyle}>
                                            Primary Information.
                                    </Text>

                                        {/** Customer Name */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusName'] = input; }}
                                            reference={input => { this.inputs['etCusName'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusTitle') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusName')}
                                            returnKeyType={"next"}

                                            labelTitle="Name*"
                                            hint="Customer Name"
                                            value={this.state.cusName}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusName(item)}
                                        />

                                        {/** Customer Title */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusTitle'] = input; }}
                                            reference={input => { this.inputs['etCusTitle'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusCorporation') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusTitle')}
                                            returnKeyType={"next"}

                                            labelTitle="Title*"
                                            hint="Title"
                                            value={this.state.cusTitle}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusTitle(item)}
                                        />
                                        {/** Customer Corporation */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusCorporation'] = input; }}
                                            reference={input => { this.inputs['etCusCorporation'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etAddressOne') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusCorporation')}
                                            returnKeyType={"next"}

                                            labelTitle="Corporation*"
                                            hint="Corporation"
                                            value={this.state.cusCorporation}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusCorporation(item)}
                                        />
                                    </Card>
                                    <Card style={{ padding: R.dimens.DIMENS_SIZE_10, margin: R.dimens.DIMENS_SIZE_10 }}>
                                        <Text style={styles.noteStyle}>
                                            Address Information.
                                    </Text>

                                        {/** Address One */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etAddressOne'] = input; }}
                                            reference={input => { this.inputs['etAddressOne'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etAddressTwo') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etAddressOne')}
                                            returnKeyType={"next"}

                                            labelTitle="Address One*"
                                            hint="Address One"
                                            value={this.state.cusAddressOne}
                                            editable={true}
                                            multiline={true}
                                            maxLength={80}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusAddressOne(item)}
                                        />

                                        {/** Address Two */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etAddressTwo'] = input; }}
                                            reference={input => { this.inputs['etAddressTwo'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusCity') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etAddressTwo')}
                                            returnKeyType={"next"}

                                            labelTitle="Address Two*"
                                            hint="Address Two"
                                            value={this.state.cusAddressTwo}
                                            editable={true}
                                            multiline={true}
                                            maxLength={80}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusAddressTwo(item)}
                                        />
                                        {/** Customer City */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusCity'] = input; }}
                                            reference={input => { this.inputs['etCusCity'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusState') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusCity')}
                                            returnKeyType={"next"}

                                            labelTitle="City*"
                                            hint="City"
                                            value={this.state.cusCity}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusCity(item)}
                                        />

                                        {/** Customer State */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusState'] = input; }}
                                            reference={input => { this.inputs['etCusState'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusZip') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusState')}
                                            returnKeyType={"next"}

                                            labelTitle="State*"
                                            hint="State"
                                            value={this.state.cusState}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusState(item)}
                                        />


                                        {/** Customer Zip */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusZip'] = input; }}
                                            reference={input => { this.inputs['etCusZip'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etOfficePhone') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusZip')}
                                            returnKeyType={"next"}

                                            labelTitle="Zip*"
                                            hint="Zip Code"
                                            value={this.state.cusZip}
                                            editable={true}
                                            multiline={false}
                                            maxLength={10}
                                            keyboardType={R.strings.KEY_TYPE_NUMBER}
                                            onChangeText={(item) => this.setCusZip(item)}
                                        />


                                    </Card>
                                    <Card style={{ padding: R.dimens.DIMENS_SIZE_10, margin: R.dimens.DIMENS_SIZE_10 }}>
                                        <Text style={styles.noteStyle}>
                                            Other Information.
                                    </Text>

                                        {/** Office Telephone */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etOfficePhone'] = input; }}
                                            reference={input => { this.inputs['etOfficePhone'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCellPhone') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etOfficePhone')}
                                            returnKeyType={"next"}

                                            labelTitle="Office Phone*"
                                            hint="Office PhoneNo"
                                            value={this.state.cusOfficePhone}
                                            editable={true}
                                            multiline={false}
                                            maxLength={10}
                                            keyboardType={R.strings.KEY_TYPE_NUMBER}
                                            onChangeText={(item) => this.setCusOfficePhone(item)}
                                        />

                                        {/** Address Two */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCellPhone'] = input; }}
                                            reference={input => { this.inputs['etCellPhone'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusEmail') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCellPhone')}
                                            returnKeyType={"next"}

                                            labelTitle="Cell Phone*"
                                            hint="Cell Phone"
                                            value={this.state.cusCellPhone}
                                            editable={true}
                                            multiline={false}
                                            maxLength={10}
                                            keyboardType={R.strings.KEY_TYPE_NUMBER}
                                            onChangeText={(item) => this.setCusCellPhone(item)}
                                        />
                                        {/** Customer City */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusEmail'] = input; }}
                                            reference={input => { this.inputs['etCusEmail'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusURL') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusEmail')}
                                            returnKeyType={"next"}

                                            labelTitle="Email*"
                                            hint="Email Address"
                                            value={this.state.cusEmail}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_EMAIL}
                                            onChangeText={(item) => this.setCusEmail(item)}
                                        />

                                        {/** Customer State */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusURL'] = input; }}
                                            reference={input => { this.inputs['etCusURL'] = input; }}
                                            focusable={true}
                                            onSubmitEditing={() => { this.focusNextField('etCusType') }}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusURL')}
                                            returnKeyType={"next"}

                                            labelTitle="URL*"
                                            hint="URL"
                                            value={this.state.cusURL}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusURL(item)}
                                        />


                                        {/** Customer Zip */}
                                        <EditText

                                            // this below 6 line is for handle EditText focus 
                                            ref={input => { this.mainInputTexts['etCusType'] = input; }}
                                            reference={input => { this.inputs['etCusType'] = input; }}
                                            focusable={true}
                                            onFocus_flag={() => changeFocus(this.mainInputTexts, 'etCusType')}
                                            returnKeyType={"done"}

                                            labelTitle="Type*"
                                            hint="Customer Type"
                                            value={this.state.cusType}
                                            editable={true}
                                            multiline={false}
                                            maxLength={50}
                                            keyboardType={R.strings.KEY_TYPE_DEFAULT}
                                            onChangeText={(item) => this.setCusType(item)}
                                        />


                                    </Card>
                                </View>
                            </ScrollView>
                        </View>
                        <View flexDirection='row'>
                            <SubmitButton title="Save" visibility={true} position={"left"} onPress={() => this.onSubmitClick()} />
                            <CancelButton title="Cancel" position={"right"} onPress={() => this.onCancelClick()} />
                        </View>
                    </View>

                    {/* Create Database */}
                    <Databs />
                </View>
            </KeyboardAvoidingView>
        );
    }
}
export default SaveCustomer;
