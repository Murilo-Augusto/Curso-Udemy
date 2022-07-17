import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

//Para instalar: npm install @react-native-async-storage/async-storage​
import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      nome: '',
    };

    this.GravaNome = this.GravaNome.bind(this);
  }

  //ComponentDidMount - Quando o componente é montado em tela
  async componentDidMount() {
    await AsyncStorage.getItem('nome').then( (value) => {
      this.setState({nome: value});
    })
  }

  //ComponentDidUpdate - toda vez que um state é atualizado fazer algo..
  async componentDidUpdate(_, prevState) {
    const nome = this.state.nome;

    if(prevState !== nome) {
      await AsyncStorage.setItem('nome', nome);
    }
  }
  
  GravaNome() {
    this.setState({
      nome: this.state.input
    });
    alert('Salvo com sucesso!');
    Keyboard.dismiss();
  }

  render() {
		return (
			<View style={styles.container} >

        <View style={styles.inputView}>
          <TextInput 
          style={styles.input}
          value={this.state.input}
          onChangeText={ (text) => this.setState({ input: text }) }
          underlineColorAndroid='transparent'
          />

          <TouchableOpacity onPress={this.GravaNome}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.nome}>{this.state.nome}</Text>

				<StatusBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    marginTop: 20,
    alignItems: 'center',
	},
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,

  },
  textButton: {
    backgroundColor: '#222',
    color: '#FFF',
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
    alignItems: 'center'
  }
});

export default App;