import {ScrollView, View,Text,Dimensions,Image, StyleSheet} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";


const {width, height} = Dimensions.get('window');
export default function SingleBigSummer({data})
{   

 
  
   

  return(<View style={{margin:10}} >
         <View style={{alignItems:'center'}}> 
       <Image
        style={{resizeMode:'contain',width:105,height:160 ,borderRadius:18}}
        source={{uri:`${ServerURL}/images/${data.picture}`}}
        
 
       />
       <Text 

style={{
  
 
 
 
  alignItems: "center",
  position: "absolute",
  left: "10%",
  top: "70%",
  color:Colors.black,
  fontWeight:'500',
  fontSize:18,
  
  
  
  
}}
ellipsizeMode='tail'
  numberOfLines={2}
       
       
       >
        
        {data.name}</Text>
        
         </View>
  </View>)

}
