import { StyleSheet, Text, View , ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'
import { ImagePath } from '../../utils/imagePath'

const ConfirmAppoinment = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <Text style={styles.title}>Confirm appointment</Text>
        <View style={styles.card}>
          <View style={styles.textStyle}>
            <Text style={styles.card_text}>1x Antigen Covid test</Text>
            <Text style={styles.card_text}>995,-</Text>
          </View>
          <View style={styles.textStyle}>
            <Text style={styles.card_text}>1x Fit-to-Travel certificate</Text>
            <Text style={styles.card_text}>200,-</Text>
          </View>
          <View style={styles.dotted}></View>
          <View style={{marginTop: 20}}>
            <View style={styles.patientDetail}>
              <Text style={styles.patient_title}>Paitient:</Text>
              <Text style={styles.patient_data}>Sophie Kluften</Text>
            </View>
            <View style={styles.patientDetail}>
              <Text style={styles.patient_title}>Personal Number:</Text>
              <Text style={styles.patient_data}>031092 29589</Text>
            </View>
            <View style={styles.patientDetail}>
              <Text style={styles.patient_title}>Date of birth:</Text>
              <Text style={styles.patient_data}>03.10.1992</Text>
            </View>
            <View style={styles.patientDetail}>
              <Text style={styles.patient_title}>Email:</Text>
              <Text style={styles.patient_data}>sophie@drdropin.no</Text>
            </View>
            <View style={styles.patientDetail}>
              <Text style={styles.patient_title}>Passport number:</Text>
              <Text style={styles.patient_data}>12789 182930 </Text>
            </View>
            <View style={styles.popUp}>
              <Text style={styles.popUp_txt}>
                {' '}
                Please remember to bring your passport to the appointment.
              </Text>
            </View>
            <View style={styles.dotted}></View>

            <View style={styles.footer}>
              <Text style={styles.footer_Txt}>17. januar | kl. 17.00</Text>
              <Text style={styles.place}>Testklinikk Frogner</Text>
              <Text style={styles.address}>Niels Juels gate 27, 0257 Oslo</Text>
              
              <Image source={ImagePath.map} style={styles.map} />
              
              <View style={styles.hr}></View>
              <View style={styles.textStyle}>
                <Text style={styles.totalPrice}>Total Price</Text>
                <Text style={styles.totalPrice}>1195,-</Text>
              </View>
              <Text style={styles.code}>
                Do you have insurance or an offer code?
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Order')}
          style={styles.nextButton}>
          <Text style={styles.buttonText}>{'Confirm order'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default ConfirmAppoinment

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  card: {
    margin: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    ...commonStyles.shadow,
    // height: 928,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  textStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card_text: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  dotted: {
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    marginTop: '10%',
    borderStyle: 'dashed',
  },
  patientDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 20,
  },
  patient_title: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.semiBold,
    paddingBottom: 8,
  },
  patient_data: {
    fontSize: 16,
    color: Colors.primary,
    fontFamily: Fonts.regular,
    paddingBottom: 8,
  },
  popUp: {
    backgroundColor: '#F1BB72',
    borderRadius: 6,
    ...commonStyles.shadow,
  },
  popUp_txt: {
    padding: 20,
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.black,
  },
  footer: {
    marginTop: 20,
  },
  footer_Txt: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  place: {
    color: Colors.primary,
    fontFamily: Fonts.bold,
    fontSize: 16,
  },
  address: {
    color: Colors.primary,
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  map: {
    borderWidth: 1,
    width: 279,
    height: 168,
    borderRadius: 6,
    marginTop: 10,
    backgroundColor: Colors.gray,
  },
  hr: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    marginTop: '10%',
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    marginTop: 20
  },
  code:{
      fontSize:14,
      fontFamily:Fonts.regular,
      color:Colors.primary,
      marginTop:20
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