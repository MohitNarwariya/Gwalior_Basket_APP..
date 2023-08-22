import React from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Button from './Button';
import {useState} from 'react';
import Colors from '../../assets/Colors';
import { useSelector } from 'react-redux';
const {width, height} = Dimensions.get('window');

export default function PlusMinusButton(props) {
  
   var cart=useSelector((state)=>state.cart)
    // console.log("CARRRT",cart)
    // console.log("DATA",props.data)
    var qty=cart[props.data.productlistid]?.qty
    
    var tqty=0
    if(qty!=undefined)
   tqty=qty
   console.log("QTTTY",qty)
   console.log("TQTY",tqty)
  const [values, setValues] = useState(tqty);
  



  const btnplus = () => {
    if (values < 5) {
      setValues(prev => prev + 1);
      props.onChange(values+1);
    }
  };
  const btnminus = () => {
    if (values > 0) {
      setValues(prev => prev - 1);
      props.onChange(values-1);
    }
  };

  return (
    <>
      {!values ? (
        <Button
          onPress={() => {
            btnplus();
          }}
          bgColor={Colors.darkGreen}
          width={props.width}
          foreColor={Colors.white}
          title={'ADD'}
          h
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
      ) : (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              btnminus();
            }}
            style={{
              width: props.width * 0.25,
              backgroundColor: Colors.darkGreen,
              height: 35,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Text style={{color: Colors.white}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              width: props.width * 0.3,
              backgroundColor: Colors.white,
              height: 34.5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderColor: Colors.darkGreen,
              borderWidth: 0.6,
            }}>
            <Text>{values}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              btnplus();
            }}
            style={{
              width: props.width * 0.25,
              backgroundColor: Colors.darkGreen,
              height: 35,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text style={{color: Colors.white}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
