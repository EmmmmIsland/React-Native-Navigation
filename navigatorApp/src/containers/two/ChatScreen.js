/**
 * Created by wangl on 2017/6/16.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';
import  ParallaxScrollView from 'react-native-parallax-scroll-view'
import icon from '../../../assets/splash.png'

export default class ChatScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '主页',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../assets/me.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        ),
    });
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ParallaxScrollView
                backgroundColor="yellow"
                contentBackgroundColor="pink"
                parallaxHeaderHeight={300}
                renderForeground={() => (
                    <View style={{height: 300, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={icon}/>
                    </View>
                )}>
                <View style={{height: 500}}>
                    <TouchableHighlight
                        onPress={()=>{
                            navigate('Main')
                        }}>
                        <Text>Scroll me</Text>
                    </TouchableHighlight>
                </View>
            </ParallaxScrollView>

        );
    }

}

const styles = StyleSheet.create({
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});