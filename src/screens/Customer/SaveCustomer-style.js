import { StyleSheet, Dimensions } from 'react-native';
import R from '../../global/R';

export const styles = StyleSheet.create({

    maincontainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
    },

    imageBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: R.dimens.FONT_SIZE_10,
    },

    imageStyle: {
        resizeMode: 'contain',
        height: R.dimens.DIMENS_SIZE_120,
        width: R.dimens.DIMENS_SIZE_120,
        marginTop: R.dimens.DIMENS_SIZE_25,
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
        flex:0.9,
        fontSize: R.dimens.FONT_SIZE_14,
        color: R.colors.colorWhite,
    },

    iconStyle: {
        flex:0.1,
        color: R.colors.colorWhite,
        fontSize: R.dimens.DIMENS_SIZE_20,
    }

})