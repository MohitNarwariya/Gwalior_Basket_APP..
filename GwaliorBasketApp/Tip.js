// import React from "react";
// import { View, Text, ScrollView, StyleSheet, Alert } from "react-native"
// import {useState ,useEffect} from "react"
// import Button from "../Button";
// import { ServerURL } from "../../services/ServerServices";
// import Colors from "../../../assets/Colors";
// import styles from "./TipCss";
// import NumberDialog from "../Numberdialog/NumberDialog";
// import { getKey, getStoreData } from "../../storage/AsyncStroage";
// import RazorpayCheckout from 'react-native-razorpay';
// export default function Tip(props) {

  
//     const [status,setStatus]=useState(false)

    
//     var user=''
//     useEffect(async function(){
//      var mobileno=await getKey()
//      console.log("DATA OF ASYSING ",mobileno)
//       user=await getStoreData(mobileno)
    
//       var fullname=await getKey()
//       user=await getStoreData(fullname)
    
//     },[])
    
//     var options = {
//         description: 'Credits towards car rent',
//         image: `${ServerURL}/images/logo.png`,
//         currency: 'INR',
//         key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
//         amount: 1000,
//         name:  user.fullname,
//         prefill: {
//           email: 'ss@gmail.com',
//           contact: user.mobileno,
//           name: 'Gwalior Basket'
//         },
//         theme: {color: '#F37254'}
//       }

//       const handlePayment=()=>{
//         RazorpayCheckout.open(options).then((data) => {
//           // handle success
//           alert(`Success: ${data.razorpay_payment_id}`);
//         }).catch((error) => {
//           // handle failure
//           alert(`Error: ${error.code} | ${error.description}`);
//         });
//     }
      
      
       
     



//     const handleClick=async()=>{
//         var key=null
//         key=await getKey()
//         if(key==null)
//          {setStatus(true)
//           }
//         else
//           {
//             handlePayment()
//         }
        
//     }
    
//      return (<View >
//         <View style={styles.Container}>
//             <View style={styles.content}>
//                 <Text style={styles.heading}>Tip your delivery partner.</Text>
//                 <Text>Your Kindness means alot 100% of your tip will got directly to your delivery partner.</Text>
//             </View>
//             <View style={styles.buttonstyling}>
//                 <View style={styles.buttonOne}>
//                     <Text>&#128512; &#8377;10</Text>
//                 </View>
//                 <View style={styles.buttonOne}>
//                     <Text>&#128519; &#8377;50</Text>
//                 </View>
//                 <View style={styles.buttonOne}>
//                     <Text>&#128525; &#8377;100</Text>
//                 </View>
//                 <View style={styles.buttonOne}>
//                     <Text>&#128293; Custom</Text>
//                 </View>
//             </View>
//             <ScrollView>
//             <Button onPress={()=>handleClick()} bgColor={Colors.darkGreen} foreColor={Colors.white} width={"100%"} title={"Make Your Payment"} height={40} />
//             </ScrollView>
//            <NumberDialog status={status} setStatus={setStatus} />
//         </View>
        
//     </View>)
// }






















import React from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native"
import {useState ,useEffect} from "react"
import Button from "../Button";
import { ServerURL } from "../../services/ServerServices";
import Colors from "../../../assets/Colors";
import styles from "./TipCss";
import NumberDialog from "../Numberdialog/NumberDialog";
import { getKey, getStoreData } from "../../storage/AsyncStroage";
import RazorpayCheckout from 'react-native-razorpay';
import { useNavigation } from "@react-navigation/native";
import useRazorpay from "react-razorpay";
import { useSelector,useDispatch } from "react-redux";
export default function Tip(props) {

  
    const [status,setStatus]=useState(false)
    const Razorpay = useRazorpay();
    const navigation=useNavigation()
    const dispatch=useDispatch()
      var user=useSelector((state)=>state.user)
      var userdata=Object.values(user)[0]
      const products = useSelector((state) => state.cart);
      const productList=Object.values(products)
      let total= productList.reduce((a,b) => {
          return  a+b.offerprice*b.qty;
        },0);
    
    var user=''
    useEffect(async function(){
     var mobileno=await getKey()
     console.log("DATA OF ASYSING ",mobileno)
      user=await getStoreData(mobileno)
    
      var fullname=await getKey()
      user=await getStoreData(fullname)
    
    },[])
    
    var options = {
        description: 'Credits towards car rent',
        image: `${ServerURL}/images/logo.png`,
        currency: 'INR',
        key: "rzp_test_GQ6XaPC6gMPNwH", // Your api key
        amount: total*1000,
        name:  user.fullname,
        prefill: {
          email: 'ss@gmail.com',
          contact: user.mobileno,
          name: 'Gwalior Basket'
        },
        theme: {color: '#F37254'}
      }

      const handlePayment=()=>{
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
    }
      
      
       
     



    const handleClick=async()=>{
        var key=null
        key=await getKey()
        if(key==null)
         {setStatus(true)
          }
        else
          {
            handlePayment()
        }
        
    }
    
     return (<View >
        <View style={styles.Container}>
            <View style={styles.content}>
                <Text style={styles.heading}>Tip your delivery partner.</Text>
                <Text>Your Kindness means alot 100% of your tip will got directly to your delivery partner.</Text>
            </View>
            <View style={styles.buttonstyling}>
                <View style={styles.buttonOne}>
                    <Text>&#128512; &#8377;10</Text>
                </View>
                <View style={styles.buttonOne}>
                    <Text>&#128519; &#8377;50</Text>
                </View>
                <View style={styles.buttonOne}>
                    <Text>&#128525; &#8377;100</Text>
                </View>
                <View style={styles.buttonOne}>
                    <Text>&#128293; Custom</Text>
                </View>
            </View>
            <ScrollView>
            <Button onPress={()=>handleClick()} bgColor={Colors.darkGreen} foreColor={Colors.white} width={"100%"} title={"Make Your Payment"} height={40} />
            </ScrollView>
           <NumberDialog status={status} setStatus={setStatus} />
        </View>
        
    </View>)
}

