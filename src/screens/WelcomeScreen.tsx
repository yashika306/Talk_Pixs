import { View, Text , Image , TouchableOpacity} from 'react-native'
import React from 'react'

function WelcomeScreen({navigation}) {
  return (
       
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor:'#ffffff' }}>

    <View>
    <Text style={{color:"#1F6049",fontWeight:'bold', textAlign:"center", fontSize:40,padding:5}}>TalkPix</Text>
    </View>

    <View style={{padding:30}}>
    <Text style={{color:"#000",fontWeight:'bold', textAlign:"center", fontSize:20,padding:5}}>The Future is here to Speak ,</Text>  
    <Text style={{color:"#000",fontWeight:'bold', textAlign:"center", fontSize:20}}>Powered by AI</Text>  
    </View>

    <Image resizeMode='contain' source={require('../../assert/bot.png')} style={{height:200 , width:200 }} />

    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{padding:10 , marginVertical:20 , borderRadius:10 , backgroundColor:"#1F6049", 
    shadowOffset:{width:0,height:10},shadowOpacity:0.3 , shadowRadius:10 }}>
    <Text style={{color:"#ffffff",fontWeight:'bold', textAlign:"center", fontSize:30 , padding:7}}>Lets Get Started</Text>
    </TouchableOpacity>

    </View>
  )
}
export default WelcomeScreen;

