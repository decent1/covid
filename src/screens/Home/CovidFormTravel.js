import { StyleSheet, Text, View , ScrollView, TextInput, TouchableOpacity ,} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'

const CovidFormTravel = ({navigation}) => {

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
          <Text style={styles.small}>
            This will be shown on the Fit-to-Travel certificate
          </Text>
          {/* Passport Number */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Passport {''} number*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'000000000'}
            keyboardType={'number-pad'}
          />
          {/* Date of birth */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Date of birth*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'DD-MM-YY'}
            keyboardType={'number-pad'}
          />
          {/* Current residing address in Norway* */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Current residing address in Norway*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'Bogstadveien 54'}
            keyboardType={'number-pad'}
          />
          <View style={styles.twoInputs}>
            <TextInput
              style={styles.smallinput}
              placeholder={'0366'}
              keyboardType={'number-pad'}
            />
            <TextInput
              style={styles.largeInput}
              placeholder={'Olso'}
              keyboardType={'number-pad'}
            />
          </View>
          {/* Mobile Number */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Mobile {''} number*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'+47 000 00 000'}
            keyboardType={'number-pad'}
          />
          <Text style={styles.small}>
            In the case of a child (under 16 years old), please enter the
            parent’s mobile number.
          </Text>
          {/* Email Address */}
          <Text style={[styles.form_text, {marginTop: 20}]}>
            Email {''} address*
          </Text>
          <TextInput
            style={styles.input}
            placeholder={'ola@nordmann.no'}
            keyboardType={'email-address'}
          />
          <Text style={styles.small}>
            The digital Fit-to-Travel certificate will be sent to this email
            address
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.idCard}>
            <Text style={styles.idCard_text}>
              Have a Norwegian identification number?{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>navigation.navigate('ConfirmAppoinment')}
          style={styles.nextButton}>
            <Text style={styles.buttonText}>{'Next'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default CovidFormTravel

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
      fontSize: 12,
      padding: 6,
      fontFamily: Fonts.regular,
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
    twoInputs: {
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop:10
    },
    smallinput:{
      backgroundColor:Colors.white,
      borderRadius:6,
      width:103,
      padding:12,
      paddingLeft: 15,
      fontSize: 18,
      color:Colors.primary
    },
    largeInput:{
      backgroundColor:Colors.white,
      borderRadius:6,
      padding:12,
      paddingLeft: 15,
      fontSize: 18,
      color:Colors.primary,
      width:200
  
    }
  });