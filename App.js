import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyA7nPfCkuaiU_1mOLP0__pqioSlUno1I24",
            authDomain: "auth-16542.firebaseapp.com",
            databaseURL: "https://auth-16542.firebaseio.com",
            projectId: "auth-16542",
            storageBucket: "auth-16542.appspot.com",
            messagingSenderId: "924791070380"
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
