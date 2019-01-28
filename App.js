import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Constants } from 'expo';
import * as firebase from 'firebase';
import { Header, Button, Spinner, CardItem } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    componentWillMount() {
        firebase.initializeApp(Constants.manifest.extra.firebaseConfig);
        console.log(Constants.manifest.extra.firebaseConfig);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    onButtonPress() {
        firebase.auth().signOut();
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardItem>
                        <Button onPress={this.onButtonPress.bind(this)}>Log Out</Button>
                    </CardItem>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header headerText="Authentication" />
                {this.renderContent()}
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
