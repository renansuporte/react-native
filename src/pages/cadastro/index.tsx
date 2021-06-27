import React, { useState } from 'react';
import { View, Text, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';

import estilos from './estilos';
import User from '../../models/Usuario';
import { validadePassword, validateEmail, validateField } from '../../util/validation';
import Input from '../../components/Input';
import { addUsuario } from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cadastro({ navigation }: any) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function goPageHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    function onSubmit(): void {
        let user: User = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
        };

        if (!validateField(name, 'Informe seu nome')) {
            return;
        }
        if (!validateField(age, 'Informe sua idade')) {
            return;
        }
        if (!validateField(address, 'Informe seu endereço')) {
            return;
        }
        if (!validateField(email, 'Informe seu e-mail')) {
            return;
        }
        if (!validateEmail(email)) {
            Alert.alert(
                'E-mail inválido',
                'O endereço de e-mail informado não é válido'
            );
            return;
        }
        if (!validateField(password, 'Informe sua senha')) {
            return;
        }

        if (!validadePassword(password, 'Qualidade da senha fora do padrão definido')) {
            return;
        }
        user.name = name;
        try {
            user.age = parseInt(age);

            if (isNaN(user.age)) {
                Alert.alert(
                    'Idade inválida',
                    'Informe somente números no campo "Idade"'
                );
            }

            if (user.age < 1) {
                Alert.alert('Idade inválida', 'Informe uma idade válida');
                return;
            }
        } catch (error) {
            Alert.alert('Idade inválida', 'Informe um valor numérico');
            return;
        }
        user.address = address;
        user.email = email;
        user.userPassword = password;

        addUsuario(user)
            .then((result) => {
                if (!result) {
                    Alert.alert(
                        'Erro ao Cadastrar',
                        'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                    );
                    return;
                }

                Alert.alert(
                    'Cadastro Concluído',
                    'Cadastro concluído com êxito'
                );

                goPageHome();
            })
            .catch((error) => {
                console.error('UserRegistration.onSubmit');
                console.error(error);
                Alert.alert(
                    'Erro ao Cadastrar',
                    'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                );
            });
    }

    return (

        <ScrollView style={estilos.ajusteTela}>
            <KeyboardAvoidingView behavior="padding" enabled >
                <View style={estilos.container}>
                    <Input label="Nome Completo" value={name} onChange={setName} />
                    <Input
                        label="Idade"
                        value={age}
                        onChange={setAge}
                        keyboardType="number-pad"
                    />
                    <Input label="Endereço" value={address} onChange={setAddress} />
                    <Input
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        label="Senha"
                        value={password}
                        onChange={setPassword}
                        isPassword
                    />

                    <TouchableOpacity
                        style={estilos.buttonPrimary}
                        onPress={onSubmit}
                    >
                        <Text style={estilos.label}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilos.buttonDanger}
                        onPress={goPageHome}
                    >
                        <Text style={estilos.label}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}