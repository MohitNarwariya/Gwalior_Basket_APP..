import {View,Text,FlatList,Dimensions} from "react-native"

import SingleProductComponent from "../components/SingleProductComponent";

import styles from "./MultipleProductsComponentCss"
const {width, height} = Dimensions.get('window')

export default function MultipleProductsComponent({products,title,setRefresh,refresh})
{  const ShowItem = ({product}) =>{
    
   return <SingleProductComponent setRefresh={setRefresh} refresh={refresh} data={product}/>
    
}
    return( 
      <View>

      
      <Text style={styles.titleStyle} >{title}</Text> 
      <FlatList
        data={products}
        horizontal={true}
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ShowItem product={item} />}
        keyExtractor={item => item.id}
      />
      </View>
      )
    
}