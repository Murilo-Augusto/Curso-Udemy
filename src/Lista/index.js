import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../components/styleFeed'

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };


    }
    
    
    render() {
        return (
            <View style={styles.feedArea}>
                
                <View style={styles.profileView}>
                    <Image 
                    source={{uri: this.state.feed.imgperfil}}
                    style={styles.profilePicture}
                    />
                    <Text style={styles.userName} > {this.state.feed.nome} </Text>
                </View>

                <Image 
                resizeMode='cover'
                source={{uri: this.state.feed.imgPublicacao}}
                style={styles.feedImage}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity>
                        <Image 
                        source={require('../img/like.png')}
                        style={styles.likeIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sendButton} >
                        <Image 
                        source={require('../img/send.png')}
                        style={styles.likeIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.descriptionView}>
                    <Text style={styles.descriptionName}> 
                        {this.state.feed.nome} 
                    </Text>
                    <Text style={styles.descriptionText}> 
                        {this.state.feed.descricao} 
                    </Text>
                </View>
            </View>
        );
    }
}

