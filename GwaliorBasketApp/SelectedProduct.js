import { Text, View, Dimensions } from "react-native";
import ImageComponent from "../components/ProductComponents/ImageComponent";
import UnitComponent from "../components/ProductComponents/UnitComponent";
import PlusMinusButton from "../components/Buttons/PlusMinusButton";
import Colors from "../../assets/Colors";
import Time from "../components/ProductComponents/Time";

const {width, height} = Dimensions.get('window')

export default function SelectedProduct(){

    const images = [{ imageid: 1, image: 'Aashirvaad Shudh Chakki Atta.webp', name: 'Kissan' }, { imageid: 2, image: 'Aashirvaad Shudh Chakki Atta2.webp', name: 'Nestley' }, { imageid: 3, image: 'Aashirvaad Shudh Chakki Atta3.webp', name: 'ITC'},{ imageid: 4, image: 'Aashirvaad Shudh Chakki Atta4.webp', name: 'Kissan' },{ imageid: 5, image: 'Aashirvaad Shudh Chakki Atta5.webp', name: 'Kissan' },{ imageid: 6, image: '4.webp', name: 'Kissan' },]
    const unitData = [{productunitid:1,weight:'5kg', offerprice:'220', price:'250'},{productunitid:2,weight:'10kg', offerprice:'90', price:'100'},{productunitid:3,weight:'15kg', offerprice:'420', price:'450'},]
    const time = {time:'10 min'}

    return(<View>
        {/* <Text>Selected Product</Text> */}
        <ImageComponent images={images} /> 
        <Text style={{fontSize:18, fontWeight:500, color:'black', padding:10}} >Fortune Chakki Freash (100% Atta, 0% Maida) Atta</Text> 
        <Time data={time} />
        <UnitComponent data={unitData} />
        {/* <View style={{ marginVertical: 0,marginHorizontal:10 }}>
        <PlusMinusButton width={117} height={100} foreColor={Colors.darkSkyBlue} title={"ADD"} bgColor={Colors.darkSkyBlue} backgroundColor={Colors.darkSkyBlue} />
        </View> */}
    </View>)
}