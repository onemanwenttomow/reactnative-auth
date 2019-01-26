import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password);
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}

                    />
                </CardItem>

                <CardItem>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm
