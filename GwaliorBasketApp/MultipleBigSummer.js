import {View,Text,Dimensions,FlatList} from "react-native";
import SingleBigSummer from "./SingleBigSummer";
import styles from "./MultipleProductsComponentCss"
const {width, height} = Dimensions.get('window');


export default function MultipleBigSummer({BigSummery})
{   
    const ShowItem = ({product}) => {
    return  <SingleBigSummer data={product}/>
    }

    return(
        <View>

            <Text style={styles.titleStyle}>Big Summer Fest</Text>
          <FlatList
          data={BigSummery}
         horizontal={false}
         scrollEnabled
         numColumns={3}
         showsHorizontalScrollIndicator={false}
          renderItem={({item})=> <ShowItem product={item}/>}
          keyExtractor={item => item.id}
          />
    </View>
    )
}