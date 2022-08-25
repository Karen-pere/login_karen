import React from 'react';
import { View} from 'react-native';

export const Background = () => {
  return(
    <View
    style={{
        position:'absolute',
        borderWidth:2,
        borderColor:'black',
        borderRadius: 10,
        backgroundColor:'#AF7AC5',
        top: 100,
        left:5,
        width:400,
        height:400,
        bottom: 100
        
    }}/>

  )
}
