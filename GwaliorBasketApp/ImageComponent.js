import { ScrollView,Text, View, Image,Dimensions } from "react-native";
import { ServerURL } from "../../services/ServerServices";
const {width, height} = Dimensions.get('window');

export default function ImageComponent({images}) {
    
    console.log("yyyyy",images)
   const smallImages =()=>{
        return images.map((item)=>{
        return(
            <View style={{padding:10}}>
                <Image
                style={{ resizeMode: 'contain', width: 70, height: 70 }}
                source={{ uri: `${ServerURL}/images/${item}` }}
            />
            </View>
        )})
    }

    return (<View>
        
        <View style={{padding:20,width:width*0.9 ,alignContent:'center',justifyContent:'center' }} >
            <Image
                style={{ resizeMode: 'contain', width: 350, height: 250, }}
                source={{ uri: `${ServerURL}/images/${images[0]}` }}
            />
        </View>
       <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            {smallImages()}
            </ScrollView>
    </View>

    </View>)
}