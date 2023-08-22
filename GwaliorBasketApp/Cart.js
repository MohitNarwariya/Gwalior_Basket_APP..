import {View,Text,ScrollView} from "react-native"


import MultipleBrandInFocus from "../components/MultipleBrandInFocus"
import MultipleShowCart from "../components/MultipleShowCart"
import MultipleBigSummer from "../components/MultipleBigSummer"
import Colors from "../../assets/Colors"
import Delivery from "../components/Delivery"

export default function Cart()
{   

    var Cart=[{productlistid:100,image:'brand1.jpg',imag:'yoga.jpg',arrow:'arrow.jpg'},
              {productlistid:200,image:'brand2.jpg',imag:'let.jpg',arrow:'arrow.jpg'},
              {productlistid:300,image:'brand3.jpg',imag:'raj.jpg',arrow:'arrow.jpg'},
              {productlistid:300,image:'brand4.jpg',imag:'stay.jpg',arrow:'arrow.jpg'},
              

        
]
   

   var  BigSummery=[  {productid:100,picture:'skin.jpg',name:'Skincare & More'},
                 {productid:200,picture:'bathing.jpg',name:'Bathing & Essentials'},
                {productid:300,picture:'season.jpg',name:'Season Favourites'},
                {productid:400,picture:'soft.jpg',name:'Soft Drinks & Juices'},
                {productid:400,picture:'ice.jpg',name:'Ice Creams'},
                 {productid:400,picture:'home.jpg',name:'Home Care Essentials'},
              
        
] 


var ShowCart=[{categoryid:1,pic:"kissan.png",name:'Amul Gold Fullly  ',qty:'500ml',price:'90'},
{categoryid:2,pic:"gems.png",name:'Amul Taara Toned',qty:'150gm',price:'40'},
{categoryid:1,pic:"kissan.png",name:'Tata Salt Vacuum',qty:'1kg',price:'120'},
{categoryid:2,pic:"gems.png",name:'Hungry Harvest  ',qty:'200gm',price:'40'},
]
   


    return(<View style={{backgroundColor:Colors.white}}>

      <ScrollView>
       <View>
        <MultipleBigSummer BigSummery={BigSummery}/>
       </View>

    
           <View>
            <MultipleBrandInFocus Cart={Cart}/>
           </View>

   
           <View>
        <Delivery/>
        <MultipleShowCart  ShowCart={ShowCart}/>
        </View>
      

        </ScrollView>

    
    </View> )
}