import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    title:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10,
        textAlign:'left'  
    },
    title2:{
        color: 'black',
        fontSize: 30,
        fontWeight: 'lighter',
        marginTop:10,
        textAlign:'center'  
    },
    label:{
        marginTop:20,
        color: 'black',
        fontWeight: 'bold',
        marginHorizontal:10,
        borderWidth:2,
        borderColor:'#AF7AC5',
        borderRadius:100,
        backgroundColor: '#A018E0',
        textAlign: 'center'
    },
    label2:{
        fontSize:15,
        alignSelf:'center',
        color: 'black',
        fontWeight: 'lighter',
        marginHorizontal:10,
    },
    label3:{
        fontSize:15,
        alignSelf:'center',
        color: 'black',
        fontWeight: 'lighter',
        marginHorizontal:10,
    },
    img:{
        marginTop:10,
        alignSelf:'center',
        width:250,
        height:250
    },
    buttonContainer:{
        alignItems:'center',
        marginTop:50,        
    },
    button:{
        borderWidth:2,
        borderColor:'black',
        paddingHorizontal:20,
        paddingVertical:5,
        borderRadius:100,
        backgroundColor: '#A018E0',
        fontWeight: 'bold',
    }

    


});