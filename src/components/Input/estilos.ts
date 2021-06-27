import { Dimensions, StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default StyleSheet.create({
    label: {
        fontSize: 20,
        marginBottom: 5,
        color: cores.branco,
        fontFamily: 'Roboto',
    },
    input: {
        fontFamily: 'Roboto',
        color: cores.branco,
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: cores.branco,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: Dimensions.get('screen').width - 40,
    },
    placeholder: {
        color: cores.branco
    }, 
    erros: {
        color: cores.laranja
    }
});
