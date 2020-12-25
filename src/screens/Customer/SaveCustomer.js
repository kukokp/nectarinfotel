import React, { Component } from 'react'
import { View, Text, Image } from 'react-native';
import { Card, Icon } from 'native-base';

//Style
import { styles } from './SaveCustomer-style.js';

//Controls
import Actionbar from '../../components/Actionbar';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import Loader from '../../components/Loader';


//Constant
import AppTitle from '../../utils/AppTitle';
import R from '../../global/R';



export class SaveCustomer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
    
            contactNo: '',
            emailAddress: '',
            companyName: '',
            companyAddress: '',
            companyLogo: '',
        }
    }

    /***RN Methods. */
    componentDidMount() {
    
        
    }
    /***RN Methods. */
   

    render() {
        return (
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
                    <View style={{ backgroundColor: R.colors.mainBgColor }}>
                        
                    </View>
                </View>
            </View>
        );
    }
}
export default SaveCustomer;
