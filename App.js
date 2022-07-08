import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Switch, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import Slider from '@react-native-community/slider'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '', 
      sexo: 0,
      sexos: [
        {key: 1, nome: 'Gênero'},
        {key: 2, nome: 'Feminino'},
        {key: 3, nome: 'Masculino'},
        {key: 4, nome: 'Não-binário'}, 
        {key: 5, nome: 'Outros'}, 
      ],
      sliderValue: 500,
      switchStatus: false
    };

    this.mostrarDados = this.mostrarDados.bind(this);
    this.limparDados = this.limparDados.bind(this);
  }

  mostrarDados() {
    if (this.state.nome === '' || this.state.idade === 0) {
      alert('Preencha todos os campos!!')
      return
    }
    alert(
      `Conta aberta com sucesso!! \n\n Nome: ${this.state.nome} \n Idade: ${this.state.idade} \n Sexo: ${this.state.sexos[this.state.sexo].nome} \n Limite da conta: R$${this.state.sliderValue.toFixed(0)} \n Conta Estudante: ${((this.state.switchStatus) ? 'Ativa' : 'Inativa')}`
    )
    this.limparDados()
  }

  limparDados() {
    this.setState({
      nome: '',
      idade: '',
      sexo: 0,
      sliderValue: 500,
      switchStatus: false
    })
  }
  
  render() {

    let sexoItem = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

		return (
			<View style={styles.container} >
        <Text style={styles.titulo}>BANCO REACT</Text>
        <TextInput style={styles.textInput} placeholder='Nome' underlineColorAndroid="transparent" onChangeText={ (texto) => this.setState({nome: texto}) } value={this.state.nome} />

        <TextInput style={styles.textInput} placeholder='Idade' keyboardType='numeric' onChangeText={ (texto) => this.setState({idade: texto}) } value={this.state.idade} />

        <Picker
          selectedValue={this.state.sexo}
          onValueChange={ (itemValue, itemIndex) =>  this.setState({sexo: itemValue}) }
          style={styles.pickerComponent}
        >
          {sexoItem}
        </Picker>

        <View style={styles.sliderConteiner}>
          <Text style={styles.sliderText} >Seu limite: R${this.state.sliderValue.toFixed(0)}</Text>
          <Slider
            minimumValue={500}
            maximumValue={5000}
            onValueChange={ (valorSelecionado) => this.setState({sliderValue: valorSelecionado}) }
            value={this.state.sliderValue}
            style={styles.sliderComponent}
            thumbTintColor='orange'
            maximumTrackTintColor='orange'
            minimumTrackTintColor='orange'
          />
        </View>

        <View style={styles.switchConteiner} >
          <Text style={styles.switchText} >Estudante: </Text>
          <Switch
            value={this.state.switchStatus}
            onValueChange={ (valorSwitch) => this.setState({switchStatus: valorSwitch}) }
            style={styles.swtichComponent}
          />
        </View>

        <View style={styles.buttonConteiner}>
          <TouchableOpacity
            style={styles.buttonComponent}
            onPress={this.mostrarDados}
          >
            <Text style={styles.buttonText}>Abrir conta</Text>
          </TouchableOpacity>
        </View>

				<StatusBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    margin: 10
	},
  titulo: {
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    color: '#ff8c00',
    marginTop: 10
  },
  textInput: {
    height: 45,
    borderWidth: 1,
    borderColor: 'orange',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  pickerComponent: {
    height: 45,
    borderWidth: 1,
    borderColor: 'orange',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
    color: 'gray'
  },
  sliderConteiner: {
    alignItems: 'center',
  },
  sliderText: {
    color: 'gray',
    fontSize: 18,
    alignSelf: 'flex-start',
    margin: 10,

  },
  sliderComponent: {
    width: '80%',
    margin: 10,
    color: 'orange'
  },
  switchConteiner: {
    flexDirection: 'row',
  },
  switchText: {
    margin: 10,
    fontSize: 20,
    color: 'gray'
  },
  swtichComponent: {
    margin: 2
  },
  buttonConteiner: {
    alignItems: 'center',
    marginTop: 100,
  },
  buttonComponent: {
    alignItems: 'center',
    padding: 10,
    width: 200,
    backgroundColor: 'orange',
    borderRadius: 5
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#DDDDDD',
    fontSize: 20
  },
});

export default App;