import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string,
    color?: string,
    ancho?: boolean,
    action: (NumberText: string) => void,
}

export const BotonCalc = ({text, color = '#2D2D2D', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity
        onPress={ () => action(text) }
    >
        <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
                ...styles.button,
                backgroundColor: color,
                width: (ancho) ? 180 : 80,
            }}
        >
            <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    ...styles.buttonText,
                    color: color === '#9B9B9B' ? 'black' : 'white',
                }}
            >
                {text}
            </Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: '300',
    },
});
