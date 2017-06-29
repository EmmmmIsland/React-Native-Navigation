import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    Dimensions,
    StyleSheet
} from 'react-native';
import Picker from 'react-native-picker';
import area from '../../area/area.json';

export default class MainHome extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '选择',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('../../../assets/me.png')}
                style={[{tintColor: tintColor},styles.icon]}
            />
        ),
    });

    constructor(props, context) {
        super(props, context);
    }

    myTest(){
        let sheng = ['黑龙江','北京'];
        let shi = ['beijing','beijing'];
        let pickerData = [sheng,shi]
        Picker.init({
            pickerData: pickerData,
            selectedValue: ['北京', '北京'],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }


    _createAreaTwoData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                city.push(area[i]['city'][j]['name']);
            }
            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _createAreaThreeData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }
            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }



    _showAreaTwoPicker() {
        Picker.init({
            pickerData: this._createAreaTwoData(),
            selectedValue: ['北京', '北京'],
            pickerTitleText: '选择地区',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    _showAreaThreePicker() {
        Picker.init({
            pickerData: this._createAreaThreeData(),
            selectedValue: ['北京', '北京', '东城区'],
            pickerTitleText: '选择地区',
            pickerConfirmBtnText: '确定',
            pickerCancelBtnText: '取消',
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                console.log('area', pickedValue);
            }
        });
        Picker.show();
    }

    _showTimePicker() {
        let years = [],
            months = [],
            days = [],
            hours = [],
            minutes = [];

        for(let i=1;i<51;i++){
            years.push(i+1980);
        }
        for(let i=1;i<13;i++){
            months.push(i);
            hours.push(i);
        }
        for(let i=1;i<32;i++){
            days.push(i);
        }
        for(let i=1;i<61;i++){
            minutes.push(i);
        }
        let pickerData = [years, months, days, ['am', 'pm'], hours, minutes];
        let date = new Date();
        let selectedValue = [
            [date.getFullYear()],
            [date.getMonth()+1],
            [date.getDate()],
            [date.getHours() > 11 ? 'pm' : 'am'],
            [date.getHours() === 12 ? 12 : date.getHours()%12],
            [date.getMinutes()]
        ];
        Picker.init({
            pickerData,
            selectedValue,
            pickerTitleText: 'Select Date and Time',
            wheelFlex: [2, 1, 1, 2, 1, 1],
            onPickerConfirm: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerCancel: pickedValue => {
                console.log('area', pickedValue);
            },
            onPickerSelect: pickedValue => {
                let targetValue = [...pickedValue];
                if(parseInt(targetValue[1]) === 2){
                    if(targetValue[0]%4 === 0 && targetValue[2] > 29){
                        targetValue[2] = 29;
                    }
                    else if(targetValue[0]%4 !== 0 && targetValue[2] > 28){
                        targetValue[2] = 28;
                    }
                }
                else if(targetValue[1] in {4:1, 6:1, 9:1, 11:1} && targetValue[2] > 30){
                    targetValue[2] = 30;

                }
                // forbidden some value such as some 2.29, 4.31, 6.31...
                if(JSON.stringify(targetValue) !== JSON.stringify(pickedValue)){
                    // android will return String all the time，but we put Number into picker at first
                    // so we need to convert them to Number again
                    targetValue.map((v, k) => {
                        if(k !== 3){
                            targetValue[k] = parseInt(v);
                        }
                    });
                    Picker.select(targetValue);
                    pickedValue = targetValue;
                }
            }
        });
        Picker.show();
    }

    _toggle() {
        Picker.toggle();
    }

    _isPickerShow(){
        Picker.isPickerShow(status => {
            alert(status);
        });
    }

    render() {
        return (
            <View style={{height: Dimensions.get('window').height}}>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this.myTest.bind(this)}>
                    <Text>myTest</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showTimePicker.bind(this)}>
                    <Text>TimePicker</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showAreaTwoPicker.bind(this)}>
                    <Text>省市二级联动</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._showAreaThreePicker.bind(this)}>
                    <Text>省市三级联动</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._toggle.bind(this)}>
                    <Text>toggle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop: 10, marginLeft: 20}} onPress={this._isPickerShow.bind(this)}>
                    <Text>isPickerShow</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder="test picker with input"
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 10,
                        padding: 5
                    }}
                />
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