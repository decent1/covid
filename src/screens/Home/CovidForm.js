import { StyleSheet, Text, View , ScrollView, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'

const CovidForm = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <Text style={styles.title}>Who is this appointment for?</Text>
        <View style={styles.form}>
          {/* Full Name */}
          <Text style={styles.form_text}>Full name*</Text>
          <TextInput
            style={styles.input}
            placeholder={'Ola Nordmann'}
            // textAlignVertical={'top'}
            keyboardType={'default'}
          />
        
         
          {/* Email Address */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Email {''} address*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'ola@nordmann.no'}
            keyboardType={'email-address'}
          />
         
          {/* national Identity card */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            National identity number*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'000000000'}
            keyboardType={'number-pad'}
          />
          <TouchableOpacity activeOpacity={0.8} style={styles.idCard}>
            <Text style={styles.idCard_text}>
            No Norwegian identification number?
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
           activeOpacity={0.8}
           onPress={()=> navigation.navigate('CovidFormTravel')}
          style={styles.nextButton}>
            <Text style={styles.buttonText}>{'Next'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default CovidForm

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  form: {
    marginHorizontal: 24,
    marginTop: 30,
  },
  form_text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 6,
    paddingLeft: 15,
    fontSize: 18,
    color: Colors.primary,
  },
  small: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 12,
    marginTop: 5,
  },
  idCard: {
    borderWidth: 1,
    borderRadius: 30,
    width: 276,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderColor: Colors.white,
  },
  idCard_text: {
    color: Colors.white,
    fontSize:12,
    padding: 6,
    fontFamily:Fonts.regular

  },
  nextButton: {
    marginHorizontal: 16,
    height: 44,
    backgroundColor: '#D0E9EA',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 124,
    marginBottom: 26,
  },
  buttonText: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
});