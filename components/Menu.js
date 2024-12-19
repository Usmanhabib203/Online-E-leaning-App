import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View,StyleSheet,Image,Text } from "react-native";

const Menu =()=>{
    const navigation= useNavigation();
    return(
        <View style={Styles.menuContainer}>
           <TouchableOpacity style={StyleSheet.buttonStyle}
           onPress={() => navigation.navigate('CourseList')}
           >
                <Image 
                style={Styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/stickers/90/000000/training.png",
                }}
                />
           </TouchableOpacity>
                
           <TouchableOpacity style={StyleSheet.buttonStyle}
           onPress={() => navigation.navigate('About')}
           >
                <Image 
                style={Styles.iconStyle}
                source={require('../assets/about.png')}
                
                />
           </TouchableOpacity>
           <TouchableOpacity style={StyleSheet.buttonStyle}
           onPress={() => navigation.navigate('Userdata')}
           >
                <Image 
                style={Styles.iconStyle}
                source={require('../assets/userlogo.png')}
                />
           </TouchableOpacity>
           <TouchableOpacity style={StyleSheet.buttonStyle}
           onPress={() => navigation.navigate('Contact')}
           >
                <Image 
                style={Styles.iconStyle}
                source={{
                    uri:"https://img.icons8.com/stickers/100/000000/phone-office.png",
                }}
                />
                
           </TouchableOpacity>
          
        </View>
    );
};


const Styles = StyleSheet.create({
menuContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
},
textStyle:{

    textTransform:"uppercase",

},
iconStyle:{

    width:"100%",
    height:50,
    aspectRatio:1,
    marginBottom:20,
},

});

export default Menu;