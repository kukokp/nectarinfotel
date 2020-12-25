import { Header, Left, Right, Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Keyboard } from 'react-native';
import R from '../global/R';

/*
#   Actionbar props
-----------------------------------------------------------------------------------------------------------------------------------------------------
#   @showBack           :: hide/show back arrow on Actionbar            ??? Datatype :: boolean  ??? DefaultProps :: false
#   @showNotification   :: hide/show Notification arrow on Actionbar    ??? Datatype :: boolean  ??? DefaultProps :: false
#   @showMenu           :: hide/show Menu arrow on Actionbar            ??? Datatype :: boolean  ??? DefaultProps :: false
#   @showFilter         :: hide/show Filter arrow on Actionbar          ??? Datatype :: boolean  ??? DefaultProps :: false
#   @showSearch         :: hide/show Search arrow on Actionbar          ??? Datatype :: boolean  ??? DefaultProps :: false
#   @showCancel         :: hide/show cancel icon on Actionbar           ??? Datatype :: boolean  ??? DefaultProps :: false // It's use along side with searchIcon.
#   @onBackPress        :: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
#   @onNotificationPress:: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
#   @onMenuPress        :: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
#   @onlyDigit          :: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
#   @onFilterPress      :: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
#   @onSearchPress      :: To handle BackArrow press event              ??? Datatype :: function ??? DefaultProps :: ignore
*/

class Actionbar extends Component {

    constructor(props) {
        super(props)
    }

    // Handle menu pressed with keyboard close.
    onMenuIconPressed() {
        Keyboard.dismiss();
        this.props.nav.openDrawer()
    }
    // Handle menu pressed with keyboard close.

    render() {
        // const { showBack, showNotification, showMenu, showFilter, showSearch } = this.props;
        // console.log(this.props);      

        const showBack = this.props.showBack != undefined ? this.props.showBack : false;
        const showNotification = this.props.showNotification != undefined ? this.props.showNotification : false;
        const showMenu = this.props.showMenu != undefined ? this.props.showMenu : false;
        const showFilter = this.props.showFilter != undefined ? this.props.showFilter : false;
        const showSearch = this.props.showSearch != undefined ? this.props.showSearch : false;
        const showCancel = this.props.showCancel != undefined ? this.props.showCancel : false; //Zala.
        const onBackPress = this.props.onBackPress != undefined ? this.props.onBackPress : '';
        const onNotificationPress = this.props.onNotificationPress != undefined ? this.props.onNotificationPress : '';
        const onMenuPress = this.props.onMenuPress != undefined ? this.props.onMenuPress : '';
        const onFilterPress = this.props.onFilterPress != undefined ? this.props.onFilterPress : '';
        const onSearchPress = this.props.onSearchPress != undefined ? this.props.onSearchPress : '';
        return (
            <Header style={styles.headerStyle}>
                <Left style={{ flexDirection: 'row', flex: 1 }} >

                    <View style={{ flexDirection: 'row', height: '100%' }}>
                        {/* MENU ICON */}
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => onMenuPress()} style={showMenu ? styles.showIcon : styles.hideIcon}>
                                <Icon
                                    name={"menu"}
                                    style={styles.iconStyle}
                                    onPress={() => this.onMenuIconPressed()}
                                    type="MaterialIcons"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* BACK ICON */}
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => onBackPress()} style={showBack ? styles.showIcon : styles.hideIcon}>
                                <Icon
                                    name={Platform.OS === 'android' ? "arrow-back" : "chevron-left"}
                                    style={styles.iconStyle}
                                    type="MaterialIcons"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        {/* MENU TITLE */}
                        <Text style={styles.titleStyle}>
                            {this.props.title}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        {/* FILTER ICON */}
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => onFilterPress()} style={showFilter ? styles.showIcon : styles.hideIcon} >
                                <Icon type="FontAwesome" name={Platform.OS === 'android' ? "filter" : "filter"}
                                    style={[styles.iconStyle, { marginRight: R.dimens.DIMENS_SIZE_12 }]}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* SEARCH ICON */}
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => onSearchPress()} style={showSearch ? styles.showIcon : styles.hideIcon}>
                                <Icon name={Platform.OS === 'android' ? (showCancel ? "close" : "search") : (showCancel ? "close" : "search")}
                                    style={[styles.iconStyle, styles.iconRight]}
                                    type="FontAwesome"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* NOTIFICATION ICON */}
                        <View style={{ height: '100%', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => onNotificationPress()} style={showNotification ? styles.showIcon : styles.hideIcon}>
                                <Icon name={Platform.OS === 'android' ? "notifications-active" : "notifications-active"}
                                    style={[styles.iconStyle]}
                                    type="MaterialIcons"
                                    size={16}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Left>
            </Header>
        );
    }
}

const styles = StyleSheet.create({

    headerStyle: {
        backgroundColor: R.colors.actionBarBackgroundColor,
        height: R.dimens.ACTIONBAR_HEIGHT,
    },

    iconStyle: {
        //color: R.colors.colorWhite,
        color: R.colors.iconColor,
    },

    titleStyle: {
        color: R.colors.actionBarTitleColor,
        textAlignVertical: 'center',
        height: '100%',
        fontSize: R.dimens.FONT_SIZE_18,
        marginLeft: R.dimens.DIMENS_SIZE_12,
        fontWeight: 'bold',
    },

    iconLeft: {
        marginLeft: R.dimens.DIMENS_SIZE_8,
    },

    iconRight: {
        marginRight: R.dimens.DIMENS_SIZE_4,
    },

    showIcon: {
        display: 'flex'
    },

    hideIcon: {
        display: 'none'
    }
})


export default Actionbar