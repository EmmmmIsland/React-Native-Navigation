
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import ChatScreen from './containers/two/ChatScreen'
import MainHome from './containers/three/MainHome'
import ChooseScreen from './containers/mine/ChooseScreen'
import HomeScreen from './containers/home/HomeScreen'
import ChooseTwo from './containers/mine/ChooseTwo'
import List from './containers/Drawer/List'
import ListThree from './containers/ListThree/ListThree'

// class HomeScreen extends React.Component {
//     static navigationOptions = ({navigation}) => ({
//         title: '主页',
//         tabBarIcon: ({tintColor}) => (
//             <Image
//                 source={require('../assets/me.png')}
//                 style={[{tintColor: tintColor},styles.icon]}
//             />
//         )
//     });
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <View>
//                 <Text>Hello, Chat App!</Text>
//                 <Button
//                     onPress={() => navigate('Chat',{user:'Lucy'})}
//                     title="跳转到下一页"
//                 />
//             </View>
//         );
//     }
// }


const MainScreenNavigator = TabNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
    Main: { screen: MainHome },
    Choose: { screen: ChooseScreen},
});

const navigatorApp = StackNavigator({
    Home: { screen: MainScreenNavigator },
    ChooseTwo: { screen: ChooseTwo },
    List:{screen: List},
    ListThree:{screen: ListThree},
});


AppRegistry.registerComponent('navigatorApp', () => navigatorApp);
