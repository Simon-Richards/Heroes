import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const ProgressIndicator = ({ size }) => {
    return (
            <View style={styles.progressIndicatorStyle}>
                <ActivityIndicator size={size || 'large'} />
            </View>
    );
};

const styles = {
    progressIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { ProgressIndicator };
