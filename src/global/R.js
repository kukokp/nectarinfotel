import strings from './strings';
import * as dimens from './dimens';
import Colors from './colors';
import { Dimensions } from 'react-native';

const R = {
    strings: strings,
    dimens: dimens,
    colors: Colors,
    screen: Dimensions.get('window')
}

export default R;