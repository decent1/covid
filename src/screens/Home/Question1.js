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


export default function Question1({navigation}) {
    return (
      <View style={commonStyles.container}>
        <QuestionHeader />
        <Question question="Do you have symptoms of Corona virus?" />
        <Text style={styles.questionDes}>
          {
            'For example: fever, cough, sore throat/ears, stomachache. Applicable even if you previously tested negative for Corona virus.'
          }
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Question2')}
          style={[
            styles.button,
            {
              marginTop: 32,
            },
          ]}>
          <Text style={styles.buttonText}>{'NO'}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Question2')}
          style={[
            styles.button,
            {
              marginTop: 8,
            },
          ]}>
          <Text style={styles.buttonText}>{'YES'}</Text>
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          {'Answering yes, we can not issue a fit-to-travel certificate'}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    questionDes:{
        fontFamily:Fonts.medium,
        color:Colors.white,
        fontSize:16,
        marginHorizontal:16,
        marginTop:8
    },
    button:{
        borderRadius:5,
        marginHorizontal:16,
        backgroundColor:Colors.white,
        height:44,
        justifyContent:'center',
        paddingHorizontal:16,
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