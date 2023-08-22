import {ScrollView, View,Text,Dimensions,Image,FlatList} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";



import PlusMinusButton from "./PlusMinusButton";
import Button from "./Button";

const {width, height} = Dimensions.get('window');

export default function SingleShowCart({data})
{  
   
    
        
    return (<View>
     
    
     <View>
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={{margin:4}}>

         <Image
          style={{resizeMode: 'contain',justifyContent:'center', width:width*0.16, height:height*0.09 ,borderColor:'#a4b0be',borderWidth:0.4,borderRadius:8}}
          source={{uri:`${ServerURL}/images/${data.pic}`}}
        />
          
    </View>
    <View style={{margin:10}}>
    <Text ellipsizeMode='tail' numberOfLines={2}  style={{fontSize:height*0.025,color:Colors.black,fontWeight:'700',marginRight:'27%',width:100,flexWrap:'wrap'}}>{data.name}</Text>
    <Text>{data.qty}</Text>
    <Text style={{color:Colors.black,fontWeight:'500'}}>&#8377;{data.price}</Text>
    
    </View> 
    <View style={{flexDirection:'column'}}>
<Button  title={"ADD"} bgColor={Colors.darkGreen} foreColor={Colors.white} width={width*0.22}  />
    </View>
         
    </View>
    </View>
    </View>)
    
  }


   
   