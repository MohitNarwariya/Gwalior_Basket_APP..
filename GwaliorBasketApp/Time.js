import React from 'react';
import { View, Text,Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Colors from '../../../assets/Colors';
import { Clock } from 'react-native-reanimated';

const {width,height} = Dimensions.get('window')

export default function Time({ data }) {

    return (<View style={{ marginHorizontal: 10, marginVertical:5 }} >
        <View style={{flexDirection:'row', backgroundColor:Colors.silver,width:width*0.2, justifyContent:'center', alignItems:'center',height:height*0.04,borderRadius:10}} >
            <View  > 
                <Icon name={'stopwatch'} style={{fontSize:20,color:Colors.black}} />
            </View>
            <View>
                <Text style={{color:Colors.black,marginLeft:5}} >{data.time}</Text>
            </View>
        </View>

    </View>)
}