import React, { useState } from 'react';
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AppInput from '../components/appinput';
import auth from '@react-native-firebase/auth';

const Login: React.FC<Props> = ({navigation: {navigate}}) => {
    const [values, setValues] = useState({email: '', password: ''});
    const updateInputval = (val:any, key:any) => {
      const value = {...values};
      value[key] = val;
      setValues({...value});
    };

    const loginSubmit = () =>{
        if(!values.email && !values.password){
            Alert.alert("Enter a required fields.");
            return false;
        }
        auth().signInWithEmailAndPassword(values.email, values.password).then((res:any)=>{
            console.log(res);
            setValues({email: '', password: ''});
            navigate("Home");
        }).catch((error)=>console.log(error.message))
    }
    console.log('Helo')
  return (
      <SafeAreaView>
      <View style={{padding:20}}>   
        <View style={{alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../../assert/login-icons.png')} style={{height:150 , width:100 }} />
            <Text style={{fontSize:30, color:'#1F6049', marginVertical:0 , fontWeight:'bold', padding:15}}>Login </Text>
        </View>
        <View style={{marginVertical:20}}>
            <AppInput name="email" value={values.email} updateInputval={updateInputval} secure={false} />
            <AppInput name='password' value={values.password} updateInputval={updateInputval} secure={true} />
        </View>

        <TouchableOpacity onPress={() => loginSubmit()} style={{padding:10 , marginVertical:20 , borderRadius:10 , backgroundColor:"#1F6049", 
         shadowOffset:{width:0,height:10}, shadowOpacity:0.3 , shadowRadius:10 }}>
        <Text style={{color:"#ffffff",fontWeight:'bold', textAlign:"center", fontSize:30}}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{color:"#000", textAlign:"center", fontSize:17 , padding:0}}>Create a new account</Text>  
        <TouchableOpacity onPress={() =>{navigate("SignUp")}} style={{ marginVertical:0}}>
        <Text style={{color:"green", textAlign:"center", fontSize:20,fontWeight:'bold'}}>Click Me</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Login;
