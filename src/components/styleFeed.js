import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    feedArea: {

    },
    profileView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userName: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    feedImage: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    buttonArea: {
        flexDirection: 'row',
        padding: 5,

    },
    sendButton: {
        paddingLeft: 8,
    },
    likeIcon: {
        width: 33,
        height: 33, 
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 8
    },
    descriptionView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descriptionName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        paddingLeft: 8,

    },
    descriptionText: {
        paddingLeft: 8,
        fontSize: 15,
        color: '#000',
    },
    
});

export default styles;