import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class src extends Component {
    render() {
        return (
            <View style={styles.conteiner}>
                <View style={styles.textView}>
                    <Text style={styles.text}>Seja Bem-vindo!</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button} title='Sair' onPress={this.props.fechar}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    conteiner: {
        width: '100%', 
        height: 350, 
        
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(52, 52, 52, 0.89)',
    },
    text: {
        color: '#FFF', 
        fontSize: 28,
        marginBottom: 10,
        textAlign: 'center'
    },
    textView: {
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        borderRadius: 15
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 5,
        borderRadius: 15
    }
});