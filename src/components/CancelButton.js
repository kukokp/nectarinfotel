import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import R from '../global/R';

/*
#   Cancel button props
------------------------------------------------------------------------------------------------------------------------------------------
#   @position   :: Cancel button display position   ??? Datatype :: String      ??? DefaultProps :: 'left'      ### ['left' || 'right']
#   @title      :: Cancel button title              ??? Datatype :: String      ??? DefaultProps :: 'cancel'    
#   @onPress    :: Handle button press event        ??? Datatype :: onPress()   ??? DefaultProps :: ''          
*/

export default class CancelButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const title = this.props.title === undefined ? '' : this.props.title;
        const position = this.props.position === undefined ? 'left' : this.props.position;
        const onPress = this.props.onPress != undefined ? this.props.onPress : '';
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => onPress()} activeOpacity={0.7}>
                    <View style={[this.styles().btnView, position == 'left' ? this.styles().btnPositionLeft : this.styles().btnPositionRight]}>
                        <Text style={[this.styles().btnTitle]}>
                            {title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    // buttonView and buttonText style
    styles = () => {
        return {
            btnTitle: {
                color: R.colors.primaryDark,
                fontSize: R.dimens.FONT_SIZE_14,
                alignSelf: 'center',
            },
            btnView: {
                height: R.dimens.BUTTON_HEIGHT,
                backgroundColor: R.colors.greyLight,
                borderWidth: 1,
                padding: R.dimens.PADDING_DEFAULT_2,
                borderColor: R.colors.primaryDark,
                borderRadius: 6,
                justifyContent: 'center',
                margin: R.dimens.MARGIN_DEFAULT_4,
            },
            btnPositionLeft: {
                marginLeft: R.dimens.MARGIN_BLOCK_1_LEFT_CORNER,
                marginTop: R.dimens.MARGIN_BLOCK_1_TOP_CORNER,
                marginBottom: R.dimens.MARGIN_BLOCK_1_BOTTOM_CORNER,
                marginRight: R.dimens.MARGIN_BLOCK_1_RIGHT_CORNER,
            },
            btnPositionRight: {
                marginLeft: R.dimens.MARGIN_BLOCK_2_LEFT_CORNER,
                marginTop: R.dimens.MARGIN_BLOCK_2_TOP_CORNER,
                marginBottom: R.dimens.MARGIN_BLOCK_2_BOTTOM_CORNER,
                marginRight: R.dimens.MARGIN_BLOCK_2_RIGHT_CORNER,
            },
            btnPositionCenter: {
                margin: R.dimens.MARGIN_DEFAULT_4,
            }
        }
    }

}