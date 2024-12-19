import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React , { useState }from 'react';
 

const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState("false");
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}> Level up your Knowldge </Text>

      <Text style={styles.description}> 
      you can reach us anytime via RanaTechnical</Text>

      <View style={styles.inputContainer}>

        <Text style={styles.labels}> Enter your name</Text>
        <TextInput
        style={styles.inputStyle}
        placeholder = {"Usman Rana"}
       // value={ }
       // onChangeText={ }
        />
      </View>
      <View style={styles.inputContainer}>

        <Text style={styles.labels}> Enter your Email</Text>
        <TextInput
        style={styles.inputStyle}
        placeholder = {"demo@gmail.com"}
        //value={ }
        //onChangeText={ }
        />
      </View>
      <View style={styles.inputContainer}>

        <Text style={styles.labels}> Enter your number</Text>
        <TextInput
        style={styles.inputStyle}
        placeholder = {"1234567"}
       // value={ }
       // onChangeText={ }
        />
      </View>
      <View style={styles.inputContainer}>

        <Text style={styles.labels}> How can I help you</Text>
        <TextInput
        style={[styles.inputStyle,styles.multilineStyle]}
        placeholder = {"Tell us about your self"}
       // value={ }
       // onChangeText={ }
       numberOfLines={5}
       multiline={true}
        />
      </View>

      

      
      {/* Submit button */}

      <TouchableOpacity 
      style={[
        styles.buttonStyle,
        {
          backgroundColor:agree ?"#4630EB":"grey",
        },
      ]}
      >
        <Text style={styles.buttonText}>Contact US</Text>
        
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({

  mainContainer:{
    height:"100%",
    paddingHorizontal:30,
    backgroundColor:"#fff",
  },
  mainHeader:{
    fontSize:20,
    color:"#344055",
    fontWeight:"500",
    paddingTop:20,
    paddingBottom:15,
    textTransform:"capitalize",
  },
  description:{
    fontSize:20,
    color:"#7d7d7d",
    paddingBottom:20,
    lineHeight:25,
  },

  inputContainer:{
    marginTop:20,
  },
  labels:{
    fontWeight:"bold",
    color:"#7d7d7d",
    paddingBottom:5,
    lineHeight:25,
  },
  inputStyle:{
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:6,
    borderRadius:2,
  },
  buttonStyle:{
    borderRadius:5,
    paddingVertical:10,
    paddingHorizontal:18,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginVertical:30,

  },
  buttonText:{
    color:"#eee",
  },

  
});

export default Contact;

