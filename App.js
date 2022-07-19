import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';
import Entrar from './src/Entrar'

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
        <Button title='Entrar' onPress={this.entrar} />

        <Modal transparent={true} animationType='fade' visible={this.state.modalVisible}>
          <View style={styles.modalView}>
            <Entrar fechar={this.sair} />
          </View>
        </Modal>

        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDD'
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