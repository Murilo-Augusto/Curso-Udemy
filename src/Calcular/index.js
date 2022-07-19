import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Calcular extends Component {
    render() {
        return (
            <View style={styles.mainConteiner}>
                <ScrollView>
                    <TouchableOpacity style={styles.button} onPress={this.props.fechar}><Ionicons name="exit-outline" size={24} color="red" /></TouchableOpacity>
                    <View style={styles.conteiner}>
                        <Text style={styles.title}>Título</Text>
                        <Text style={styles.content}>(CONTEUDO)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </Text>
                    </View>
                    <View style={styles.conteiner}>
                        <Text style={styles.title}>Conteúdo</Text>
                        <Text style={styles.content}>(CONTEUDO)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It </Text>
                        <Text style={styles.content}>(CONTEUDO)Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    mainConteiner: {
        flex: 1,
        width: '100%', 
        height: 350, 
        padding: 17,
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor: 'rgba(52, 52, 52, 0.89)',
    },
    button: {
        alignSelf: 'flex-end'
    },
    conteiner: {
        marginBottom: 20,
    },
    title: {
        color: '#00E7FF',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    content: {
        color: '#FFF', 
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'justify',
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
    },
    
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 5,
        borderRadius: 15
    }
});