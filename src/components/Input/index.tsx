import React from 'react';
import { Text, TextInput, KeyboardType } from 'react-native';

import estilos from './estilos';

interface Props {
    label: string;
    value: string;
    isPassword?: boolean;
    keyboardType?: KeyboardType;
    placeholderTextColor?: string;
    error?: string;
    onChange: (value: string) => void;
}

export default function Input(props: Props) {
    const { label, value, isPassword, keyboardType, onChange } = props;

    return (
        <>
            <TextInput
                value={value}
                onChangeText={onChange}
                placeholderTextColor={props.placeholderTextColor === undefined ? "#FFF" : props.placeholderTextColor }
                placeholder={label}
                style={[estilos.input]}
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
            />
            {props.error && <Text style={estilos.erros}>{props.error}</Text>}
        </>
    );
}
