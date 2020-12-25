import React, { Component } from 'react';
import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';
import R from '../global/R';

const Loader = props => {
    const { loading } = props;
    return (
        <Modal transparent={true} animationType={'none'} visible={loading} onRequestClose={() => { console.log('close modal') }}>
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <ActivityIndicator color={'black'} />
                    <Text style={styles.text}>Loading...</Text>
                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: R.dimens.DIMENS_SIZE_100,
        width: R.dimens.DIMENS_SIZE_100,
        borderRadius: R.dimens.DIMENS_SIZE_10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 8,
    },
    text: {
        marginLeft: 16,
        fontSize: 18,
        fontWeight: '500',
    }
});

export default Loader;




// import React, { Component } from 'react';
// import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native';
// import R from '../global/R';

// const Loader = props => {
//     const { loading } = props;
//     return (
//         <Modal transparent={true} animationType={'none'} visible={loading} onRequestClose={() => { console.log('close modal') }}>
//             <View style={styles.modalBackground}>
//                 <View style={styles.activityIndicatorWrapper}>
//                     <ActivityIndicator size="large" animating={loading} color={R.colors.primary} />
//                     <Text style={{ marginTop: -20 }}>Please wait</Text>
//                 </View>
//             </View>
//         </Modal>
//     )
// }


// const styles = StyleSheet.create({
//     modalBackground: {
//         flex: 1,
//         alignItems: 'center',
//         flexDirection: 'column',
//         justifyContent: 'space-around',
//         backgroundColor: '#00000040'
//     },
//     activityIndicatorWrapper: {
//         backgroundColor: '#FFFFFF',
//         height: R.dimens.DIMENS_SIZE_100,
//         width: R.dimens.DIMENS_SIZE_100,
//         borderRadius: R.dimens.DIMENS_SIZE_10,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-around'
//     }
// });

// export default Loader;