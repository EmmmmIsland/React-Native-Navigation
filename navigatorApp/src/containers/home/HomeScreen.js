import React, {Component} from 'react';

import {
    View,
    Image,
    StyleSheet,
    Button,
    Dimensions,
} from 'react-native';


export default class HomeScreen extends Component {
    static navigationOptions = {
        title: '首页',
        tabBarLabel: '首页',
        headerRight: <Button
            title="设置"
            onPress={() => {

            }}
        />,
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../assets/me.png')}
                style={[{tintColor: tintColor}, styles.icon]}
            />
        ),
    };


    render() {
        const {navigate} = this.props.navigation;

        return (

            <View>
                <View style={{zIndex: 1}}>
                    <Button title="地区选择" onPress={() => {
                        navigate('List')
                    }}/>
                    <Button title="地区选择2" onPress={() => {
                        navigate('ListThree')
                    }}/>
                </View>
            </View>



        );
    }
};
const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});