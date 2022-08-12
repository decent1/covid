import { StyleSheet, Text, View , ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import {Colors} from '../../utils/Colors';
import { ImagePath } from '../../utils/imagePath'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Doctor = () => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.title}>Dr.Dropin</Text>
          <Image source={ImagePath.group} style={styles.logo} />
        </View>
        <View style={styles.card}>
          <Text style={styles.name}>Sophie Kluften</Text>
          <TouchableOpacity style={styles.AppoinmentCodeBtn}>
            <Ionicons
              name="ios-qr-code-outline"
              size={20}
              color={Colors.white}
              style={{marginRight: 10}}
            />
            <Text style={styles.buttonText}>{'Appointment code'}</Text>
          </TouchableOpacity>
          <Text style={styles.codeNeed}>
            Please show the appointment code in clinic when required.{' '}
          </Text>
          <View style={styles.dotted}></View>
          <View style={[styles.textStyle, {marginTop: 20}]}>
            <Text style={[styles.card_text]}>1x Antigen Covid test</Text>
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
            </View>
            <View style={styles.textStyle}>
              <Text style={styles.paid}>Paid by :</Text>
              <Text style={styles.paid_name}>Marius Nilsen Kluften</Text>
            </View>
            <View style={styles.textStyle}>
              <Text style={styles.paid}>Paid On :</Text>
              <Text style={styles.paid_name}>28/01/2022, 18:45</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.nextButton}>
          <Text style={[styles.cancel_text]}>{'Cancel appoinment'}</Text>
        </TouchableOpacity>
        <Text style={styles.cancelation}>Cancelations are refundable up to 24 hours before the appointment.</Text>
        </View>
      
      </ScrollView>
    </View>
  );
}

export default Doctor

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
    // marginTop:20
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
    marginTop: 20,
  },

  AppoinmentCodeBtn: {
    flexDirection: 'row',
    height: 44,
    backgroundColor: Colors.primary,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: Fonts.medium,
    color: Colors.white,
    fontSize: 16,
  },
  logo: {
    width: 45,
    height: 45,
  },
  name: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
  },
  codeNeed: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.primary,
    marginTop: 10,
  },
  paid: {
    fontFamily: Fonts.semiBold,
    color: Colors.primary,
    fontSize: 14,
  },
  paid_name: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: 14,
  },
  nextButton: {
    height: 44,
    backgroundColor: 'transparent',
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#B4561F',
    marginTop: 20,
  },
  cancel_text: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: '#B4561F',
  },
  cancelation: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: Fonts.regular,
    color: Colors.primary,
    marginTop:10
  },
});