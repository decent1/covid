import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import ButtonLarge from '../../components/Button/ButtonLarge'
import QuestionHeader from '../../components/QuestionHeader'
import Question from '../../components/Text/Question'
import { Colors } from '../../utils/Colors'
import { commonStyles } from '../../utils/commonStyles'
import { Fonts } from '../../utils/Fonts'


export default function Question3({navigation}) {
    return (
        <View style={commonStyles.container}>
            <QuestionHeader />
            <Question 
                question="Would you like a coronatest or a full check by a doctor?"
            />

            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>navigation.navigate('CovidTest')}
            style={[styles.button,{
                marginTop:32
            }]}>
                <Text style={styles.buttonText}>{'I am ill, and want a medical assessment'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
             activeOpacity={0.8}
             onPress={()=>navigation.navigate('CovidTest')}
            style={[styles.button,{
                marginTop:8
            }]}>
                <Text style={styles.buttonText}>{'I have mild symptoms, and only want a test'}</Text>
            </TouchableOpacity>

            <Text style={styles.bottomText}>
                {'Answering yes, we can not issue a fit-to-travel certificate'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:5,
        marginHorizontal:16,
        backgroundColor:Colors.white,
        justifyContent:'center',
        paddingVertical:16,
        paddingLeft:16,
        paddingRight:32
    },
    buttonText:{
        fontFamily:Fonts.regular,
        fontSize:16,
        color:Colors.primary
    },
    bottomText:{
        fontFamily:Fonts.regular,
        color:Colors.white,
        alignSelf:'center',
        position: 'absolute',
        bottom:32,
        textAlign:'center',
        marginHorizontal:16
    }
})