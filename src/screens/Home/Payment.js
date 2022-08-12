import { StyleSheet, Text, TouchableOpacity, View , Image ,ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../../utils/commonStyles'
import QuestionHeader from '../../components/QuestionHeader'
import { Fonts } from '../../utils/Fonts'
import { Colors } from '../../utils/Colors'
import { ImagePath } from '../../utils/imagePath'

const Payment = ({navigation}) => {
  return (
    <View style={commonStyles.container}>
      <QuestionHeader />
        <Text style={styles.title}>How would you like to pay?</Text>
        <View style={styles.paymentView}>
          <TouchableOpacity
           activeOpacity={0.8}
           onPress={() => navigation.navigate('ThankYou')}
           style={styles.optionContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>{'Vipps PCR'}</Text>
            </View>
            <Image
              source={ImagePath.vpps}
              style={styles.vpps}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <TouchableOpacity 
           activeOpacity={0.8}
           onPress={() => navigation.navigate('ThankYou')}
          style={styles.optionContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>{'Credit Card'}</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Image
                source={ImagePath.visa}
                style={styles.vpps}
                resizeMode={'contain'}
              />
              <Image
                source={ImagePath.dots}
                style={styles.vpps}
                resizeMode={'contain'}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ThankYou')}
          style={styles.optionContainer}>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionTitle}>{'Pay in clinic'}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerTxt}>
          Cancelations are refundable up to 24 hours before the appointment.
        </Text>
    </View>
  );
}

export default Payment

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 16,
  },
  paymentView: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
    height: 56,
  },

  optionTitle: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  optionDes: {
    fontFamily: Fonts.regular,
    color: Colors.primary,
  },
  optionTextContainer: {
    flex: 1,
  },
  amount: {
    fontFamily: Fonts.medium,
    color: Colors.primary,
    fontSize: 16,
  },
  vpps: {
    width: 40,
    height: 40,
  },
  footerTxt: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.regular,
    textAlign: 'center',
    position: 'absolute',
    bottom: 16,
    marginHorizontal: 24,
  },
});