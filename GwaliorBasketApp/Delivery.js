import {ScrollView, View,Text,Dimensions,Image} from "react-native"
import { ServerURL } from "../services/ServerServices";
import Colors from "../../assets/Colors";
import Icons from "react-native-vector-icons/Fontisto"
const {width, height} = Dimensions.get('window');

export default function Delivery({Cart})
{
  return(<View >
  <View style={{flexDirection:"row"}}> 
    <Icons name={'stopwatch'} style={{fontSize:26,marginRight:26,margin:'5%',fontWeight:'900',color:Colors.black}} />
     <View style={{margin:10}}>
     <Text style={{fontSize:22,color:Colors.black,fontWeight:'bold'}}>Delivery in 11 minutes</Text>
     <Text style={{fontSize:12}}>3 items</Text>
     </View>
  </View>
     
     

  </View>)
   

}