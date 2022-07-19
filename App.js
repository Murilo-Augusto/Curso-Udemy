import { StatusBar, Touchable } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, Modal, TouchableOpacity} from 'react-native';
import Calcular from './src/Calcular'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    this.setState({ modalVisible: true })
  }

  sair() {
    this.setState({ modalVisible: false })
  }

  render() {
    return (
      <View style={styles.container} >
        <StatusBar hidden/>
        <View style={styles.firstPart} >
          <Image 
          style={styles.logoImage}
          source={require('./src/img/logo.png')}
          />
          <Text style={styles.title} >Qual melhor opção?</Text>
        </View>
        <View style={styles.secondPart}>
          <Text style={styles.label} >Álcool (preço por litro):</Text>
          <TextInput style={styles.textInput} placeholder='Idade' keyboardType='numeric' />
          <Text style={styles.label} >Gasolina (preço por litro):</Text>
          <TextInput style={styles.textInput} placeholder='Idade' keyboardType='numeric' />
          <TouchableOpacity style={styles.button} onPress={this.entrar} ><Text style={styles.textButton} >Calcular</Text></TouchableOpacity>
        </View>
        <Modal transparent={true} animationType='fade' visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <Calcular fechar={this.sair} />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
    padding: 20,
  },
  firstPart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImage: {
    marginBottom: 24,
  },
  title: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold'
  },
  secondPart: {
    flex: 1,
    width: '99%',
  },
  label: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    height: 48,
    backgroundColor: '#FFF',
    padding: 10,
    fontSize: 24,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ef4130',
    borderRadius: 5
  },
  textButton: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  modalView: {
    flex: 1,
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;