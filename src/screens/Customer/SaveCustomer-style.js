import { StyleSheet, Dimensions } from 'react-native';
import R from '../../global/R';

export const styles = StyleSheet.create({

    maincontainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },


    titleStyle: {
        fontSize: R.dimens.FONT_SIZE_16,
        color: R.colors.colorWhite,
        marginTop: R.dimens.DIMENS_SIZE_10,
        fontWeight: '300'
    },

    cardStyle: {
        flex: 1,
        margin: R.dimens.DIMENS_SIZE_10,
    },

    labelStyle: {
        flex: 0.9,
        fontSize: R.dimens.FONT_SIZE_14,
        color: R.colors.colorWhite,
    },

    iconStyle: {
        flex: 0.1,
        color: R.colors.colorWhite,
        fontSize: R.dimens.DIMENS_SIZE_20,
    },

    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flex: 1,
        backgroundColor: R.colors.mainBgColor,
    },

    noteStyle: {
        color: R.colors.mainBgColor,
        marginTop: R.dimens.DIMENS_SIZE_4,
        marginBottom: R.dimens.DIMENS_SIZE_4,
        paddingTop: R.dimens.PADDING_DEFAULT_4,
        paddingBottom: R.dimens.PADDING_DEFAULT_4,
        fontSize: R.dimens.mediumText,
        fontWeight: 'bold',
    },



})