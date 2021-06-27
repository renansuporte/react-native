import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

import Input from '../../components/Input';
import { autenticar } from '../../services/api';
import { validateEmail, validateField } from '../../util/validation';
import estilos from './estilos';

export default function Signin({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function login(): Promise<any> {
        setIsLoading(true);

        if (!validateEmail(email)) {
            if (email === undefined || email.trim() === '') {
                Alert.alert('Endereço de e-mail é obrigatório!');
            } else {
                Alert.alert('Endereço de e-mail inválido!');
            }
            setIsLoading(false);
            return;
        }

        if (!validateField(password, 'Senha não pode ser vazia!')) {
            setIsLoading(false);
            return;
        }

        autenticar(email, password)
            .then((result) => {
                setIsLoading(false);
                if (!result) {
                    setIsLoading(false);
                    Alert.alert(
                        'Erro!',
                        'E-mail/Senha Inválido!.'
                    );
                    setIsLoading(false);
                    return;
                }
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Produtos' }],
                });
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                Alert.alert(
                    'Erro ao Autenticar',
                    'Houve um erro ao tentar logar.\nContate o administrador.'
                );
            });
    }

    function openUserRegistration(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Cadastro' }],
        });
    }

    return (<>
        <View style={estilos.container} >
            <Image
                style={estilos.logo}
                source={require('../../../assets/logo.png')}
            />

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

            {!isLoading ? (
                <View>
                    <TouchableOpacity
                        style={estilos.buttonPrimary}
                        onPress={login}
                    >
                        <Text style={estilos.label}>ENTRAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilos.buttonLink}
                        onPress={openUserRegistration}
                    >
                        <Text style={[estilos.label, estilos.labelLink]}>REGISTRAR-SE</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                    <View>
                        <ActivityIndicator
                            animating={isLoading}
                            size="large"
                            color="#EEEBFF"
                        />
                    </View>
                )}

        </View>
        <View>
            <Image
                style={estilos.logoImpacta}
                source={require('../../../assets/logo-impacta.png')}
            />
        </View>
    </>
    );
}
