import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

    const { numeroAnterior, numero, clean, positionNegative, btnDelete, armarNumero, btnDividir, btnMultiplicar, btnRestar, btnSumar, calcular } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoPequeno}> {numeroAnterior} </Text>
                    )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'C'} color={'#9B9B9B'} action={clean} />
                <BotonCalc text={'+/-'} color={'#9B9B9B'} action={positionNegative} />
                <BotonCalc text={'del'} color={'#9B9B9B'} action={btnDelete} />
                <BotonCalc text={'/'} color={'#FF9427'} action={btnDividir} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'9'} action={armarNumero} />
                <BotonCalc text={'8'} action={armarNumero} />
                <BotonCalc text={'7'} action={armarNumero} />
                <BotonCalc text={'*'} color={'#FF9427'} action={btnMultiplicar}/>
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'6'} action={armarNumero} />
                <BotonCalc text={'5'} action={armarNumero} />
                <BotonCalc text={'4'} action={armarNumero} />
                <BotonCalc text={'+'} color={'#FF9427'} action={btnSumar} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'3'} action={armarNumero} />
                <BotonCalc text={'2'} action={armarNumero} />
                <BotonCalc text={'1'} action={armarNumero} />
                <BotonCalc text={'-'} color={'#FF9427'} action={btnRestar} />
            </View>

            {/* Fila de Botones */}
            <View style={styles.fila}>
                <BotonCalc text={'0'} action={armarNumero} ancho={true} />
                <BotonCalc text={'.'} action={armarNumero} />
                <BotonCalc text={'='} color={'#FF9427'} action={calcular} />
            </View>

        </View>
    );
};
