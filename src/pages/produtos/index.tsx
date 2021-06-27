import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
    FlatList,
    BorderlessButton as Button,
} from 'react-native-gesture-handler';

import estilos from './estilos';
import { getProdutos } from '../../services/api';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function Produtos({ navigation }: any) {
    const [produtos, setProdutos] = useState(Object);

    function goPageHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    useEffect(() => {
        getProdutos().then((items) => setProdutos(items.sort()));
        navigation.setOptions({
            headerRight: () => (

                <Button
                    style={estilos.exitButton}
                    onPress={goPageHome}
                >
                    <Text>Sair</Text>
                </Button>
            ),
        });
    }, []);

    return (<>
        <View style={estilos.container}>
            <FlatList style={estilos.informacao}
                data={produtos}
                renderItem={({ item, index }) => (
                    <View style={estilos.informacao}>
                        <View style={estilos.divisor}>
                            <Text style={estilos.nome}>{item.name}</Text>
                            <Text style={estilos.descricao}>{"Fabricante: " + item.factory.name}</Text>
                            <Text style={estilos.descricao}>Estoque: {item.amount}</Text>
                            <Text style={estilos.preco}>{
                                Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(item.price)
                            }
                            </Text>
                        </View>
                    </View>
                )}
                keyExtractor={({ id }) => String(id)}
            />
        </View>
        <View style={estilos.divisor} />
    </>

    );
}