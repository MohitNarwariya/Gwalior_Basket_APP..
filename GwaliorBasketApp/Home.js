import {View,Text,Dimensions} from "react-native"
import CircleComponent from "../components/CircleComponent"
import MultipleProductsComponent from "../components/MultipleProductsComponent";
import TextBox from "../components/TextBox"

import { getData,postData } from "../services/ServerServices";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import FloatingCart from "../components/FloatingCart";


const {width, height} = Dimensions.get('window');

export default function Home()
{   const [categories,setCategories]=useState([])
    const [products,setProducts]=useState([])
    const [refresh,setRefresh]=useState(false)
    var cart=useSelector((state)=>state.cart)
var keys=Object.keys(cart)
    const setInitialData=async()=>{
        var result=await getData('userinterface/fetch_all_category')   
        setCategories(result.data)
        var res=await postData('userinterface/fetch_products_by_category',{category:'Bakery and Bread.'})   
        setProducts(res.data)
        
    }
    
    useEffect(function(){
      setInitialData()

    },[])
 

return(<View style={{position:'relative'}}>
           <View style={{alignItems:'center',marginVertical:10}}>
            <TextBox width={width*0.94} placeHolder={"Search Products Here..."}  icon={"magnify"}/>
           </View>
        <CircleComponent heading={"Popular Categories"} categoryData={categories} />
           <View>
            <MultipleProductsComponent  setRefresh={setRefresh} refresh={refresh} title={'Bakery and Bread'}   products={products}/>
            </View>
          
         {keys?.length>0?<FloatingCart />:<></>}
           
    </View>)
}