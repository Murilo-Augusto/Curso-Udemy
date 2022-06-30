import { StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			numero: 0,
			botao: 'INICIAR',
			ultimoTempo: null
		};

		this.timer = null;
		this.iniciar = this.iniciar.bind(this);
		this.limpar = this.limpar.bind(this);
	}

	iniciar() {
		if(this.timer != null) {
			clearInterval(this.timer);
			this.timer = null;
			this.setState({botao: 'INICIAR'});
		} else {
			this.timer = setInterval( ()=> {
				this.setState({ numero: this.state.numero + 0.1 })
			}, 100);
			this.setState({botao: 'PARAR'});
		}
	}

	limpar() {
		if(this.timer != null) {
			clearInterval(this.timer);
			this.timer = null;
			this.setState({botao: 'INICIAR'});
		}
		this.setState({
			ultimoTempo: this.state.numero,
			numero: 0
		});
	}
	
	render() {
		return (
			<View style={styles.container} >

				<Image 
					source={require('./src/cronometro.png')}
					style={styles.cronometro}
				/>

				<Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>
				
				<View style={styles.btnArea}>
					<TouchableOpacity style={styles.btn} onPress={this.iniciar}>
						<Text style={styles.btnTexto}>{this.state.botao}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn} onPress={this.limpar}>
						<Text style={styles.btnTexto}>LIMPAR</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.areaUltimoTempo}>
						<Text style={styles.textoUltimoTempo}>
							{this.state.ultimoTempo > 0 ? 'Último tempo: ' + this.state.ultimoTempo.toFixed(2) + 's': ''}
						</Text>
				</View>
				<StatusBar />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00aeef'
	},
	timer: {
		marginTop: -160,
		color: '#FFF',
		fontSize: 65,
		fontWeight: 'bold'
	},
	btnArea: {
		flexDirection: 'row',
		marginTop: 80,
		height: 40,
	},
	btn: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
		height: 40,
		margin: 17,
		borderRadius: 9,
	},
	btnTexto: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#00aeef',
	},
	areaUltimoTempo: {
		marginTop: 40,
	},
	textoUltimoTempo: {
		fontSize: 25,
		fontStyle: 'italic',
		color: '#FFF'

	}
});

export default App;