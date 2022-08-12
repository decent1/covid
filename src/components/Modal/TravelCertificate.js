import { StyleSheet, Text, View ,ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { commonStyles } from '../../utils/commonStyles'
import { ImagePath } from '../../utils/imagePath'
import { Colors } from '../../utils/Colors'
import { Fonts } from '../../utils/Fonts'
import AntDesign from 'react-native-vector-icons/AntDesign';

const TravelCertificate = ({modalVisible}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Modalbody}>
          <Image source={ImagePath.travel} style={styles.covidTest} />
          <Text style={styles.title}>Which test should I choose?</Text>
          <View style={styles.note}>
            <Text style={styles.note_txt}>
              Please remember to bring your passport to the appointment.
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={styles.para}>
              Fit-to-Travel tests are available at all clinics. Certificates are
              issued upon a negative test result.
            </Text>
            <Text style={styles.heading}>Digital</Text>
            <Text style={styles.para}>
              Digital Digital certificates are encrypted and sent by email.
            </Text>
            <Text style={styles.heading}>Print</Text>
            <Text style={styles.para}>
              Print certificates are collected at our Frogner and Gardermoen
              test clinics during opening hours.{' '}
            </Text>
            <Text style={styles.para}>
              The certificate is English and is dated with fullname, passport
              number, date and time of when the test was taken, and the type of
              test taken.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.strip}>
        <AntDesign
          onPress={() => modalVisible()}
          name="closecircleo"
          size={20}
          color={Colors.primary}
          style={styles.cross}
        />
      </View>
    </View>
  );
};

export default TravelCertificate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  Modalbody: {
    marginHorizontal: 24,
    marginVertical: '10%',
  },
  covidTest: {
    height: 88,
    width: 88,
    alignSelf: 'center',
  },
  title: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  note: {
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#F1BB72',
    ...commonStyles.shadow,
  },
  note_txt: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.black,
  },
  para: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: Colors.primary,
    marginTop: 5,
  },
  heading: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: 16,
    marginTop: 10,
  },
  cross: {
    alignSelf: 'center',
  },
  strip: {
    backgroundColor: '#F5F5F5',
    padding: 12,
  },
});