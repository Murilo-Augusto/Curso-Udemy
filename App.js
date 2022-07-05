import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: '',
      sexos: [
        {key: 1, nome: 'Feminino'},
        {key: 2, nome: 'Masculino'},
        {key: 3, nome: 'Não-binário'}, 
        {key: 4, nome: 'Outros'}, 
      ]
    };
  }
  
  render() {

    let sexoItem = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })

		return (
			<View style={styles.container} >
        <Text style={styles.titulo}>BANCO REACT</Text>
          <TextInput style={styles.textInput} placeholder='Nome' underlineColorAndroid="transparent"/>
          <TextInput style={styles.textInput} placeholder='Idade'/>
          <Picker
            selectedValue={this.state.pizza}
            onValueChange={ (itemValue, itemIndex) =>  this.setState({pizza: itemValue}) }
          >
            {sexoItem}
          </Picker>



        {/* <Switch 
          value={this.state.status}
          onValueChange={ (valorSwitch) => this.setState({status: valorSwitch}) }
          thumbColor='#FF0000'
        />

        <Text style={{textAlign: 'center', fontSize: 30}}>{(this.state.status) ? 'Ativo' : 'Inativo'}</Text> */}

				<StatusBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
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
    borderRadius: 10
  }

});

export default App;