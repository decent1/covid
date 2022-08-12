import React from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Colors } from '../utils/Colors'

export default function QuestionHeader({
    onBackPress=() => {},
    onClosePress=() => {},
    filled="20%"
}){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
            onPress={() => onBackPress()}
            style={styles.iconContainer}>
                <Ionicons 
                    name="arrow-back"
                    size={24}
                    color={Colors.white}
                />
            </TouchableOpacity>
            <View style={styles.rowContainer}>
                <View style={[styles.filledContainer,{
                    width:filled
                }]}>

                </View>
            </View>
            <TouchableOpacity 
            onPress={() => onClosePress()}
            style={styles.iconContainer}>
                <Ionicons 
                    name="close"
                    size={24}
                    color={Colors.white}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:50,
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    iconContainer:{
        height:50,
        width: 50,
        alignItems:'center',
        justifyContent:'center'
    },
    rowContainer:{
        height:4,
        width: 154,
        backgroundColor:'rgba(255, 255, 255, 0.2)',
        borderRadius:30,
    },
    filledContainer:{
        height:4,
        borderRadius:30,
        backgroundColor:'#4FD4C6'
    }
})