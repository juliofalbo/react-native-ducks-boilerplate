import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';
import Login from '../views/Login';

const RootStackNavigator = StackNavigator({
    Login: {
        screen: Login
    }
}, {
        initialRouteName: 'Login',
        cardStyle: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        },
        navigationOptions: {
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