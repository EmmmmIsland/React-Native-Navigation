import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';
import icon from '../../../assets/splash.png'


export default class ChooseScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '我的',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../assets/me.png')}
                style={[{tintColor: tintColor}, styles.icon]}
            />
        ),
    });

    constructor(props, context) {
        super(props, context);
    }


    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        console.log('params',params)

        return (
            <View>
                <View style={{marginTop: 50,justifyContent:'space-around'}}>
                    <View style={{flexDirection:'row'}}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 5,
                            borderWidth: 1,
                            margin: 20,
                            width: 40,
                            height: 40,
                            borderColor:'#00cd88',
                            backgroundColor: '#00cd88',
                        }}>
                        <Text
                            style={{
                                fontSize:20,
                                color: 'white'
                            }}
                        >始</Text>
                    </View>

                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 6,
                            borderWidth: 1,
                            margin: 20,
                            width: 40,
                            height: 40,
                            borderColor:'#ff7e23',
                            backgroundColor: '#ff7e23',
                        }}>
                        <Text
                            style={{
                                fontSize:20,
                                color: 'white'
                            }}
                        >始</Text>
                    </View>

                    </View>

                    <Text>选择状态</Text>
                    <Button
                        title={'筛选'}
                        color={'red'}
                        onPress={()=>{
                            navigate('ChooseTwo')
                        }}
                    />
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