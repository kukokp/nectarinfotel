//export default class AppConstant {    
export default {
    BASE_URL: 'http://10.1.1.36:877/',

    /**API DETAILS */
    API: {
        CUSTOMER: {
            SAVE_CUSTOMER: 'api/Customer/SaveCustomer',
        },
        SYNC: {
            CUSTOMER: 'api/Customer/SyncCustomer',
        },
    },

    //TOAST_DETAILS
    TOAST: {

        CUSTOMER: {

            TOAST_SELECT_PROBLEM_TYPE: 'Select Problem Type first.',
            TOAST_SELECT_PROBLEM_REMARK: 'Enter Problem Remarks.',
            TOAST_SAVE_PROBLEM_LIST: 'Enter Problem first.',
            TOAST_MANAGER_NAME: 'Please Enter Manager Name.',
            TOAST_MANAGER_PHONE: 'Please Enter Manager Phone.',
            TOAST_ENDCALL_REMARK: 'Enter Problem Remarks.',
            TOAST_SIGNATURE: 'Please add your signature.',
        },

    },
};