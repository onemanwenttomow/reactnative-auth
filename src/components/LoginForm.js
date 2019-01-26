import React, { Component } from 'react';
import { Button, Card, CardItem, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
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
                <CardItem />

                <CardItem>
                    <Button>
                        Login
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm
