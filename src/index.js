import React ,{Component}from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';


import detailScreen from './Detail'


const Placeholder = ({ text }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{text}</Text>
    </View>
);

class A extends Component {
    static navigationOptions={
        headerTitle:'Home'
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>A</Text>

                <TouchableOpacity onPress={()=>
                this.props.navigation.navigate('Detail')
                }>
                    <Text>跳转到详情界面</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

class B extends Component {
    static navigationOptions={
        headerTitle:'Settings'
    }
    render() {
        return <Placeholder text="B!" />;
    }
}


const HomeStack = createStackNavigator({
    FeedHome: A,
});

const SettingStack = createStackNavigator({
    ProfileHome: B,
});

const TabNavigator = createBottomTabNavigator({
    Feed: HomeStack,
    Profile: SettingStack,
});

TabNavigator.navigationOptions = {
    // 从堆栈AppNavigator隐藏标题
    header: null,
};

const AppNavigator= createStackNavigator({
    Main:TabNavigator,
    Detail:detailScreen,
})

export default class index extends Component{
    render(){
        return <AppNavigator />
    }
}