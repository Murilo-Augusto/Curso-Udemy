import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import styles from '../components/styleFeed'

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data,
            likeIcon: require('../img/like.png'),
        };
        this.Like = this.Like.bind(this);
        this.NumberLikes = this.NumberLikes.bind(this);

    }
    
    NumberLikes(likers) {
        let feed = this.state.feed;

        if(feed.likers <= 0) {
            return;
        }
        return(
            <Text style={styles.likes}>
                {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );
    }

    Like() {
        let feed = this.state.feed;
        // if(feed.likeada === false) {
        //     this.setState({
        //         likeIcon: require('../img/likeada.png'),
        //     });
        //     feed.likeada = true;
        //     feed.likers++;
        //     return;
        // }
        // this.setState({
        //     likeIcon: require('../img/like.png'),
        // });
        // feed.likeada = false;
        // feed.likers--;

        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1
                }
            });

        }
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
                    <TouchableOpacity onPress={this.Like}>
                        <Image 
                        source={this.state.feed.likeada === false ? require('../img/like.png') : require('../img/likeada.png')}
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

                {this.NumberLikes(this.state.feed.likers)}

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

