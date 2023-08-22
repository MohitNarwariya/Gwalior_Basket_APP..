import {View,Text,Dimensions,FlatList,ScrollView} from "react-native";
import styles from "./MultipleProductsComponentCss"
import SingleShowCart from "./SingleShowCart";
// import { ScrollView } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('window');


export default function MultipleShowCart({ShowCart})
{   
    const Showitem = ({product}) => {

    return  <View>
         
    <SingleShowCart data={product}/>
   
    
     </View>
        
    }

    return(
        <View>

            
          <FlatList
          data={ShowCart}
        vertical={true}
         scrollEnabled
         showsHorizontalScrollIndicator={false}
          renderItem={({item})=> <Showitem product={item}/>}
          keyExtractor={item => item.id}
          />
    </View>
    )
}