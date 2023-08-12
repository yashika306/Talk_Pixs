import React, {useState} from 'react';
import {TextInput} from 'react-native';

function AppInput({updateInputval, name, value, secure}) {
    const [focused, setFocused] = useState<boolean>(false);

    const changeValue = (e:any) => {
        updateInputval(e, name);
    };
    return (
        <TextInput
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(true)}
            onChangeText={(e) => changeValue(e)}
            value={value}
            placeholderTextColor={'#000000'}
            placeholder={name.toUpperCase()}
            secureTextEntry={secure ? secure : false}
            style={[
                {
                fontSize:20,
                padding:20,
                backgroundColor:'#F8F8FF',
                borderRadius:10,
                marginVertical:10,
                borderColor:'#c2c2c2',
                borderWidth:3
            },
            focused && {
                borderColor:'#c2c2c2',
                borderWidth:3,
                shadowColor:'#fdcc2d',
                shadowOffset:{width:4,height:10},
                shadowOpacity:0.2,
                shadowRadius:10,
            }
        ]
        }/>
    );
}

export default AppInput;

