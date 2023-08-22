import {ScrollView, View,Text,Dimensions,Image, StyleSheet} from "react-native"
import { ServerURL } from "../services/ServerServices";


const {width, height} = Dimensions.get('window');
export default function SingleBrandsInFocus({data})
{   
  
   

  return(<View style={{margin:10}} >
         <View style={{alignItems:'center'}}> 
       <Image
        style={{resizeMode:'contain',width:390,height:118 ,borderRadius:20}}
        source={{uri:`${ServerURL}/images/${data.image}`}}
 
       />
        
        <Image
      //   style={{resizeMode:'contain',width:60,height:60 ,borderRadius:400/2,zIndex:1}}
      style={{
         background: "#FFF",
         width: 48,
         height: 48, 
         borderRadius: 29,
      
         alignItems: "center",
         position: "absolute",
         borderColor:'#fd79a8',
         borderWidth:3,
         left: "5%",
         top: "30%",
         zIndex: 1,
       
         
       }}
        source={{uri:`${ServerURL}/images/${data.imag}`}}/>

<Image
      //   style={{resizeMode:'contain',width:60,height:60 ,borderRadius:400/2,zIndex:1}}
      style={{
         background: "#FFF",
         width: 46,
         height: 46,
         borderRadius: 28,
        
         alignItems: "center",
         position: "absolute",
         right: "4%",
         top: "30%",
         zIndex: 1,
         
       }}
         
       
        source={{uri:`${ServerURL}/images/${data.arrow}`}}/>
    
         </View>
  </View>)

}
