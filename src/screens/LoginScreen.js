import React from 'react'
import { View,Text, Platform,KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Background } from '../components/Background';
import { Fondo } from '../components/fondo';
import { loginStyles } from '../theme/loginTheme';

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = ({navigation}:Props) => {
    
  return (
    <>
    <Fondo/>
    <Background/>
    <KeyboardAvoidingView 
    style={{flex:1}}
    behavior={ (Platform.OS === 'ios' ? 'padding':'height')}>
        <View style={{flex:1,paddingHorizontal:30,justifyContent:'center',height: 600,marginBottom:50}}>


    <Text style={ loginStyles.title }>Iniciar Sesión</Text>
    <Text style={ loginStyles.label }>Correo Electronico</Text>
    <TextInput
        placeholder='Correo electronico'
        keyboardType='email-address'
        underlineColorAndroid='black'

        autoCapitalize='none'
        autoCorrect={false}
        />
    <Text style={ loginStyles.label }>Contraseña</Text>
    <TextInput
        placeholder='*******'
        underlineColorAndroid='black'
        secureTextEntry={true}
        />
        <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
            activeOpacity={0.8}
            style={loginStyles.button}
            onPress={()=> navigation.replace('ProtectedScreen')}>
                    <Text>Iniciar sesión</Text>
            </TouchableOpacity>

        </View>

        
        </View>
    </KeyboardAvoidingView>
        
    
    
    </>
  );
}