import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from '../views/Login';

const RootStackNavigator = StackNavigator({
    Login: {
        screen: Login
    }
}, {
        initialRouteName: 'Login',
        navigationOptions:{
            header: null
        }
    })

export default class Routes extends React.PureComponent {
    render() {
        return (
            <RootStackNavigator screenProps={this.props} />
        )
    }
}