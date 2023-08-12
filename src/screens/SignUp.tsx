/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AppInput from '../components/appinput';
import auth from '@react-native-firebase/auth';

const SignUp: React.FC<Props> = ({navigation: {navigate}}) => {
  const [values, setValues] = useState({name: '', email: '', password: ''});
  const updateInputval = (val, key) => {
    const value = {...values};
    value[key] = val;
    setValues({...value})
  };

  const singupSubmit = () =>{
        console.log("values", values)
        if(!values.email && !values.password && !values.name){
            Alert.alert("Enter a required fields.");
            return false;
        }

        auth().createUserWithEmailAndPassword(values.email, values.password).then((res:any)=>{
            res.user.updateProfile({
                displayName:values.name,
            })
            console.log("user Created Successfully!");
            setValues({name: '', email: '', password: ''});
            navigate("Login");
        }).catch((error:any) => console.log(error.message))
  }
  return (
    <SafeAreaView>
      <View style={{padding:20}}>

        <View style={{alignItems:'center'}}>
            <Image resizeMode='contain' source={require('../../assert/login-icons.png')} style={{height:100 , width:100}} />
            <Text style={{fontSize:30, color:'#1F6049', marginVertical:10 , fontWeight:'bold', padding:15}}>Sign Up </Text>
        </View>

        <View style={{marginVertical:20}}>
            <AppInput name='name'  value={values.name} updateInputval ={updateInputval} secure={false}  />
            <AppInput name='email'  value={values.email} updateInputval ={updateInputval} secure={false}  />
            <AppInput name='password'  value={values.password} updateInputval ={updateInputval} secure={true} />
        </View>

        <TouchableOpacity onPress={() => singupSubmit()}
         style={{padding:10 , marginVertical:20 , borderRadius:10 , backgroundColor:"#1F6049", 
         shadowOffset:{width:0,height:10},shadowOpacity:0.3 , shadowRadius:10 }}>
        <Text style={{color:"#ffffff", fontWeight:'bold',textAlign:"center", fontSize:30}}>Sign Up</Text>
        </TouchableOpacity>
        

        <Text style={{color:"#000", textAlign:"center", fontSize:17}}>Already have an account?</Text>  
        <TouchableOpacity 
        onPress={() => {navigate("Login")}}
        style={{ marginVertical:0}}>
        <Text style={{color:"green", textAlign:"center", fontSize:20,fontWeight:'bold'}}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
};

export default SignUp;
