import {View,Text,Dimensions,FlatList,ScrollView} from "react-native";
import SingleBrandsInFocus from "./SingleBrandsInFocus";
import styles from "./MultipleProductsComponentCss"
// import { ScrollView } from "react-native-gesture-handler";
const {width, height} = Dimensions.get('window');


export default function MultipleBrandInFocus({Cart})
{   
    const Showitem = ({product}) => {

    return  <View>
         
    <SingleBrandsInFocus data={product}/>
   
    
     </View>
        
    }

    return(
        <View>

            <Text style={styles.titleStyle}>Brands In Focus </Text>
          <FlatList
          data={Cart}
        vertical={true}
         scrollEnabled
         showsHorizontalScrollIndicator={false}
          renderItem={({item})=> <Showitem product={item}/>}
          keyExtractor={item => item.id}
          />
    </View>
    )
}