import { ToastAndroid, Platform } from 'react-native';
//import Toast from 'react-native-simple-toast'
const AppLogger = {
    //Use in whole application.
    showInfo: function (param1) {
        if (true) {
            console.log(param1);          
        }
    },
    showError: function (param1) {
        if (true) {
            console.log(param1);
            console.log(param2);
        }
    },

    // showToast: function (message) {
    //     if (Platform.OS === 'android') {
    //         ToastAndroid.show(message, ToastAndroid.SHORT, ToastAndroid.CENTER);
    //     } else if (Platform.OS === "ios") {
    //         Toast.show(message);
    //     }
    // },

    // showToastLong: function (message) {
    //     if (Platform.OS === 'android') {
    //         ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.CENTER);
    //     } else if (Platform.OS === "ios") {
    //         //AlertIOS.alert(message);
    //         Toast.show(message);
    //     }
    // },
    // showToastWithGravity: function (message) {
    //     // // Toast duration constants
    //     // SHORT: number;
    //     // LONG: number;
    //     // // Toast gravity constants
    //     // TOP: number;
    //     // BOTTOM: number;
    //     // CENTER: number;      
    //     if (Platform.OS === 'android') {
    //         //ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.TOP);
    //         ToastAndroid.showWithGravity(message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    //     }
    //     else if (Platform.OS === "ios") {
    //         // AlertIOS.alert(message);
    //         Toast.show(message);
    //     }
    // },

}
export default AppLogger;