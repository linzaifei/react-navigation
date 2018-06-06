import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';


export default class Detail extends Component {
    static navigationOptions={
        headerTitle:'详情',
    }

    constructor(props) {
        super(props);


    }


    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                <TouchableOpacity onPress={()=>
                    this.props.navigation.goBack()
                }>
                    <Text>返回首页</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {}
});