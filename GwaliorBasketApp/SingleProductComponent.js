import {ScrollView, View,Text,Dimensions,Image, Touchable} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
import PlusMinusButton from "./PlusMinusButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";

const {width, height} = Dimensions.get('window');
export default function SingleProductComponent({data,setRefresh,refresh})
{   const navigation=useNavigation()
  var dispatch=useDispatch()
 
  const handleQtyChange=(value,product)=>{
    if(value==0)
    {
      dispatch({type:'DELETE_CART',payload:[product.productlistid,product]})  
    }
    else
    {
    product['qty']=value

    dispatch({type:'ADD_CART',payload:[product.productlistid,product]})
    }
 
    setRefresh(!refresh)
  }
  return(
     <View style={{margin:10}} >
        
         <View style={{alignItems:'center',borderColor:'#a4b0be',borderWidth:1,width:width*0.42,height:height*0.3,borderRadius:10}}> 
         <TouchableOpacity onPress={()=>navigation.navigate("SelectedProduct",{product:data})}>
  
         <Image
          style={{resizeMode: 'contain', width: 100, height: 100}}
          source={{uri:`${ServerURL}/images/${data.productimage}`}}
        />
        <Text style={{marginVertical:5,fontWeight:'bold'}}>{data.productname} {data.weight} {data.pricetype} </Text> 
        <View style={{justifyContent:'flex-start',width:width*0.3}}>
        <Text style={{color:Colors.red,fontWeight:'bold',textDecorationLine:'line-through'}}>&#8377; {data.price}</Text> 
        <Text style={{color:Colors.black,fontWeight:'bold'}}>&#8377; {data.offerprice}</Text> 
        <Text style={{color:Colors.darkGreen,fontWeight:'bold'}}>Save &#8377; {data.price-data.offerprice}</Text> 
        </View>
        </TouchableOpacity>      
        <View style={{marginVertical:10}}>
   <PlusMinusButton data={data} onChange={(value)=>handleQtyChange(value,data)}  width={120} title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white} />
   </View> 
 
         </View>
  </View>
  
  )

}
