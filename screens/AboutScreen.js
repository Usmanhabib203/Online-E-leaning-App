import { StyleSheet, Image,Text, View, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={ styles.aboutContainer}>
      <Text style={styles.mainHeader}>welcome to rana Tecnical</Text>
      <Text style={styles.paraStyle}>I am full Stack React Native Developer </Text>
      <View> 
        <Image 
        style={styles.imgStyle}
        source={require('../assets/logo6.jpg')}
        /> 
      </View>
      <View style={styles.aboutlayout}>
        <Text style={styles.aboutSubHEader}> about me</Text>
        <Text style={[styles.paraStyle,styles.aboutpara]}> 
        I am react native and Web developer at least 1 years . you can contact me for more information thanks
        </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=> Linking.openURL("https://web.facebook.com/?_rdc=1&_rdr")}
        >
          <Image
          style={styles.iconStyle}
          source={require('../assets/face.png')}
          />

        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=> Linking.openURL("https://www.youtube.com")}
        >
          <Image
          style={styles.iconStyle}
          source={require('../assets/you.jpg')}
          />

        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=> Linking.openURL("https://www.instagram.com/")}
        >
          <Image
          style={styles.iconStyle}
          source={require('../assets/insta.jpg')}
          />

        </TouchableOpacity>

      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  aboutContainer:{
    display:"flex",
    alignItems:"center",
  },
  imgStyle:{
    width:150,
    height:150,
    borderRadius:100,
  },
  mainHeader:{
    fontSize:22,
    color:"#344055",
    textTransform:"uppercase",
   // fontWeight:50,
    paddingTop:15,
    marginBottom:10,
    lineHeight:30,
    textAlign:"center",
  },
  paraStyle:{
    fontSize:18,
    color:"#18c936",
    paddingBottom:30,
  },
  aboutlayout:{
    backgroundColor:"#4c5dab",
    paddingHorizontal:30,
    marginVertical:30,
  },
  aboutSubHEader:{

    fontSize:18,
    color:"#ff",
    textTransform:"uppercase",
    fontWeight:"500",
    marginVertical:15,
    alignSelf:"center",
  },
  menuContainer:{
    width:"100%",
    flexDirection:"row",
    borderTopWidth:80,
    justifyContent:"space-evenly",
  },
  iconStyle:{
    width:"100%",
    height:50,
    aspectRatio:1,
    
  }
})

export default About;

