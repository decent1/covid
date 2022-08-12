import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'

export default function Question({
    question="",
    style
}){
    return(
        <Text style={[styles.text,{
            ...style
        }]}>
            {question}
        </Text>
    )
}

const styles = StyleSheet.create({
    text:{
        fontFamily:Fonts.medium,
        color:Colors.white,
        fontSize:20,
        marginTop:16,
        marginHorizontal:16
    }
})